// Exercises: Level 1
// 1: Declare a function fullName and it print out your full name.
    // function fullName() {
    //     console.log('Camille Lacaden');
    // }
    // fullName();

// 2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
    // function fullName(firstName, lastName) {
    //     console.log(firstName +' '+ lastName)
    // }
    // fullName('Camille', 'Lacaden')

// 3: Declare a function addNumbers and it takes two two parameters and it returns sum.
    // function addNumbers(a, b) {
    //     console.log(a+b);
    //     return a + b;
    // }
    // addNumbers(1, 2);

// 4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
    // function areaOfRectangle(a, b) {
    //     console.log(a*b);
    //     return a*b;
    // }
    // areaOfRectangle(2, 3);

// 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
    // function perimeterOfRectangle(a, b) {
    //     console.log(2*(a+b));
    //     return 2*(a+b);
    // }
    // perimeterOfRectangle(2, 3);

// 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
    // function volumeOfRectPrism(a, b, c) {
    //     console.log(a*b*c);
    //     return a*b*c;
    // }
    // volumeOfRectPrism(2, 3, 4);

// 7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
    // function areaOfCircle(r) {
    //     let pi = 3.14;
    //     console.log(pi*r*r);
    //     return pi*r*r;
    // }
    // areaOfCircle(12);

// 8: Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
    // function circumOfCircle(r) {
    //     let pi = 3.14;
    //     console.log(2*pi*r);
    //     return 2*pi*r;
    // }
    // circumOfCircle(15);

// 9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
    // function findDensity(m, v) {
    //     console.log(m*v);
    //     return m*v;
    // }
    // findDensity(10, 20)

// 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
    // function findSpeed(m, s) {
    //     console.log(m/s);
    //     return m/s;
    // }
    // findSpeed(5,1);

// 11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
    // function findWeight(m) {
    //     let g = 9.81;
    //     console.log(m*g);
    //     return m*g;
    // }
    // findWeight(12);

// 12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
    // function convertCelsiusToFahrenheit(c) {
    //     console.log((c*(9/5))+32);
    //     return (c*(9/5))+32;
    // }
    // convertCelsiusToFahrenheit(18);

// 13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // function calculateBMI(kg, m) {
    //     let bmi = kg/(m*m);
    //     if ( bmi < 18.5) {
    //         console.log("You are underweight");
    //     }
    //     else if (bmi < 24.9) {
    //         console.log("You are normal");
    //     }
    //     else if (bmi < 29.9) {
    //         console.log("You are overweight");
    //     }
    //     else if (bmi > 30) {
    //         console.log("You are obese");
    //     }
    // }
    // calculateBMI(63, 1.54);

// 14: Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
    // function checkSeason(month) {
    //     switch (month.toLowerCase()) {
    //         case 'january':
    //         case 'december':
    //         case 'february':
    //             console.log("Winter");
    //             break;
    //         case 'august':
    //         case 'july':
    //         case 'june':
    //             console.log("Summer");
    //             break;
    //         case 'march':
    //         case 'april':
    //         case 'may':
    //             console.log("Spring");
    //             break;
    //         case 'november':
    //         case 'september':
    //         case 'october':
    //             console.log("Fall");
    //             break;
    //         default: 
    //             console.log("That's not a month!")
    //     }
    // }
    // checkSeason("JunE");

// 15: Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
    // function findMax(a, b, c) {
    //     if (a > b && a > c) {
    //         return a;
    //     }
    //     if (b > a && b > c) {
    //         return b;
    //     }
    //     if (c> a && c > b) {
    //         return c;
    //     }
    // }
    // console.log(findMax(0, 10, 5));

// Exercises: Level 2
// 1: Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
    // function solveLinEquation(a, b, c, x, y) {
    //     return (a*x) + (b*y) + c;
    // }
    // console.log(solveLinEquation(1, 2, 3, 4, 5));

// 2: Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    // function solveQuadEquation(a, b, c) {
    //     let x1 = ((b*-1)+Math.sqrt((b*b)-(4*a*c)))/(2*a);
    //     let x2 = ((b*-1)-Math.sqrt((b*b)-(4*a*c)))/(2*a);
    //     if (x1 === x2) {
    //         return x1;
    //     }
    //     else {
    //         return `${x1}, ${x2}`;
    //     }
    // }
    // console.log(solveQuadEquation(1, -1, -2))

