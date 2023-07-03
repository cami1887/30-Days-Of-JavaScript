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
let div2 = document.createElement('div');
let p = document.createElement('p');
div.classList.add('result-string');
p.classList.add('result-weight');
div2.classList.add('weight-container');
flexDescription.appendChild(div);
flexDescription.appendChild(div2);
let resultWeightContainer = document.querySelector('.weight-container');
resultWeightContainer.appendChild(p);
let resultString = document.querySelector('.result-string');
let resultWeight = document.querySelector('.result-weight');
document.body.style.backgroundImage = "url('./images/galaxy.gif')"
header.style.textAlign = 'center';
header.style.marginBottom = '10px';
main.style.marginTop = '0px'
title.style.color = 'white'
main.style.textAlign = 'center';
flexContainer.style.backgroundColor = 'rgba(242, 242, 242, 0.15)';
flexContainer.style.padding = '80px';
flexContainer.style.width = '1100px';
flexContainer.style.margin = '0px auto 100px';
planetImage.style.verticalAlign = 'middle';
selection.style.border = 'none';
selection.style.padding = '10px 5px';
selection.style.width ='150px';
selection.style.borderRadius = '3px';
selection.style.color ='lightgrey'
button.style.padding = '10px 5px';
button.style.border = 'none';
button.style.borderRadius = '3px';
button.style.color = 'white';
button.style.backgroundColor = 'grey';
input.style.padding = '10px 5px';
input.style.width = '200px'
title.style.font = '50px Arial';
title.style.letterSpacing = '5px'
function getMass(event) {
    if (+input.value/1) {
      flexContainer.style.display = 'flex';
      flexContainer.style.justifyContent = 'space-evenly'
      flexDescription.style.backgroundColor = 'rgba(242, 242, 242, 0.2)';
      flexDescription.style.font = '20px arial';
      flexDescription.style.color = 'white';
      flexDescription.style.margin = 'auto';
      flexDescription.style.padding = '40px 80px'
      flexDescription.style.backgroundColor = 'rgba(242, 242, 242, 0.22)';
      resultWeightContainer.style.backgroundColor = 'rgba(242, 242, 242, 0.25)';
      resultWeightContainer.style.borderRadius = '100%';
      resultWeightContainer.style.width = '150px';
      resultWeightContainer.style.height = '150px';
      resultWeightContainer.style.margin = 'auto';
      resultWeight.style.verticalAlign = 'middle';
      resultWeight.style.padding = '55px 0px';
      resultWeight.style.font = '32px arial';
      resultWeight.style.fontWeight = 'bold';
      resultString.style.font = '28px arial';
        switch(selection.value) {
        case 'Earth' :
            mass = parseInt(input.value*9.8);
            resultWeight.innerText=mass+'.00 N'; 
            resultString.innerHTML = `The weight of the object on Earth`;
            // resultWeight.style.visibility = 'visible'
            planetImage.src = './images/earth.png';
        break;
        case 'Jupiter' :
           mass = parseInt(input.value*23.1);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on Jupiter`;
           planetImage.src = './images/jupiter.png';
        break;
        case 'Venus':
           mass = parseInt(input.value*8.9);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Venus</span>`;
           planetImage.src = './images/venus.png';
        break;
        case 'Mars':
           mass = parseInt(input.value*3.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Mars</span>`;
           planetImage.src = './images/mars.png';
        break;
        case 'Mercury':
           mass = parseInt(input.value*3.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Mercury</span>`;
           planetImage.src = './images/mercury.png';
        break;
        case 'Moon':
           mass = parseInt(input.value*1.6);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Moon</span>`;
           planetImage.src = './images/moon.png';
        break;
        case 'Neptune':
           mass = parseInt(input.value*11);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Neptune</span>`;
           planetImage.src = './images/neptune.png';
        break;
        case 'Pluto':
           mass = parseInt(input.value*.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Pluto</span>`;
           planetImage.src = './images/pluto.png';
        break;
        case 'Saturn':
           mass = parseInt(input.value*9);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Saturn</span>`;
           planetImage.src = './images/saturn.png';
        break;
        case 'Uranus':
           mass = parseInt(input.value*8.7);
           resultWeight.innerText=mass+'.00 N';
           resultString.innerHTML = `The weight of the object on <span class="planet" >Uranus</span>`;
           planetImage.src = './images/uranus.png';
        break;
        default:
         resultString.innerText = `Select A Planet`;
         resultWeight.innerText = ' ';
         resultWeightContainer.style.height = '0';
         planetImage.src = " ";
         flexDescription.style.backgroundColor = 'rgba(242, 242, 242, 0.2)';
         flexDescription.style.font = '20px arial';
         flexDescription.style.color = 'white';
         flexDescription.style.margin = 'auto';
         flexDescription.style.padding = '40px 80px';
        }
    }
    else {
        resultString.innerText="Mass is required";
        resultWeight.innerText = ' ';
        resultWeightContainer.style.height = '0';
        planetImage.src = " ";
        flexDescription.style.backgroundColor = 'rgba(242, 242, 242, 0.2)';
        flexDescription.style.font = '28px arial';
        flexDescription.style.color = 'white';
        flexDescription.style.margin = 'auto';
        flexDescription.style.padding = '40px 80px';
    }
}

for (let planet of planets) {
    let option = document.createElement('option');
    option.innerText = planet;
    selection.append(option);
}
