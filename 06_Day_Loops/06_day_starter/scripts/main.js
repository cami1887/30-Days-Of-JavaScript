// Exercises: Level 1
const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
    // i. for loop
        // for (let i=0; i< 11; i++) {
        //     console.log(i);
        // }
    // ii. while loop
        // let i = 0;
        // while (i < 11) {
        //     console.log(i);
        //     i++;
        // }
    // iii. do while loop
        // let i = 0;
        // do {
        //     console.log(i);
        //     i++;
        // }
        // while (i < 11);

// 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
    // i. for loop
        // for (let i=10; i> -1; i--) {
        //     console.log(i);
        // }
    // ii. while loop
        // let i = 10;
        // while (i > -1) {
        //     console.log(i);
        //     i--;
        // }
    // iii. do while loop
        // let i = 10;
        // do {
        //     console.log(i);
        //     i--;
        // }
        // while (i > -1);

// 3: Iterate 0 to n using for loop
    // let n = 9;
    // for (let i=0; i <= n; i++) {
    //     console.log(i);
    // }

// 4: Write a loop that makes the following pattern using console.log():
    //     #
    //     ##
    //     ###
    //     ####
    //     #####
    //     ######
    //     #######
    // let character = '#';
    // for (let i =1; i< 8; i++) {
    //     console.log(character.repeat(i));
    // }

// 5: Use loop to print the following pattern:
    // 0 x 0 = 0
    // 1 x 1 = 1
    // 2 x 2 = 4
    // 3 x 3 = 9
    // 4 x 4 = 16
    // 5 x 5 = 25
    // 6 x 6 = 36
    // 7 x 7 = 49
    // 8 x 8 = 64
    // 9 x 9 = 81
    // 10 x 10 = 100
    // for (let i =0; i < 11; i++) {
    //     console.log(`${i} * ${i} = ${i*i}`)
    // }

// 6: Using loop print the following pattern
    //  i    i^2   i^3
    //  0    0     0
    //  1    1     1
    //  2    4     8
    //  3    9     27
    //  4    16    64
    //  5    25    125
    //  6    36    216
    //  7    49    343
    //  8    64    512
    //  9    81    729
    //  10   100   1000
    // console.log(`i i^2 i^3`);
    // for (let i=0; i<11; i++) {
    //     console.log(i, i*i, i*i*i);
    // }

// 7: Use for loop to iterate from 0 to 100 and print only even numbers
    // for (let i=0; i<101; i++) {
    //     if (i%2 === 0) {
    //         console.log(i);
    //     }
    // }
// 8: Use for loop to iterate from 0 to 100 and print only odd numbers
    // for (let i=0; i< 101; i++) {
    //     if (i%2 != 0) {
    //         console.log(i);
    //     }
    // }

// 9: Use for loop to iterate from 0 to 100 and print only prime numbers
        // let prime = [2, 3]; 
        // let entry;
        // console.log(2);
        // console.log(3);
        //     for (let i=1; i < 101; i++) {
        //         // prime = (6*i)-1;
        //             // if (prime%5 != 0) {
        //                 for (let i=0; i< prime.length; i++) {
        //                     if (entry%prime[i] != 0 && entry%5 != 0) {
        //                         prime.push(entry);
        //                     }
        //                 }
                        
        //                 console.log(prime);
        //             }     

// 10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
    // The sum of all numbers from 0 to 100 is 5050.
    // let sum = 0;
    // for (let i=0; i< 101; i++) {
    //     sum += i;
    // }
    // console.log(sum);

// 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    // The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    // let evenSum = 0;
    // let oddSum = 0;
    // for (let i=0; i<101; i++) {
    //     if (i%2 === 0) {
    //         evenSum += i;
    //     }
    // }
    // console.log(`even`, evenSum);
    // for (let i=0; i<101; i++) {
    //     if (i%2 != 0) {
    //         oddSum += i;  
    //     }
    // } 
    // console.log(`odd`, oddSum);
    
// 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
    //   [2550, 2500]
    // let evenSum = 0;
    // let oddSum = 0;
    // for (let i=0; i<101; i++) {
    //     if (i%2 === 0) {
    //         evenSum += i;
    //     }
    // }
    // for (let i=0; i<101; i++) {
    //     if (i%2 != 0) {
    //         oddSum += i;
    //     }
    // }
    // let array = [evenSum, oddSum]
    // console.log(array);

// 13: Develop a small script which generate array of 5 random numbers
    // let random = []
    // for (let i=0; i<5; i++) {
    //     random.push(Math.floor(Math.random()*5));
    // }
    // console.log(random);
    
// 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique
    // let array = []
    // let randomize = Math.floor(Math.random()*5);
    // do {
    //     randomize = Math.floor(Math.random()*5);
    //     if (!array.includes(randomize) ) {
    //         array.push(randomize);
    //     }
    // }
    // while (array.length < 5);
    // console.log(array);

// 15: Develop a small script which generate a six characters random id:
    // 5j2khz
    // let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // let string = '';
    // for (let i = 0; i< 6; i++) {
    //     let character = Math.floor(Math.random()*(random.length-1));
    //     string += random[character];
    // }
    // console.log(string);

// Exercises: Level 2
// 1: Develop a small script which generate any number of characters random id:
    // let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // let string = '';
    // let max = prompt("How many characters?");
    // for (let i = 0; i< max; i++) {
    //     let character = Math.floor(Math.random()*(random.length-1));
    //     string += random[character];
    // }
    // console.log(string);

