function change_slide(slide_idx, slides_len){
    console.log(`changing from slide ${slide_idx}`)
    let slides = $('.slide')
    slides.hide()
    slide_idx = (slide_idx + 1) % slides_len
    slides.hide()
    slides.eq(slide_idx).show()
    setTimeout(change_slide, 3000, slide_idx, slides_len)
}

$(document).ready(function(){
    $('.slide').hide()
    $('.slide').eq(0).show()
    setTimeout(change_slide, 3000, 0, $('.slide').length)
})