// 3: Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
    // let print = [1, 2, 3]
    // function printArray(arr){
    //     let array = [];
    //     for (const element of arr) {
    //         array.push(element);
    //     }
    //     return array;
    // }
    // console.log(printArray(print))

// 4: Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
    // function showDateTime() {
    //     let now = new Date ();
    //     return now.toLocaleString();
    // }
    // console.log(showDateTime());

// 5: Declare a function name swapValues. This function swaps value of x to y.
    // function swapValues(x, y) {
    //     let y2 = x;
    //     let x2 = y;
    //     y = y2;
    //     x = x2;
    //     return `x: ${x} y: ${y}`
    // }
    // console.log(swapValues(3, 4));

// 6: Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    // function reverseArray(array){
    //     let newArray = [];
    //     for (const element of array) {
    //         newArray.unshift(element);
    //     }
    //     return newArray;
    // }
    // console.log(reverseArray([1, 2, 3, 4, 5]))

// 7: Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
    // let array = ['hello', 'my', 'name', 'pooop'];
    // function capitalizedArray() {
    //     for (let i= 0; i<array.length; i++) {
    //         array[i] = array[i].toUpperCase()
    //     }
    //     return array;
    // }
    // console.log(capitalizedArray())

// 8: Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
    // function addItem(item) {
    //     let array = [];
    //     array.push(item);
    //     return array;
    // }
    // console.log(addItem('one'));

// 9: Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
    // let array = [1, 2, 3, 4, 5];
    // function removeItem(index) {
    //     array.splice(index, 1);
    //     return array;
    // }
    // console.log(removeItem(0));

// 10: Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
    // function sumOfNumbers(range) {
    //     let sum = 0;
    //     for (let i=1; i<=range; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }
    // console.log(sumOfNumbers(12));

// 11: Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
    // function sumOfOdds(range){
    //     let sum = 0;
    //     for (let i=1; i<=range; i++) {
    //         if (i%2 !=0){
    //             sum += i;
    //         }
    //     }
    //     return sum;
    // }
    // console.log(sumOfOdds(12));
    
// 12: Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
    // function sumOfEven(range){
    // let sum = 0;
    // for (let i=1; i<=range; i++) {
    //     if (i%2 ===0){
    //         sum += i;
    //     }
    // }
    // return sum;
    // }
    // console.log(sumOfEven(12));

// 13: Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    // function evensAndOdds(range) {
    //     let countOdds = 0;
    //     let countEvens = 0;
    //     for (let i=0; i<=range; i++) {
    //         if (i%2 != 0) {
    //             countOdds++;
    //         }
    //         else if (i%2 === 0) {
    //             countEvens++;
    //         }
    //     }
    //     return `Odds: ${countOdds} Evens: ${countEvens}`;
    // }
    // console.log(evensAndOdds(100));

// 14: Write a function which takes any number of arguments and return the sum of the arguments
    // function addParameters() {
    //     let sum = 0;
    //     for(let i=0; i< arguments.length; i++) {
    //        sum += arguments[i]; 
    //     }
    //     return sum;
    // }
    // console.log(addParameters(1, 2, 3))

// 15: Write a function which generates a randomUserIp.
    // function randomUserIP(){
    //     let array = [];
    //     for(let i=0; i<3; i++) {
    //        array.push(Math.floor(Math.random()*255)); 
    //     }
    //     array.push(Math.floor(Math.random()*2));
    //     return array.join(".");
    // }
    // console.log(randomUserIP());

// 16: Write a function which generates a randomMacAddress
    // function randomMacAddress(){
    //     let array = [];
    //     for(let i=0; i<6; i++) {
    //        let random = Math.floor(Math.random()*255).toString(16);
    //        array.push(random); 
    //     }
    //     return array.join("-");
    // }
    // console.log(randomMacAddress());

// 17: Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
        // function randomHexaNumberGenerator(){
        //     let string = '#';
        //     for(let i=0; i<3; i++) {
        //             let random = Math.floor(Math.random()*255).toString(16);
        //         string += random;
        //     }
        //     return string;
        // }
        // console.log(randomHexaNumberGenerator());
        // '#ee33df'

// 18: Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
    // function userIdGenerator() {
    //     let string = '';
    //     for (let i=0; i< 7; i++) {
    //         string += Math.floor(Math.random()*9);
    //     }
    //     return string;
    // }
    // console.log(userIdGenerator());

