var t
var sl = 0

function change_slide(slide_idx, slides_len, c=1){
    console.log(`changing from slide ${slide_idx}`)
    let slides = $('.slide')
    slides.hide()
    if(c === 1){
        slide_idx = (slide_idx + 1) % slides_len
    } else if(c === 0){
        slide_idx = ((slide_idx - 1) + slides_len) % slides_len
    }
    slides.hide()
    slides.eq(slide_idx).show()
    sl = slide_idx
    t = setTimeout(change_slide, 3000, slide_idx, slides_len)
}

$(document).ready(function(){
    console.log($('.slide'))
    $('.slide').hide()
    $('.slide').eq(0).show()
    t = setTimeout(change_slide, 3000, 0, $('.slide').length)
    $('#btn-sprev').click(function() {
        clearTimeout(t)
        change_slide(sl, $('.slide').length, 0)
    })
    $('#btn-snext').click(function(event) {
        clearTimeout(t)
        change_slide(sl, $('.slide').length, 1)
    })
})