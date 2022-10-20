class Maps{
    constructor(name, desc){
        this.name = name
        this.desc = desc
    }
}

let m = []

m.push(new Maps(
    'Ascent',
    'An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.'
))

m.push(new Maps(
    'Icebox',
    'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
))

m.push(new Maps(
    'Bind',
    'Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.'
))

m.push(new Maps(
    'Haven',
    'Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.'
))

m.push(new Maps(
    'Split',
    'If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.'
))

m.push(new Maps(
    'Breeze',
    "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze."
))

$(document).ready(function(){
    if($('title').text() === 'LaForant | Maps'){
        let container = $('.showcase-items')
        for(let i = 0; i < m.length; i++){
            let img = `../assets/_maps/${m[i].name.toLowerCase()}.png`
            let name = m[i].name
            let desc = m[i].desc
            let map_class = $('<div>').attr('class', 'showcase-box')
            let map_img_cont = $('<div>').attr('class', 'showcase-image')
            let map_img = $('<img>').attr('src', img)
            let map_name = $('<h3>').attr('class', 'showcase-name')
            let map_desc = $('<h5>').attr('class', 'showcase-desc')
            let map_text = $('<div>').attr('class', 'showcase-texts')
            map_name.text(name)
            map_desc.text(desc)
            map_img_cont.append(map_img)
            map_text.append(map_name)
            map_text.append(map_desc)
            map_class.append(map_img_cont)
            map_class.append(map_text)
            container.append(map_class)
        }
    } else if($('title').text() === 'LaForant | Home'){
        let container = $('#showcase-maps .showcase-items')
        for(let i = 0; i < 3; i++){
            let img = `assets/_maps/${m[i].name.toLowerCase()}.png`
            let name = m[i].name
            let maps_class = $('<div>').attr('class', 'showcase-box')
            let maps_img_cont = $('<div>').attr('class', 'showcase-image')
            let maps_img = $('<img>').attr('src', img)
            let maps_name = $('<h3>').attr('class', 'showcase-name').text(name)
            let maps_text = $('<div>').attr('class', 'showcase-texts')
            maps_text.append(maps_name)
            maps_img.css({
                'background-color': 'rgb(212, 244, 255)'
            })
            maps_img_cont.append(maps_img)
            maps_class.append(maps_img_cont)
            maps_class.append(maps_text)
            container.append(maps_class)
        }
    }
})