// 2: Write a script which generates a random hexadecimal number.
    // '#ee33df'
    // let string = '#';
    // for (let i = 0; i< 3; i++) {
    //     let color = Math.floor(Math.random()*255).toString(16);
    //     string += color;
    // }
    // console.log(string);

// 3: Write a script which generates a random rgb color number.
    // rgb(240,180,80)
    // let string = [];
    // for (let i = 0; i< 3; i++) {
    //     let color = Math.floor(Math.random()*255);
    //     string.push(color);
    // }
    // console.log(`rgb(${string[0]}, ${string[1]}, ${string[2]})`);

// 4: Using the above countries array, create the following new array.  
    // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    // let array = [];
    // for (let i=0; i<countries1.length; i++) {
    //     array.push(countries1[i].toUpperCase());
    // }
    // console.log(array);
    
// 5: Using the above countries array, create an array for countries length'.
    // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    // let array = [];
    // for (let i=0; i<countries1.length; i++) {
    //     array.push(countries1[i].length);
    // }
    // console.log(array);

// 6: Use the countries array to create the following array of arrays:
    //   [
    //   ['Albania', 'ALB', 7],
    //   ['Bolivia', 'BOL', 7],
    //   ['Canada', 'CAN', 6],
    //   ['Denmark', 'DEN', 7],
    //   ['Ethiopia', 'ETH', 8],
    //   ['Finland', 'FIN', 7],
    //   ['Germany', 'GER', 7],
    //   ['Hungary', 'HUN', 7],
    //   ['Ireland', 'IRE', 7],
    //   ['Iceland', 'ICE', 7],
    //   ['Japan', 'JAP', 5],
    //   ['Kenya', 'KEN', 5]
    // ]
    // let array = [];
    // for (let i=0; i<countries1.length; i++) {
    //     array.push([countries1[i], countries1[i].substring(0,3).toUpperCase(), countries1[i].length]);
    // }
    // console.log(array);

// 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
    // let land = countries1.filter(country => country.includes('land'));
    // if (land.length > 0 ) {
    //     console.log(land);
    // }
    // else {
    //     console.log('All these countries are without land');
    // }

// 8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
    // let end = countries1.filter(country => country.substring(country.length-2, country.length) === 'ia');
    // if (end.length > 0 ) {
    //     console.log(end);
    // }
    // else {
    //     console.log('These countries end without ia');
    // }

// 9: Using the above countries array, find the country containing the biggest number of characters.
    // let max = countries1[0].length;
    // for (let i=1; i<countries1.length; i++) {
    //     if (countries1[i].length > max) {
    //         max = countries1[i];
    //     }
    // }
    // console.log(max);

// 10: Using the above countries array, find the country containing only 5 characters.
    // console.log(countries1.filter(country => country.length === 5));

// 11: Find the longest word in the webTechs array
    // let max = webTechs[0].length;
    // for (let i=1; i<webTechs.length; i++) {
    //     if (webTechs[i].length > max) {
    //         max = webTechs[i];
    //     }
    // }
    // console.log(max);

// 12: Use the webTechs array to create the following array of arrays:
    // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    // let array = [];
    // for (let i=0; i<webTechs.length; i++) {
    //     array.push([webTechs[i], webTechs[i].length])
    // }
    // console.log(array);

// 13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
    // let string = '';
    // for (let i=0; i<mernStack.length; i++) {
    //     string += mernStack[i][0];
    // }
    // console.log(string)

// 14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
    // for (let i=0; i<webTechs.length; i++) {
    //     console.log(webTechs[i]);
    // }

// 15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
    // const fruit = ['banana', 'orange', 'mango', 'lemon'];
    // let array = [];
    // for (let i=fruit.length-1; i>=0; i--) {
    //     array.push(fruit.pop());
    // }
    // console.log(array);

// 16: Print all the elements of array as shown below.
    // const fullStack = [
    //     ['HTML', 'CSS', 'JS', 'React'],
    //     ['Node', 'Express', 'MongoDB']
    // ]

    // for (let i=0; i< fullStack.length; i++) {
    //     for (let c=0; c < fullStack[i].length; c++) {
    //          console.log(fullStack[i][c]);
    //     }
    // }

// Exercises: Level 3
// 1: Copy countries array(Avoid mutation)
    // let array = [];
    // for (const country of countries1) {
    //     array.push(country);
    // }
    // console.log(array);

// 2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
    // let sortedCountries = [];
    // for (const country of countries1) {
    //     sortedCountries.push(country);
    // }
    // sortedCountries.reverse();
    // console.log(sortedCountries);
// 3: Sort the webTechs array and mernStack array
    // webTechs.sort();
    // mernStack.sort();
    // console.log(webTechs, mernStack);
// 4: Extract all the countries contain the word 'land' from the countries array and print it as array
    // console.log(countries1.filter(country => country.includes("land")));
// 5: Find the country containing the hightest number of characters in the countries array
    // let max = countries1[0];
    // for (const country of countries1) {
    //     if (country.length > max.length){
    //         max = country;
    //     }
    // }
    // console.log(max);
// 6: Extract all the countries containing only four characters from the countries array and print it as array
    // console.log(countries1.filter(country => country.length === 4));
// 7: Extract all the countries containing two or more words from the countries array and print it as array
    // ???
// 8: Reverse the countries array and capitalize each country and stored it as an array
    // countries1.reverse();
    // let array = [];
    // for (const country of countries1){
    //     array.push(country.toUpperCase());
    // }
    // console.log(array);