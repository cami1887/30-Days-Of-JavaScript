// Exercises: Level 1
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// 1: Explain the difference between forEach, map, filter, and reduce.
    /* forEach goes through each element of an array and applies a function
    * Map runs through each element and modifies it. It returns a new array without altering the original array
    * filter goes through each element and returns a new array of elements that meet the requirements set by a user specified ruleset
    * reduce uses a current variable and an accumulator whose value updates as a function is applied to each element
    */

// 2:  Define a callback function before you use it in forEach, map, filter or reduce.
    // function callBack(element) {
    //         console.log(element);
    // }
    // products.forEach(callBack);

// 3: Use forEach to console.log each country in the countries array.
    // countries1.forEach(country => console.log(country))

// 4: Use forEach to console.log each name in the names array.
    // names.forEach(name => console.log(name))

// 5: Use forEach to console.log each number in the numbers array.
    // numbers.forEach(number => console.log(number))

// 6: Use map to create a new array by changing each country to uppercase in the countries array.
    // const uppercaseCountries = countries1.map(country => country.toUpperCase());
    // console.log(uppercaseCountries)

// 7: Use map to create an array of countries length from countries array.
    // const countryLength = countries1.map(country => country.length);
    // console.log(countryLength)

// 8: Use map to create a new array by changing each number to square in the numbers array
    // const squareNumbers = numbers.map(number => number*number);
    // console.log(squareNumbers)

// 9: Use map to change to each name to uppercase in the names array
    // const uppercaseNames = names.map(name => name.toUpperCase());
    // console.log(uppercaseNames)

// 10: Use map to map the products array to its corresponding prices.
    // const mapped = products.map(product =>  {
    //     let item = Object.values(product)[0];
    //     let price = Object.values(product)[1];
    //     if (typeof price === "number") {
    //         return `${item} $${price}`;
    //     }
    //     else {
    //         return `${item} price unknown`;
    //     }
    // });
    // console.log(mapped)

// 11: Use filter to filter out countries containing land.
    // const land = countries1.filter(country => country.toLowerCase().includes("land"));
    // console.log(land);
// 12: Use filter to filter out countries having six character.
    // const six = countries1.filter(country => country.length === 6);
    // console.log(six);
// 13: Use filter to filter out countries containing six letters and more in the country array.
    // const six = countries1.filter(country => country.length >= 6);
    // console.log(six);
// 14: Use filter to filter out country start with 'E';
    // let ee = countries1.filter(country => country[0] === 'E');
    // console.log(ee);
// 15: Use filter to filter out only prices with values.
    // let hasPrice = products.filter(product => typeof product.price === 'number');
    // console.log(hasPrice);
// 16: Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
    // let mixed = [1,"d",2,3,"f","e", "Ethan"];
    // function getStringLists(array) {
    //     let filtered = array.filter(element => typeof element === 'string');
    //     return filtered;
    // }
    // console.log(getStringLists(mixed));
// 17: Use reduce to sum all the numbers in the numbers array.
    // let reduced =  numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
    // console.log(reduced);
// 18: Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
    // let newString = countries1.reduce((accumulator, currentValue) =>  {
    //     return currentValue === countries1[countries1.length-1] ? accumulator += ('and ' + currentValue + ' are northern European countries') : accumulator += (currentValue + ', ');
    // }, 'Estonia, ');
    // console.log(newString);
// 19: Explain the difference between some and every
    // some returns a boolean representing if some of the items in an array meet the specified requirements. Every returns a boolean representing if all items pass a test 
// 20: Use some to check if some names' length greater than seven in names array
    // console.log(names.some(name => name.length >= 7));
// 21: Use every to check if all the countries contain the word land
    // console.log(countries1.every(country=> country.toLowerCase().includes('land')));
// 22: Explain the difference between find and findIndex.
    // Returns first item that passes a test. Find index finds the index of the first item that pasts a test.
// 23: Use find to find the first country containing only six letters in the countries array
    // console.log(countries1.find(country => country.length === 6));
// 24: Use findIndex to find the position of the first country containing only six letters in the countries array
    // console.log(countries1.findIndex(country => country.length === 6));
// 25: Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
    // console.log(countries1.findIndex(country => country.includes('Norway')));
// 26: Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
    // console.log(countries1.findIndex(country => country.includes('Russia')));

// Exercises: Level 2
// 1: Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
    // console.log(products.map(product => product.price).filter(element => typeof element === 'number').reduce((total, current) => total += current));

// 2: Find the sum of price of products using only reduce reduce(callback))
    // const sum = products.reduce((total, currentValue) => typeof currentValue.price === 'number'  ? total += currentValue.price : total + 0, 0);
    // console.log(sum);

// 3: Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
    // function categorizeCountries() {
    //     const filtered = countries.map(country => country.name).filter(element => element.substring(element.length-3) === 'ria');
    //     return filtered;
    // }
    // console.log(categorizeCountries());

// 4: Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
    // const array = [];
    // function indexOfLetter(letter) {
    //     let amount = countries.filter(country => country.name.substring(0,1) === letter.toUpperCase());
    //     array.push({[letter]: amount.length});
    //     return array;
    // }
    // console.log(indexOfLetter('a'));

// 5: Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
    // function getFirstTenCountries() {
    //     const array = [];
    //     countries.forEach(country => {
    //         if (countries.indexOf(country) < 10) {
    //             array.push(country.name);
    //         }}  
    //     )
    //     return array;
    // }
    //    console.log(getFirstTenCountries());