// Exercises: Level 3
// 1: Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
    // function userIdGenerator() {
    //     let characterLength = prompt("How many characters?");
    //     let idNumber = prompt("How many IDs?");
    //     let string = '';
    //     let ids = [];
    //     for (let i=0; i<idNumber; i++) {
    //        for (let i=0; i< characterLength; i++) {
    //         string += Math.floor(Math.random()*9);
    //         }
    //        ids.push(string);
    //         string = ''; 
    //     }
    //     return ids.join(", ");
    // }
    // console.log(userIdGenerator());

// 2: Write a function name rgbColorGenerator and it generates rgb colors.
    // function rgbColorGenerator() {
    //     let rgb = [];
    //     for (let i=0; i< 3; i++) {
    //         rgb.push(Math.floor(Math.random()*255));
    //         }
    //     return `rgb(${rgb.join(", ")})`
    // }
    // console.log(rgbColorGenerator());

// 3: Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
    // function arrayOfHexaColors(n){
    //     let array = [];
    //         let string = '#';
    //         for (let i=0; i<n; i++) {
    //             for(let i=0; i<3; i++) {
    //                 let random = Math.floor(Math.random()*255).toString(16);
    //             string += random;
    //         }
    //         array.push(string);
    //         string = '#';
    //         }
    //         return array;
    //     }
    //     console.log(arrayOfHexaColors(8));

// 4: Write a function arrayOfRgbColors which return any number of RGB colors in an array.
    // function arrayOfRgbColors(n) {
    //         let array = [];
    //         let rgb = [];
    //         for (let i=0; i< n; i++) {
    //             for (let i=0; i< 3; i++) {
    //                 rgb.push(Math.floor(Math.random()*255));
    //             }
    //             rgb.join(",");
    //             array.push(`rgb(${rgb})`);
    //             rgb = [];
    //         }
    //         return array;
    //     }
    //     console.log(arrayOfRgbColors(10));

// 5: Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
    // function convertHexaToRgb(color){
    //     let convert = color.substring(1);
    //     let one = Number.parseInt(convert.substring(0,2), 16);
    //     let two = Number.parseInt(convert.substring(2,4), 16);
    //     let three = Number.parseInt(convert.substring(4,6), 16);
    //     return `rgb(${one}, ${two}, ${three})`
    // }
    // console.log(convertHexaToRgb('#32a852'));

// 6: Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
    // function convertRgbToHexa(rgb){
    //     let news = rgb.replaceAll(/\(|\)|rgb/gi,'');
    //     let array = news.split(", ");
    //     let string = '';
    //     for (const elements of array) {
    //         string += parseInt(elements).toString(16);
    //     }
    //     return `#${string}`
    // }
    // console.log(convertRgbToHexa("rgb(124, 130, 50)"));

// 7: Write a function generateColors which can generate any number of hexa or rgb colors.
    // function generateColors(color, count) {
    //         let rgbArray = [];
    //         let rgb = [];
    //         let hexArray = [];
    //         let hex = '#';
    //         if (color === 'rgb') {
    //            for (let i=0; i< count; i++) {
    //             for (let i=0; i< 3; i++) {
    //                 rgb.push(Math.floor(Math.random()*255));
    //             }
    //             rgb.join(",");
    //             rgbArray.push(`rgb(${rgb})`);
    //             rgb = [];
    //         } 
    //         return rgbArray;
    //         }
            
    //         if (color === 'hexa') {
    //            for (let i=0; i<count; i++) {
    //             for(let i=0; i<3; i++) {
    //                 let random = Math.floor(Math.random()*255).toString(16);
    //                 console.log(random);
    //                 hex += random;
    //             }
    //             hexArray.push(hex);
    //             hex = '#';
    //             } 
    //             return hexArray;
    //         }
    // }
    // console.log(generateColors('rgb', 3));

// 8: Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
        // let array = [1, 2, 3, 4, 5, 6, 7, 8];
        // function shuffleArray(array) {  
        // let shuffledArray = [];
        //     do {
        //         let index = Math.floor(Math.random()*(array.length));
        //         shuffledArray.push(array[index]);
        //         array.splice(index, 1); 
        //     }
        //     while(array.length > 0);
        //     return shuffledArray;
        // }
        // console.log(shuffleArray(array))

