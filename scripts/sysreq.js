function desc_animation(){
    let width = document.documentElement.clientWidth
    let anim_speed = 1 + (width / 800);
    let td = document.getElementById('sysreq-minimum')
    let sd = document.getElementById('sysreq-recommended')
    if(width > 800){
        td.style['animation-duration'] = anim_speed + 's'
        sd.style['animation-duration'] = anim_speed + 's'
    } else{
        anim_speed = 2
    }
}

$(document).ready(function(){
    // desc_animation()
})