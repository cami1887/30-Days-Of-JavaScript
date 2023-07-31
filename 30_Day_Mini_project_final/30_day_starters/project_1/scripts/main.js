let resultAmount = document.querySelector('.result-amount');
let searchBar = document.querySelector('input');
let nameButton = document.querySelector('.name-button');
let capitalButton = document.querySelector('.capital-button');
let populationButton = document.querySelector('.population-button');
let reverseButton = document.querySelector('.reverse-button');
let countriesContainer = document.querySelector('.countries-container');
let graphContainer = document.querySelector('.graph-container');
let populationGraphButton = document.querySelector('.population-graph-button');
let languagesGraphButton = document.querySelector('.languages-graph-button');
nameButton.addEventListener('click', sortByName);
capitalButton.addEventListener('click', sortByCapital);
populationButton.addEventListener('click', sortByPopulation);
searchBar.addEventListener("input", searchCountries)

function listAllCountries() {
   for (let i=0; i<countries.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = `
        <image src="${countries[i].flag}" style="width: 100px">
        <div>${countries[i].name}</div>
        <div>Capital: ${countries[i].capital}</div>
        <div>Languages: ${countries[i].languages}</div>
        <div>Population: ${countries[i].population}</div>
    `
    div.setAttribute('id', countries[i].name.toLowerCase())
    countriesContainer.appendChild(div)
} 
}


function sortByName(event) {
    console.log(countriesContainer.childNodes)
    let countriesCopy = [];
    countriesContainer.childNodes.forEach(child => {
    countriesCopy.push(child);
    }
)
countriesContainer.innerHTML = '';
countriesCopy.reverse().forEach(child => {
   countriesContainer.appendChild(child)
})
}  

function sortByCapital(event) {
//     let countriesCopy = [];
//     countriesContainer.childNodes.forEach(child => {
//     countriesCopy.push(child);
//     }
// )
// countriesContainer.innerHTML = '';
// console.log(countriesCopy.getElementById[`${}`])
// let sorted = countriesCopy.sort((a,b)=> countriesCopy.getElementById(`${a.getAttribute('id')}`) - b.getAttribute('id'))
// console.log(sorted)
// sorted.reverse().forEach(child => {
//    countriesContainer.appendChild(child)
// })
}

function sortByPopulation(event) {
    // document.querySelectorAll('.population').forEach(x => console.log(x))
    // console.log(array)
    // let copy = [];
    // countriesContainer.childNodes.forEach(child => copy.push(child));
    // countriesContainer.innerHTML = '';
    // let sorted = countries.sort((a,b) => b.population - a.population);
    // console.log(copy)
    // for(let i=0; i<sorted.length; i++) {
        // if (copy[i].getAttribute('id')) {

        // }

    // }
    // let array = countriesContainer.querySelectorAll('.population');
    // console.log(document.querySelector('.population'))
}

function searchCountries(event) {
    countriesContainer.innerHTML = '';
    for(let i=0; i<countries.length; i++) {
        // countries[i].languages.forEach(language => (language.toLowerCase().includes(`${searchBar.value}`)) ? (bool = true) : (console.log(bool)))
        if ((countries[i].name.includes(`${searchBar.value}`))||countries[i].capital?.includes(`${searchBar.value}`)) {
                let div = document.createElement('div');
                div.innerHTML = `
                    <image src="${countries[i].flag}" style="width: 100px">
                    <div>${countries[i].name}</div>
                    <div id="${countries[i].capital.toLowerCase()}" >Capital: <span>${countries[i].capital}</span></div>
                    <div id="${countries[i].languages.toLowerCase()}" >Languages: <span>${countries[i].languages}</span></div>
                    <div>Population: <span class="population">${countries[i].population}</span></div>`
                div.setAttribute('id', countries[i].name.toLowerCase())
                countriesContainer.appendChild(div)
            }
    }
    if(countriesContainer.childNodes.length !== 250){
        resultAmount.innerText = `${countriesContainer.childNodes.length} countries satisfied the search criteria`
    }
    if(countriesContainer.childNodes.length === 250){
        resultAmount.innerText = ``
    }
    }
    
    listAllCountries();
