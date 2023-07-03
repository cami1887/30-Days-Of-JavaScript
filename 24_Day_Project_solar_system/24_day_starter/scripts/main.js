let header = document.querySelector('header');
let title = document.querySelector('h1');
let input = document.querySelector('input');
let selection = document.querySelector('select');
let button = document.querySelector('button');
let main = document.querySelector('main');
let flexContainer = document.querySelector('.flex-container');
let flexImage = document.querySelector('.flex-image');
let planetImage = document.querySelector('.planet-image');
let flexDescription = document.querySelector('.flex-description');
let planets = ['Jupiter', 'Mars', 'Mercury', 'Moon', 'Earth', 'Neptune', 'Pluto', 'Saturn', 'Uranus', 'Venus'];
button.addEventListener('click', getMass);
let mass = 0;
let div = document.createElement('div');
let p = document.createElement('p');
flexDescription.appendChild(div);
flexDescription.appendChild(p);
p.classList.add('result-weight');
div.classList.add('result-string');
let resultString = document.querySelector('.result-string');
let resultWeight = document.querySelector('.result-weight');
document.body.style.backgroundImage = "url('./images/galaxy.gif')"
header.style.textAlign = 'center';
title.style.color = 'white'
main.style.textAlign = 'center';
flexContainer.style.backgroundColor = 'rgba(242, 242, 242, 0.15)';
flexContainer.style.padding = '80px';
flexContainer.style.width = '1100px';
flexContainer.style.margin = '100px auto';
planetImage.style.verticalAlign = 'middle';


function getMass(event) {
    if (+input.value/1) {
      flexContainer.style.display = 'flex';
      flexContainer.style.justifyContent = 'space-between'
      flexDescription.style.backgroundColor = 'rgba(242, 242, 242, 0.2)';
      flexDescription.style.width = '500px';
      flexDescription.style.font = '20px arial';
      flexDescription.style.color = 'white';
     
        switch(selection.value) {
        case 'Earth' :
            mass = parseInt(input.value*9.8);
            resultWeight.innerText=mass+'.00 N'; 
            resultString.innerHTML = `The weight of the object on <span>Earth</span>`;
            planetImage.src = './images/earth.png';
        break;
        case 'Jupiter' :
           mass = parseInt(input.value*23.1);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Jupiter</span>`;
           planetImage.src = './images/jupiter.png';
        break;
        case 'Venus':
           mass = parseInt(input.value*8.9);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Venus</span>`;
           planetImage.src = './images/venus.png';
        break;
        case 'Mars':
           mass = parseInt(input.value*3.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Mars</span>`;
           planetImage.src = './images/mars.png';
        break;
        case 'Mercury':
           mass = parseInt(input.value*3.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Mercury</span>`;
           planetImage.src = './images/mercury.png';
        break;
        case 'Moon':
           mass = parseInt(input.value*1.6);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Moon</span>`;
           planetImage.src = './images/moon.png';
        break;
        case 'Neptune':
           mass = parseInt(input.value*11);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Neptune</span>`;
           planetImage.src = './images/neptune.png';
        break;
        case 'Pluto':
           mass = parseInt(input.value*.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Pluto</span>`;
           planetImage.src = './images/pluto.png';
        break;
        case 'Saturn':
           mass = parseInt(input.value*9);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Saturn</span>`;
           planetImage.src = './images/saturn.png';
        break;
        case 'Uranus':
           mass = parseInt(input.value*8.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span>Uranus</span>`;
           planetImage.src = './images/uranus.png';
        break;
        default:
         resultString.innerText = `Select A Planet`;
         resultWeight.innerText = ' ';
         planetImage.src = " ";
      }
    }
    else {
        resultString.innerText="Mass is required";
        resultWeight.innerText = ' ';
        planetImage.src = " ";
    }
}

for (let planet of planets) {
    let option = document.createElement('option');
    option.innerText = planet;
    selection.append(option);
}

console.log("test");
//single line comment
/*multiline comment */