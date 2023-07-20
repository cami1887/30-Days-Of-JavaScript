let div = document.querySelector('div');
let background = document.querySelector('body');
let string = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH';
div.style.fontDisplay= 'swap';
div.style.fontSize = '100px';
div.style.padding = '100px';
div.style.lineHeight = '150px';
div.style.letterSpacing = '10px';
let increase = 1;
let fonts = ['Montserrat','Aldrich', 'Lato', 'Nunito', 'Oswald', 'Raleway', 'Raleway Dots', 'Roboto']

for (let i=0; i<string.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = `${string[i]}`;
    span.setAttribute('id', `${string[i]}`)
    div.appendChild(span);
    changeColor();
}

function changeColor() {
    let stuff = div.childNodes;
    for (let i=0; i<div.childNodes.length; i++) {
        stuff[i].style.color = randomRGB();
    }
    document.body.style.backgroundColor = randomRGB();
    
}

function randomRGB() {
    let rgbOne = Math.floor(Math.random()*250);
    let rgbTwo = Math.floor(Math.random()*250);
    let rgbThree = Math.floor(Math.random()*250);
    return `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`
}

function fadeIn() {
    if (increase < 100) {
        div.style.opacity = `${increase}%`
        increase++;
    }

    if (increase === 100) {
        div.style.opacity = `${increase}%`
        increase = 1;
    }  
}

function changeFont() {
    div.style.fontFamily = `${fonts[Math.floor(Math.random()*fonts.length-1)]}`
}

setInterval(fadeIn, 10);
setInterval(changeColor, 1000)
setInterval(changeFont, 1000)