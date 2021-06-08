function dropdown_fix(){
    let top_delta = `${$('.navbar').height()}px`
    $('.nav-dropdown-container').css({
        'margin-top': top_delta
    })
    // console.log(top_delta)
}

function logo_height_fix(){
    let navbar_height = `${$('.navbar').height()}px`
    let max_logo_height = `${$('.navbar').height() - ($('.nav-logo').innerWidth() - $('.nav-logo').width())}px`
    console.log(max_logo_height)
    console.log($('.nav-logo').innerWidth())
    console.log($('.nav-logo').width())
    $('.nav-logo').css({
        'max-height': max_logo_height
    })
}

$(document).ready(function(){
    logo_height_fix()
    dropdown_fix()
    $('.nav-item-prereg .nav-link').on('mouseenter', function(){
        $('.nav-item-prereg').css({
            'background-color': 'rgb(255, 60, 0)'
        })
    })
    $('.nav-item-prereg .nav-link').on('mouseleave', function(){
        $('.nav-item-prereg').css({
            'background-color': 'rgb(255, 174, 0)'
        })
    })
})