// 6:  Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
    // function getLastTenCountries() {
    //     const array = [];
    //     for (let i=10; i>0; i--) {
    //         array.push(countries[countries.length-i])
    //     }
    //     return array;
    // }
    // console.log(getLastTenCountries())

// 7: Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
    // function findCommonInitial() {
    //     let max = 0;
    //     let count = 0;
    //     let commonInitial = 65;
    //     for (let i=65; i<91; i++) {
    //         for (let country of countries) {
    //             if (country.name.charCodeAt(0) === i) {
    //                 count++;
    //             }
    //         }
    //         if (count > max) {
    //             max = count;
    //             count = 0;
    //             commonInitial = i;
    //         }
    //     }
    //     return commonInitial;
    // }
    // console.log(findCommonInitial());
    
// Exercises: Level 3
// 1: Use the countries information, in the data folder. Sort countries by name, by capital, by population
    // function sortBy(rule) {
    //     if (rule.toLowerCase() === 'name') {
    //         countries.sort((a, b) => {
    //             if (a.name < b.name) {
    //                 return -1;
    //             }
    //         }
    //     )}

    //     if (rule.toLowerCase() === 'capital') {
    //         countries.sort((a, b) => {
    //             if (a.capital < b.capital) {
    //                 return -1;
    //             }
    //         }
    //     )}

    //     if (rule.toLowerCase() === 'population') {
    //         countries.sort((a, b) => {
    //             return b.population - a.population;
    //         }
    //     )}
    //     return countries;
    // }
    // console.log(sortBy('population'));

// 2: *** Find the 10 most spoken languages:
    // function mostSpokenLanguages(array, number) {
    //     console.log(array)
    //     const allLanguages = [];
    //     let count = 0;
    //     const mostSpoken = []
    //     for (let country of array) {
    //         for (let i =0; i < country.languages.length; i++) {
    //             if (!allLanguages.includes(country.languages[i]) || allLanguages.length === 0) {
    //                 allLanguages.push(country.languages[i]);
    //             }
    //         }
    //     }
    //     for (let i=0; i<allLanguages.length; i++) {
    //             for (let country of array) {
    //                 if (country.languages.includes(allLanguages[i])) {
    //                     count++;
    //                 }
    //             }
    //             allLanguages[i] = {[allLanguages[i]]:count};
    //             count = 0;
    //         }
        
    //     allLanguages.sort((a,b)=> Object.values(a) - Object.values(b));
    //     for (let i=1; i<=number; i++) {
    //         mostSpoken.push(allLanguages[allLanguages.length-i])
    //     }
    //     return  mostSpoken;
    // }

    // console.log(mostSpokenLanguages(countries, 10))

// 3: *** Use countries_data.js file create a function which create the ten most populated countries
    // function mostPopulatedCountries(array, number) {
    //     const mostPopulated = []
    //     countries.sort((a,b)=> a.population - b.population);
    //     for (let i=1; i<=number; i++) {
    //         mostPopulated.push(countries[countries.length-i])
    //     }
    //     return mostPopulated;
    // }
    // console.log(mostPopulatedCountries(countries, 10))

// 4: *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// const statistics = {
//     count() {
//         return ages.length;
//     },
//     sum() {
//         return ages.reduce((total, currentValue)=> total += currentValue, 0)
//     },
//     min() {
//         ages.sort((a,b) => a - b);
//         return ages[0];
//     },
//     max() {
//         return ages[this.count()-1];
//     },
//     range() {
//         return this.max()-this.min();
        
//     },
//     mean() {
//         return Math.round(this.sum()/ages.length);
//     },
//     median() {
//         if(ages.length%2 === 0) {
//             return (ages[(ages/2)+1] + ages[ages.length/2])/2;
//         }
//         else {
//             return ages[Math.floor(ages.length/2)];
//         }
//     },
//     mode() {
//         let count = 0;
//         let max = [];
//         for (let i=0; i< ages.length; i++) {
//             for (let age of ages) {
//                 if (age === ages[i]) {
//                     count++
//                 }  
//             }
//             if (max.length === 0) {
//               max.push({[ages[i]]:count}) 
//             }
//             else if (Object.values(max[0]) < count) {
//                 max.pop();
//                 max.push({[ages[i]]:count})
//             }
//             count = 0;
//         }
//         return max[0];
//     },
//     variance() {
//         let sum = 0;
//         for (let age of ages) {
//             sum += (age-this.mean())*(age-this.mean())
//         }
//         return sum/(ages.length);
//     },
//     standardDeviation() {
//         let sum = 0;
//         for (let age of ages) {
//             sum += ((age - this.mean())*(age - this.mean()));
//         }
//         return Math.sqrt(sum/this.count());
//     },
//     frequencyDistribution() {
//         let count = 0;
//         let distribution = [];
//         for (let i=0; i< ages.length; i++) {
//             for (let age of ages) {
//                 if (age === ages[i]) {
//                     count++
//                 }  
//             }
//             if (!distribution.includes(`(${ages[i]}, ${(count/this.count())*100})`)) {
//              distribution.push(`(${ages[i]}, ${(count/this.count())*100})`)
//             }
//             count = 0;
//         }
//         return distribution;
//     },
//     describe() {
//         return 'idk man'
//     }
// }
// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.variance()) // 17.5
// console.log('Standard Deviation: ', statistics.standardDeviation()) // 4.2
// console.log('Frequency Distribution: ',statistics.frequencyDistribution()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe());
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
