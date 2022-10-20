const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const USERNAME_VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890_'
const USERNAME_LENGTH = 8
const PASSWORD_LENGTH = 8
const EMAIL_VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890.'
const DOMAIN_VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890-'
const UPPER_LEVEL_DOMAIN_VALID_CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890.'

function validate_username(username_raw, error_message){
    username = username_raw.value.toLowerCase()
    if(username === ''){
        error_message.push('Username must not be empty')
    } else if(username.length < USERNAME_LENGTH){
        error_message.push(`Username must have at least ${USERNAME_LENGTH} characters`)
    } else{
        for(let i = 0; i < username.length; i++){
            if(!(USERNAME_VALID_CHARS.includes(username[i]))){
                error_message.push('Username must only contain alphanumeric characters and underscore')
            }
        }
    }
}

function validate_password(password_raw, error_message){
    let password = password_raw.value
    if(password === ''){
        error_message.push('Password must not be empty')
    } else if(password.length < PASSWORD_LENGTH){
        error_message.push(`Password must have at least ${PASSWORD_LENGTH} characters`)
    }
}

function parse_email(str_email){
    let temp = 0
    let flag = true
    let domain_start_idx = str_email.indexOf('@')
    let upper_level_domain_start_idx = null
    if(domain_start_idx === -1){
        flag = false
    }
    if(flag){
        for(let i = domain_start_idx; i < str_email.length; i++){
            if(str_email[i] === '.'){
                upper_level_domain_start_idx = i
                break
            }
        }
        if((str_email.length - (domain_start_idx + 1)) > 64){
            flag = false
        }
        if(str_email.endsWith('.')){
            flag = false
        }
        if(flag){
            for(let i = 0; i < str_email.length; i++){
                if(i < domain_start_idx){
                    if(!EMAIL_VALID_CHARS.includes(str_email[i])){
                        flag = false
                        break
                    } else if(str_email[i] === '.' && str_email[i+1] === '.'){
                        flag = false
                        break
                    }
                } else if(i > domain_start_idx && i < upper_level_domain_start_idx){
                    if(!DOMAIN_VALID_CHARS.includes(str_email[i])){
                        flag = false
                        break
                    }
                } else if(i > upper_level_domain_start_idx){
                    if(!UPPER_LEVEL_DOMAIN_VALID_CHARS.includes(str_email[i])){
                        flag = false
                        break
                    } else{
                        if(str_email[i] === '.'){
                            if(temp < 2){
                                flag = false
                                break
                            } else{
                                temp = 0
                            }
                        } else{
                            temp += 1
                        }
                    }
                }
            }
        }
        if(flag){
            if(temp < 2){
                flag = false
            }
        }
    }
    return flag
}

function validate_email(email_raw, error_message){
    email = email_raw.value.toLowerCase()
    if(email === ''){
        error_message.push('Email must not be empty')
    } else if(
            email.startsWith('.') ||
            email.startsWith('@')
        ){
        error_message.push('Email must not starts with . or @')
    } else if(email.indexOf('.') === email.indexOf('@') + 1){
        error_message.push('Email must not contain . after @')
    } else if(!parse_email(email)){
        error_message.push('Email must be a valid email')
    }
}

function validate_user_agreement(user_agreement, error_message){
    if(!user_agreement.checked){
        error_message.push('You must agree to the user agreement')
    }
}

function validate_nationality(nationality, error_message){
    if(nationality.value === '__select__'){
        error_message.push('Please select a nationality')
    }
}

function validate_dob(dob, error_message){
    let current_date = new Date()
    let dob_date = new Date(dob.value)
    if(isNaN(dob_date.getTime())){
        error_message.push('Please enter your date of birth')
    } else{
        let current_date = new Date()
        let dob_date = new Date(dob.value.split('-').toString())
        let diff = (new Date(current_date.getTime() - dob_date.getTime())).getUTCFullYear() - 1970;
        if(diff < 16){
            error_message.push('You must at least be 16 years old to access this game')
        }
    }
}

function validate_input(){
    let username = document.getElementById("username-input")
    let password = document.getElementById("password-input")
    let email = document.getElementById('email-input')
    let nationality = document.getElementById("nationality-input")
    let dob = document.getElementById("dob-input")
    let user_agreement = document.getElementById("user-agreement")
    let error_message = []

    validate_username(username, error_message)
    validate_password(password, error_message)
    validate_email(email, error_message)
    validate_dob(dob, error_message)
    validate_nationality(nationality, error_message)
    validate_user_agreement(user_agreement, error_message)

    console.log(error_message)

    if(error_message.length === 0){
        alert('Registration Success!\n')
        return true
    } else{
        alert(error_message.join('\n'))
        return false
    }
}