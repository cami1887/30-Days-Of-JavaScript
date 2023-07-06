let header = document.getElementById('countries');
let title = document.querySelector('.subtitle');
let main = document.querySelector('main');
let graphContainer = document.querySelector('.graph-container');
let graphButtons = document.querySelector('.graph-buttons');
let populationButton = document.querySelector('.population');
let languagesButton = document.querySelector('.languages');
let graphTitle = document.querySelector('.graph-title');
let populationGraphs = document.querySelector('#population-graphs');
let languageGraphs = document.querySelector('#language-graphs');
let languageList = [];
let topLanguages = [];
let topPopulation = [];
let populationSort = countries_data.sort((a,b) => b.population - a.population);
populationButton.addEventListener('click', listPopulation);
languagesButton.addEventListener('click', listLanguages);
    
for (let i=0; i<10 ;i++) {
        topPopulation.push({[populationSort[i].name]:populationSort[i].population});
    }

for (let country of countries_data) {
    for (let language of country.languages) {
        let count = 0;
        for (let data of countries_data) {
            if (data.languages.includes(language))
            count++;
        }
        languageList.push({[language]:count});
    }
}

let languageSort = languageList.sort((a,b) => Object.values(b)-Object.values(a));
let topLanguagesKey = [];
let topLanguagesValue = [];

for (let language of languageList) {
    for (const [key, value] of Object.entries(language)) {
        if (!topLanguagesKey.includes(key)) {
            topLanguagesKey.push(key);
            topLanguagesValue.push(value);
        }
    }
}

for (let i=0; i<10; i++) {
    topLanguages.push([topLanguagesKey[i], topLanguagesValue[i]])
}  
let sum = 0;
for (let i=0; i<topPopulation.length; i++) {
    sum += parseInt(Object.values(topPopulation[i]));
}

function listPopulation(event) {
    graphTitle.innerText = "10 Most Populated Countries In The World";
    if (populationGraphs.childNodes.length <10 || populationGraphs.childNodes == false) {
        let dimensions = [];
    for(let i=0; i<10; i++) {
        dimensions.push(parseInt((Object.values(topPopulation[i])/sum)*100));
    }
    
    for (let i=0; i<topPopulation.length; i++) {
        let div = document.createElement('section');
        div.innerHTML = `
        <p>${Object.keys(topPopulation[i])}</p>
        <div class="bar-container" style="width:500px">
            <div class = "bar" style="width:${dimensions[i]*3}%"></div>
        </div>
        <p>${Object.values(topPopulation[i])}</p>
        `
        populationGraphs.appendChild(div);
    }
    let children = populationGraphs.childNodes;
    for (let node of children) {
       
        let bar = node.querySelector('.bar');
        bar.style.height = '45px';
        bar.style.backgroundColor = 'rgb(255, 174, 0)';
    } 
    }
    
    if (languageGraphs.childNodes.length > 0) {
        languageGraphs.innerHTML = '';
    }
}

function listLanguages(event) {
    graphTitle.innerText = "10 Most Spoken Languages In The World";
    if (languageGraphs.childNodes.length < 10 || languageGraphs.childNodes == false) {
        let dimensions = [];
    for(let i=0; i<10; i++) {
        dimensions.push((topLanguagesValue[i]/377)*100);
    }
    for (let i=0; i<10; i++) {
        let div = document.createElement('section');
        div.innerHTML = `
        <p>${topLanguagesKey[i]}</p>
        <div class ="bar-container" style="width:500px">
            <div class ="bar" style="width:${dimensions[i]*3}%"></div>
        </div>
        <p>${topLanguagesValue[i]}</p>
        `
        languageGraphs.appendChild(div);
    }
    let children = languageGraphs.childNodes;
    for (let node of children) {
        let bar = node.querySelector('.bar');
        bar.style.height = '45px';
        bar.style.backgroundColor = 'rgb(255, 174, 0)';
    } 
}
    if (populationGraphs.childNodes.length > 0) {
        populationGraphs.innerHTML = '';
    }
}

graphTitle.innerText = "10 Most Populated Countries In The World";
    if (populationGraphs.childNodes.length <10 || populationGraphs.childNodes == false) {
        let dimensions = [];
    for(let i=0; i<10; i++) {
        dimensions.push(parseInt((Object.values(topPopulation[i])/sum)*100));
    }
    
    for (let i=0; i<topPopulation.length; i++) {
        let div = document.createElement('section');
        div.innerHTML = `
        <p>${Object.keys(topPopulation[i])}</p>
        <div class="bar-container" style="width:500px">
            <div class = "bar" style="width:${dimensions[i]*3}%"></div>
        </div>
        <p>${Object.values(topPopulation[i])}</p>
        `
        populationGraphs.appendChild(div);
    }
    let children = populationGraphs.childNodes;
    for (let node of children) {
       
        let bar = node.querySelector('.bar');
        bar.style.height = '45px';
        bar.style.backgroundColor = 'rgb(255, 174, 0)';
    } 
    }
    
    if (languageGraphs.childNodes.length > 0) {
        languageGraphs.innerHTML = '';
    }