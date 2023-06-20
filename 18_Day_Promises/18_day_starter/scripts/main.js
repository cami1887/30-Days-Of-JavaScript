const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1
// 1: Read the countries API using fetch and print the name of country, capital, languages, population and area.
    // fetch(countriesAPI)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.forEach(country => {
    //             console.log(country.capital, country.languages, country.population, country.area);
    //         }));
    //     })
    //     .catch(error => console.log(error));

// Exercises: Level 2
// 2: Print out all the cat names in to catNames variable.
    // fetch(catsAPI)
    //     .then(response => response.json())
    //     .then(data => {
    //         data.forEach(cats => {
    //             console.log(cats.name);
    //         });
    //     })
    //     .catch(error => console.log(error));

// Exercises: Level 3
// 3: Read the cats api and find the average weight of cat in metric unit.
        // fetch(catsAPI)
        //     .then(response => response.json())
        //     .then(data => {
        //         data.forEach(cat => {
        //         console.log(cat.name + ' '+ 'average weight: '+(parseInt(cat.weight.metric[0])+parseInt(cat.weight.metric[4]))/2 +' lbs');
        //         })
        //     })
        //     .catch(error => console.log(error));

// 4: Read the countries api and find out the 10 largest countries
    // fetch(countriesAPI)
    // .then(response => response.json())
    // .then(data => {
    //     const sorted = data.sort((a,b) => b.area - a.area);
    //     const topTen = [sorted[0], sorted[1], sorted[2], sorted[3], sorted[4], sorted[5], sorted[6], sorted[7], sorted[8], sorted[9]];
    //     console.log(topTen)
    // })
    // .catch(error => console.log(error));

// 5: Read the countries api and count total number of languages in the world used as officials.
    // fetch(countriesAPI)
    // .then(reponse => reponse.json())
    // .then(data => {
    //     const lang = [];
    //     data.forEach(country =>country.languages.forEach(element => lang.push(element.name)))
    //     const set = new Set(lang);
    //     console.log(set.size)
    // })