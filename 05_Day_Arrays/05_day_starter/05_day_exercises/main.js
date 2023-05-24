import {countries} from "./countries.js";
import {webTechs} from "./web_techs.js";
// Exercise: Level 1

// 1: Declare an empty array;
    // let array = [];
// 2: Declare an array with more than 5 number of elements
    // let array = ["Ethan", "Sterling", "Lilette", "Saraia", "Mom"];
// 3: Find the length of your array
    // console.log(array.length);
// 4: Get the first item, the middle item and the last item of the array
    // console.log(`First Item: ${array[0]}, Middle Item: ${array[parseInt(array.length/2)]}, Last Item: ${array[array.length-1]}`);
// 5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    // let mixedDataTypes = [true, 2, 3, 4, "five", undefined];
    // console.log(mixedDataTypes.length);
// 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// 7: Print the array using console.log()
    // console.log(itCompanies);
// 8: Print the number of companies in the array
    // console.log(itCompanies.length);
// 9: Print the first company, middle and last company
    // console.log(`First Company: ${itCompanies[0]}, Middle Company: ${itCompanies[parseInt(itCompanies.length/2)]}, Last Company: ${itCompanies[itCompanies.length-1]}`);
// 10: Print out each company
    // for (let i=0; i< itCompanies.length; i++) {
    //   console.log(itCompanies[i]);
    // }
// 11: Change each company name to uppercase one by one and print them out
    // for (let i=0; i< itCompanies.length; i++) {
    //   console.log(itCompanies[i].toUpperCase());
    // }
// 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    // console.log(`Companies like`, itCompanies.toString(), `are big IT companies.`);
// 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    // let company = prompt("Enter a company").toLowerCase();
    // if (itCompanies.includes(company[0].toUpperCase()+company.substring(1))) {
    //   console.log(company[0].toUpperCase()+company.substring(1));
    // }
    // else {
    //   console.log(`Company is not found`);
    // }
// 14: Filter out companies which have more than one 'o' without the filter method MIGHT WANT TO ASK QUESTIONS
    // for (let i=0; i<itCompanies.length; i++) {
    //   let match = itCompanies[i].match(/o/gi);
    //   if (match.length >= 2) {
    //     console.log(itCompanies[i]);
    //   }
    // }
    
// 15: Sort the array using sort() method
    console.log(itCompanies.sort());
// 16: Reverse the array using reverse() method
    console.log(itCompanies.reverse());
// 17: Slice out the first 3 companies from the array
    console.log(itCompanies.slice(0,3));
// 18: Slice out the last 3 companies from the array
    console.log(itCompanies.slice(-3));
// 19: Slice out the middle IT company or companies from the array
    if (itCompanies.length%2 === 0) {
      console.log(itCompanies.slice(itCompanies.length/2-1, (itCompanies.length/2)+1))
    }
    else {
      console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length/2)+1))
    }
// 20: Remove the first IT company from the array
      console.log(itCompanies.shift());
// 21: Remove the middle IT company or companies from the array;
      console.log(itCompanies.splice((itCompanies.length/2)-1, 1))
// 22: Remove the last IT company from the array
      console.log(itCompanies.pop());
// 23: Remove all IT companies
      console.log(itCompanies.splice());

// Exercise: Level 2
// 1: Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
      
// 2: First remove all the punctuations and change the string to array and count the number of words in the array
    // let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    // let newArray = text.replaceAll(/\.|,/g, '').split(' ');
    // console.log(newArray);
    // console.log(newArray.length)

// 3: In the following shopping cart add, remove, edit items
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    // 3.i: add 'Meat' in the beginning of your shopping cart if it has not been already added
      // if (!shoppingCart.includes('Meat')) {
      //   shoppingCart.unshift('Meat');
      //   console.log(shoppingCart)
      // }
    // 3.ii: add Sugar at the end of you shopping cart if it has not been already added
      // if (!shoppingCart.includes('Sugar')) {
      //   shoppingCart.push('Sugar');
      //   console.log(shoppingCart)
      // }
    // 3.iii: remove 'Honey' if you are allergic to honey
      // let allergic = prompt('Are you allergic to honey?').toLowerCase();
      // if (allergic === 'yes') {
      //   console.log(shoppingCart.filter(item => item != 'Honey'));
      // } 
    // 3.iv: modify Tea to 'Green Tea'
      // shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
      // console.log(shoppingCart);

// 4: In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
      if (countries.includes('Ethiopia')) {
        console.log('ETHIOPIA');
      }
      else {
        countries.push('Ethiopia');
        console.log(countries);
      }

// 5: In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
      if (webTechs.includes('Sass')) {
        console.log('Sass is a CSS preprocess');
      }
      else {
        webTechs.push('Sass');
        console.log(webTechs);
      }

// 6: Concatenate the following two variables and store it in a fullStack variable.
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd);
    console.log(fullStack);

// Exercise: Level 3
// 1: The following is an array of 10 students ages:
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  // i. Sort the array and find the min and max age
      ages.sort((a, b) => a - b);
      console.log(`Youngest: ${ages[0]} Oldest: ${ages[ages.length-1]}`);
  // ii. Find the median age(one middle item or two middle items divided by two)
      console.log(ages.slice(parseInt((ages.length-1)/2), parseInt(((ages.length-1)/2)+2)))
  // iii. Find the average age(all items divided by number of items)
      let average = ages.reduce((total, current)=> total += current,0)/ages.length;
      console.log(average);
  // iv. Find the range of the ages(max minus min)
      console.log(`Range: ${ages[ages.length-1] - ages[0]} years`);
  // v. Compare the value of (min - average) and (max - average), use abs() method 
      let max = ages[ages.length-1];
      let min = ages[0];
      console.log(Math.abs(min-average)- Math.abs(max-average));

// 2: Slice the first ten countries from the countries array
      console.log(countries.slice(0,10));

// 3: Find the middle country(ies) in the countries array
      console.log(countries[parseInt(countries.length/2)]);

// 4: Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let array1 = countries.slice(0, parseInt(((countries.length-1)/2)+1));
let array2 = countries.slice(parseInt(((countries.length-1)/2)+1));
      console.log(array1, array2)