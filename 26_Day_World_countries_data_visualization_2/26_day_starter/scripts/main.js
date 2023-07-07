let header = document.querySelector('header');
let headerBackground = document.querySelector('.header-background');
let buttons = document.querySelector('.buttons')
let title = document.querySelector('h1');
let main = document.querySelector('main');
let totalCountries = document.querySelector('.total-countries');
let results = document.querySelector('.results');
let firstCharacters = document.querySelector('.first-characters');
let anyCharacters = document.querySelector('.any-characters');
let input = document.querySelector('input');
let countriesContainer = document.querySelector('.countries-container');
let sort = document.querySelector('.sort');
let filteredFirstCharacters = [];
let filteredAnyCharacters = [];
let firstCharButtonClicked = false;
let anyCharButtonClicked = false;
firstCharacters.addEventListener('click', searchFirstCharacters);
anyCharacters.addEventListener('click', searchAnyCharacters);
sort.addEventListener('click', sortLists);
header.style.backgroundImage = "url(./images/globe-2.jpg)";
header.style.height = '600px';
header.style.maxWidth = '100%';
header.style.backgroundSize = 'cover';
header.style.margin ='0';
headerBackground.style.backgroundColor = 'rgba(0, 163, 255, 0.2)';
header.style.boxShadow = 'inset 0px -90px 100px rgb(60, 60, 60)'
headerBackground.style.height ='100%';
headerBackground.style.paddingTop = '150px';

input.style.width = '500px';
input.style.padding = '15px';
input.style.borderRadius = '30px';
input.style.border = 'none';
input.style.margin = '30px 480px';

title.style.textAlign = 'center';
title.style.margin = 'auto';
title.style.font = '50px arial';
title.style.fontWeight = 'bold';
title.style.color = 'white';
title.style.letterSpacing = '10px';

totalCountries.style.textAlign = 'center';
totalCountries.style.color = 'white';
totalCountries.style.font = '24px arial';
totalCountries.style.fontWeight = 'bold'

results.style.textAlign = 'center';
results.style.color = 'white';
results.style.font = '24px arial';
results.style.fontWeight = 'bold';

firstCharacters.style.backgroundColor = 'rgb(163, 141, 255)';
firstCharacters.style.border = 'none';
firstCharacters.style.padding = '15px';
firstCharacters.style.color = 'white';
firstCharacters.style.fontWeight = 'bold';
firstCharacters.style.margin = 'auto';
firstCharacters.style.boxShadow = 'inset -10px 0px 15px rgba(0, 0, 50, .4)';
firstCharacters.style.borderRadius = '5px'

anyCharacters.style.backgroundColor = 'rgb(163, 141, 255)';
anyCharacters.style.border = 'none';
anyCharacters.style.padding = '15px';
anyCharacters.style.color = 'white';
anyCharacters.style.fontWeight = 'bold';
anyCharacters.style.margin = 'auto';
anyCharacters.style.boxShadow = 'inset -10px 0px 15px rgba(0, 0, 50, .4)';
anyCharacters.style.borderRadius = '5px'

sort.style.backgroundColor = 'rgb(163, 141, 255)';
sort.style.border = 'none';
sort.style.padding = '15px';
sort.style.color = 'white';
sort.style.fontWeight = 'bold';
sort.style.margin = 'auto';
sort.style.boxShadow = 'inset -10px 0px 15px rgba(0, 0, 50, .4)';
sort.style.borderRadius = '5px'

buttons.style.margin = 'auto';
buttons.style.textAlign = 'center';

function searchFirstCharacters(event) {
    anyCharButtonClicked = false;
    firstCharButtonClicked = true;
    filteredFirstCharacters = countries.filter(country=> country[0] === input.value.toUpperCase());
    results.innerText = `The number of countries starting with the letter "${input.value}" are ${filteredFirstCharacters.length}`
    displayCountries(filteredFirstCharacters);
}

function searchAnyCharacters(event) {
    anyCharButtonClicked = true;
    firstCharButtonClicked = false;
    filteredAnyCharacters = countries.filter(country=> country.toLowerCase().includes(input.value.toLowerCase()));
    results.innerText = `The number of countries containing "${input.value}" are ${filteredAnyCharacters.length}`
    displayCountries(filteredAnyCharacters);
}

function sortLists(event) {
    if (anyCharButtonClicked === false) {
        displayCountries(filteredFirstCharacters.reverse());
    }
    if (firstCharButtonClicked === false) {
        displayCountries(filteredAnyCharacters.reverse());
    }
}

function displayCountries(array) {
    countriesContainer.innerHTML = ' ';
       for (let country of array) {
        let div = document.createElement('div');
        div.innerHTML = `
        <p class="country-name">${country.toUpperCase()}</p>
        `
        div.classList.add('country-container');
        countriesContainer.appendChild(div);
        div.style.backgroundImage = "url('./images/map_image.jpg')";
        div.style.backgroundSize = 'cover';
        div.style.position = 'relative';
        div.style.height = '210px';
        div.style.width = '195px';
        div.style.borderRadius = '5px';
    }
       let p = document.querySelectorAll('.country-name');
       p.forEach(background => {
        background.style.backgroundColor = 'rgba(0, 0, 60, 0.2)';
        background.style.height = '130px';
        background.style.paddingTop ='80px';
        background.style.margin = 'auto';
        background.style.textAlign = 'center';
        background.style.font = '24px arial';
        background.style.fontWeight = 'bold'
        background.style.color = 'white';
        background.style.verticalAlign = 'middle';
        background.style.borderRadius = '5px'
        background.style.boxShadow = 'inset 0px -60px 50px rgba(0, 0, 50, .4)'
       })
    } 
    
main.style.backgroundColor = 'lightyellow'  
countriesContainer.style.display = 'grid';
countriesContainer.style.gridTemplateColumns = '100px 100px 100px 100px 100px 100px';
countriesContainer.style.columnGap = '160px';
countriesContainer.style.rowGap = '10px';
countriesContainer.style.textAlign = 'center';
countriesContainer.style.marginLeft = `10%`;
countriesContainer.style.paddingTop = `50px`;

displayCountries(countries);