let alt_state = 0

function dropdown_fix(){
    let top_delta = `${$('.navbar').height()}px`
    $('.nav-dropdown-container').css({
        'margin-top': top_delta
    })
    // console.log(top_delta)
}

function dropdown_width_fix(){
    let master_width = `${$('.nav-dropdown').width()}px`
    $('.nav-dropdown-container').css({
        'min-width': master_width
    })
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

function hide_nav(){
    $(document).click(function(event) {
        if(!$(event.target).closest('#alt-navbar .navbar-nav').length && $('#alt-navbar .navbar-nav').css('display') === 'flex'){
            $("#alt-navbar .navbar-nav").css({
                display: 'none'
            })
        }
    });
}

function show_nav(){
    // $("#alt-navbar #show-nav").css({
    //     display: 'none'
    // })
    // $("#alt-navbar .nav-title").css({
    //     display: 'none'
    // });
    $("#alt-navbar .navbar-nav").css({
        display: 'flex'
    });
    alt_state = 1
    // hide_nav()
}

$(window).resize(function(){
    console.log('window resized')
    alt_state = 0
    logo_height_fix()
    dropdown_fix()
    dropdown_width_fix()
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
    $(document).click(function(event) {
        if(!$(event.target).closest('.navbar').length &&
            $('#alt-navbar .navbar-nav').css('display') === 'flex'){
            console.log("hid navbar menu")
            $("#alt-navbar .navbar-nav").css({
                display: 'none'
            })
        }
    });
})

$(document).ready(function(){
    alt_state = 0
    logo_height_fix()
    dropdown_fix()
    dropdown_width_fix()
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
    $(document).click(function(event) {
        if(!$(event.target).closest('.navbar').length &&
            $('#alt-navbar .navbar-nav').css('display') === 'flex'){
            console.log("hid navbar menu")
            $("#alt-navbar .navbar-nav").css({
                display: 'none'
            })
        }
    });
})