// 9: Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
    // function factorial(n) {
    //     // let factorials = [];
    //     let sum = n;
    //     for (let i=n-1; i>0; i--) {
    //         sum *= i;
    //     }
    //     return sum;
    // }
    // console.log(factorial(18))

// 10: Call your function isEmpty, it takes a parameter and it checks if it is empty or not
    // let array = [];
    // let sum;
    // let string = '';
    // let a = 67;
    // function isEmpty(n) {
    //     if (n == false || n == undefined || n == null) {
    //         return "Empty";
    //     }
    //     else {
    //         return "Not Empty";
    //     }
    // }
    // console.log(isEmpty(a));

// 11: Call your function sum, it takes any number of arguments and it returns the sum.
    // function sum(){
    //     let sum = 0;
    //     for (let i=0; i<arguments.length; i++){
    //         sum += arguments[i]
    //     }
    //     return sum;
    // }
    // console.log(sum(8, 9, 10, 5));

// 12: Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
    // const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const arr2 = [1, 2, 3];
    // function sumOfArrayItems(array){
    //     let sum = 0;
    //     for (const elements of array) {
    //         if (typeof elements === 'number') { 
    //             sum += elements;
    //         }
    //         else {
    //             return 'Cannot add this array.'
    //         }
    //     } 
    //     return sum;
    // }
    // console.log(sumOfArrayItems(arr2));
    
// 13: Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
    // const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const arr2 = [1, 2, 3, 'four'];
    // function sumOfArrayItems(array){
    //     let sum = 0;
    //     for (const elements of array) {
    //         if (typeof elements === 'number') { 
    //             sum += elements;
    //         }
    //         else {
    //             return 'Cannot average this array.'
    //         }
    //     } 
    //     return sum/array.length;
    // }
    // console.log(sumOfArrayItems(arr1));

// 14: Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
    // function modifyArray(array) {
    //     if (array.length >= 5) {
    //         array[4] = array[4].toUpperCase();
    //     }
    //     else {
    //         return 'item not found';
    //     }
    //     return array;
    // }
    // console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// 15: Write a function called isPrime, which checks if a number is prime number.
    // function isPrime(n) {
    //     for (let i=2; i<n; i++) {
    //         if (n != 2 || n != 3) {
    //             let r = n%i;
    //             if (r === 0) {
    //                 return 'Not Prime'
    //             }
    //         }
    //     }
    //     return 'Is Prime';
    // }
    // console.log(isPrime(17));

// 16: Write a functions which checks if all items are unique in the array.
    // let array = [1, 2, 3, 4, 5];
    // let array2 = [1, 2, 2, 3, 3, 4];
    // function isUnique(array){
    //     let check = [];
    //     check.push(array[0]);
    //     for (let i = 1; i<array.length; i++) {
    //         if (!check.includes(array[i])) {
    //             check.push(array[i]);
    //         }
    //         else {
    //             return 'Array items are not unique'
    //         }
    //     }
    //     return 'Array items are unique';
    // }
    // console.log(isUnique(array2));

// 17: Write a function which checks if all the items of the array are the same data type.
    // let array = [1, 2, 3, 4, 5];
    // let array2 = [1, 2, 3, 'four', true];
    // function sameType(array) {
    //     let type = typeof array[0];
    //     for (let i=1; i<array.length; i++) {
    //         if (typeof array[i] != type) {
    //             return 'not the same data type';
    //         }
    //     }
    //     return 'all the same data type';
    // }
    // console.log(sameType(array2));

// 18: JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
    // function isValidVariable(x){
    //     for (let i=0; i<x.length; i++) {
    //         let code = x.charCodeAt(i);
    //         if (((code != 95 && code != 36) && ((code < 48) || (57 < code && code < 65) || (90 < code && code < 97) || (code > 122)))){
    //            return "invalid variable";
    //         }
    //     }
    //     return 'valid variable';
    // }
    // console.log(isValidVariable('variable$_'));

// 19: Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
//     function sevenRandomNumbers(){
//         let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//         let random = [];
//         do {
//             let index = Math.floor(Math.random()*range.length);
//             if (!random.includes(range[index]) || random.length != 1) {
//                 random.push(range[index]);
//                 range.splice(index, 1);
//             }   
//         }
//         while (random.length < 7);
//         return random;
// }
//     console.log(sevenRandomNumbers());

// 20: Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
    // function reverseCountries() {
    //     let copy = [...countries];
    //     return copy.reverse();
    // }
    // console.log(reverseCountries())