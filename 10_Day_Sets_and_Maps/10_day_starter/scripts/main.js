// Exercises:Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries1 = ['Finland', 'Sweden', 'Norway']

// 1: create an empty set
    // const pp = new Set();
    // console.log(pp);

// 2: Create a set containing 0 to 10 using loop
    // for (let i=1; i<=10; i++) {
    //     pp.add(i);
    // }
    // console.log(pp)

// 3: Remove an element from a set
    // pp.delete(7);
    // console.log(pp);

// 4: Clear a set
    // pp.clear();
    // console.log(pp)

// 5: Create a set of 5 string elements from array
    // let array = ['one', 'two', 'three', 'four', 'five'];
    // const poopoo = new Set(array);
    // console.log(poopoo);

// 6: Create a map of countries and number of characters of a country
    // const map = new Map();
    // for (let country of countries1) {
    //     map.set(country, country.length)
    // }
    // console.log(map)

// Exercises:Level 2
// 1: Find a union b
    // let c = [...b, ...a];
    // const C = new Set(c);
    // console.log(C)

// 2: Find a intersection b
    // let B = new Set(b);
    // let d = a.filter(num => B.has(num));
    // let intersection = new Set(d);
    // console.log(intersection);

// 3: Find a with b
    // let B2 = new Set(b);
    // let A = new Set(a);
    // let filteredA = a.filter(num => !B2.has(num));
    // let filteredB = b.filter(num => !A.has(num));
    // let difference = [...filteredA, ...filteredB];
    // let D = new Set(difference)
    // console.log(D)

// Exercises:Level 3
// 1: How many languages are there in the countries object file.
    // let array = [];
    // for (let country of countries) {
    //     array.push(country.languages);
    // }
    // const languages1 = new Set(array.flat());
    // console.log(languages1.size);

// 2: *** Use the countries data to find the 10 most spoken languages:
    // function mostSpokenLanguages(array, number) {
    //     const map = new Map();
    //     const topLanguages = []; 
    //     let count = 0;
    //         for (let element of languages1) {
    //             for (let country of countries) {
    //             if (country.languages.includes(element)) {
    //                count++;
    //             }
    //             map.set(element, count);
    //         }
    //         count = 0;
    //     }
    //     const toSort = [...map.entries()]
    //     toSort.sort((a,b)=> a[1] - b[1]);
    //    for (i=1; i<=number; i++) {
    //     topLanguages.push(`{${ toSort[toSort.length-i]}}`)
    //    }
    //    return topLanguages;
    // }
    // console.log(mostSpokenLanguages(countries,10))
