function desc_animation(){
    let width = document.documentElement.clientWidth
    let anim_speed = 1 + (width / 800);
    let td = document.getElementById('content-information-title')
    let sd = document.getElementById('content-information-desc')
    if(width > 800){
        td.style['animation-duration'] = anim_speed + 's'
        sd.style['animation-duration'] = anim_speed + 's'
    } else{
        anim_speed = 2
    }
}

// desc_animation()

$(document).ready(function(){
    desc_animation()
})