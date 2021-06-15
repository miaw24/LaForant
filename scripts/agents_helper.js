class Character{
    constructor(name, backstory, image){
        this.name = name
        this.backstory = backstory
        this.image = image
    }
}

let viper = new Character(
    'Viper',
    "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    '../assets/_characters/viper.png'
    )

let reyna = new Character(
    "Reyna",
    "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
    '../assets/_characters/reyna.png'
    )

let yoru = new Character(
    "Yoru",
    "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
    '../assets/_characters/yoru.png'
    )

let chars = []

chars.push(reyna)
chars.push(viper)
chars.push(yoru)

// console.log(viper)

$(document).ready(function(){
    if($('title').text() === 'LaForant | Agents'){
        let container = $('#character-container')
        for(let i = 0; i < chars.length; i++){
            let img = chars[i].image
            let name = chars[i].name
            let backstory = chars[i].backstory
            let char_class = $('<div>').attr('class', 'character')
            let char_img = $('<img>').attr('class', 'character-image').attr('src', img)
            let char_name = $('<h3>').attr('class', 'character-name')
            let char_backstory = $('<h5>').attr('class', 'character-backstory')
            let char_text = $('<div>').attr('class', 'character-desc')
            char_name.text(name)
            char_backstory.text(backstory)
            char_text.append(char_name)
            char_text.append(char_backstory)
            char_class.append(char_img)
            char_class.append(char_text)
            container.append(char_class)
        }
    } else if($('title').text() === 'LaForant | Home'){
        let container = $('#showcase-charas .showcase-items')
        // for(let i = 0; i < chars.length; i++){
        for(let i = 0; i < 3; i++){
            let img = chars[i].image.replace('../', '')
            let name = chars[i].name
            let char_class = $('<div>').attr('class', 'showcase-box')
            let char_img_cont = $('<div>').attr('class', 'showcase-image')
            let char_img = $('<img>').attr('src', img)
            let char_name = $('<h3>').attr('class', 'showcase-name').text(name)
            let char_text = $('<div>').attr('class', 'showcase-texts')
            char_text.append(char_name)
            char_img_cont.append(char_img)
            char_class.append(char_img_cont)
            char_class.append(char_text)
            container.append(char_class)
        }
    }
})