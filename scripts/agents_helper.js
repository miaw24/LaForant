class Character{
    constructor(name, backstory){
        this.name = name
        this.backstory = backstory
    }
}

let chars = []

chars.push(new Character(
    "Sova",
    "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide."
))

chars.push(new Character(
    'Viper',
    "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will."
    ))

chars.push(new Character(
    "Yoru",
    "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look."
    ))

chars.push(new Character(
    "Brimstone",
    "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander."
))

chars.push(new Character(
    "Phoenix",
    "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms."
))

chars.push(new Character(
    "Sage",
    "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight."
))

chars.push(new Character(
    "Reyna",
    "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance."
    ))

chars.push(new Character(
    "Cypher",
    "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching."
))

chars.push(new Character(
    "Killjoy",
    "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them."
))

chars.push(new Character(
    "Breach",
    "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair."
))

chars.push(new Character(
    "Omen",
    "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next."
))

chars.push(new Character(
    "Jett",
    "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them."
))

chars.push(new Character(
    "Raze",
    "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”"
))

chars.push(new Character(
    "Skye",
    "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side."
))

chars.push(new Character(
    "Astra",
    "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move."
))

$(document).ready(function(){
    if($('title').text() === 'LaForant | Agents'){
        let container = $('#character-container')
        for(let i = 0; i < chars.length; i++){
            let img = `../assets/_characters/${chars[i].name.toLowerCase()}.png`
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
            let img = `assets/_characters/${chars[i].name.toLowerCase()}.png`
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