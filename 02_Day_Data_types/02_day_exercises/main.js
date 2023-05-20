//INCLUDES ALL 3 LEVELS OF EXERCISES

//==============================LEVEL 1 EXERCISES ===============================

//1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
    let challenge = '30 Days Of JavaScript';
//2: Print the string on the browser console using console.log()
    console.log("1.2:", challenge);
//3: Print the length of the string on the browser console using console.log()
    console.log("1.3:", challenge.length);
//4: Change all the string characters to capital letters using toUpperCase() method
    console.log("1.4:", challenge.toUpperCase());
//5: Change all the string characters to lowercase letters using toLowerCase() method
    console.log("1.5:", challenge.toLowerCase());
//6: Cut (slice) out the first word of the string using substr() or substring() method
    console.log("1.6:", challenge.substring(0,2))
//7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    console.log("1.7:", challenge.slice(3));
//8: Check if the string contains a word Script using includes() method
    console.log("1.8:", challenge.includes('Script'));
//9: Split the string into an array using split() method
    console.log("1.9:", challenge.split());
//10: Split the string 30 Days Of JavaScript at the space using split() method
    console.log("1.10:", challenge.split(" "));
//11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
    const string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    console.log("1.11:", string.split(", "));
//12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
    console.log("1.12:", challenge.replace('JavaScript', 'Python'));
//13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
    console.log("1.13:", challenge.charAt(15));
//14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
    console.log("1.14:", challenge.charCodeAt(11));
//15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
    console.log("1.15:", challenge.indexOf('a'));
//16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
    console.log("1.16:", challenge.lastIndexOf('a'));
//17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    const because = 'You cannot end a sentence with because because because is a conjunction';
    console.log("1.17:", because.indexOf('because'));
//18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log("1.18:", because.lastIndexOf('because'));
//19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log("1.19:", because.search('because'));
//20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
    const toTrim = ' 30 Days Of JavaScript ';
    console.log("1.20:", toTrim.trim());
//21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log("1.21:", challenge.startsWith('3'));
//22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log("1.22:", challenge.endsWith('t'));
//23: Use match() method to find all the a’s in 30 Days Of JavaScript
    console.log("1.23:", challenge.match(/a/g));
//24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    const first= '30 Days of';
    const second=' Javascript'
    console.log("1.24:", first.concat(second));
//25: Use repeat() method to print 30 Days Of JavaScript 2 times
    console.log("1.25:", challenge.repeat(2))
//==============================LEVEL 2 EXERCISES ===============================

//1: Using console.log() print out the following statement: 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    console.log(`2.1: 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
//2: Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    console.log(`2.2: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
//3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
    let ten = '10';
    console.log(`2.3:`, typeof (+ten) === typeof 10);
//4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
    console.log(`2.4:`, typeof parseInt('9.8') === typeof 10);
//5: Check if 'on' is found in both python and jargon
    let python = 'python';
    let jargon = 'jargon';
    console.log(`2.5:`, `Python:`, python.includes('on'), `Jargon:`, jargon.includes('on'));
//6: I hope this course is not full of jargon. Check if jargon is in the sentence.
    let sentence6 = `I hope this course is not full of jargon.`;
    console.log(`2.6:`, sentence6.includes(`jargon`));
//7: Generate a random number between 0 and 100 inclusively.
    console.log(`2.7:`, Math.floor(Math.random()*101));
//8: Generate a random number between 50 and 100 inclusively.
    console.log(`2.8:`, Math.floor(Math.random() * (101 - 50) + 50));
//9: Generate a random number between 0 and 255 inclusively.
    console.log(`2.9:`, Math.floor(Math.random() * 256));
//10: Access the 'JavaScript' string characters using a random number.
    let string10 = 'JavaScript';
    console.log(`2.10:`, string10[Math.floor(Math.random() * (string10.length + 1))]);
//11: Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
    console.log(`2.11:`,`\n 1 1 1 1`, `\n 2 1 2 4 8`, `\n 3 1 3 9 27`, `\n 4 1 4 16 64`, `\n 5 1 5 25 125`)
//12: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let sentence12 = 'You cannot end a sentence with because because because is a conjunction';
    console.log(`2.12:`, sentence12.substring(31, 54))
//==============================LEVEL 3 EXERCISES ===============================

//1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
    let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    console.log(`3.1:`, sentence1.match(/love/gi).length);
//2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
    console.log(`3.2:`, sentence2.match(/because/gi).length);
//3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    let sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    console.log(`3.3: \n`, sentence3.replaceAll(/%|#|@|&|[$]|;|!/g, ''), `\n \n Most Repeated Word:`, `"${sentence3.replaceAll(/%|#|@|&|[$]|;|!/g, '').match(/I/g)[0]}"`);
    // console.log(`3.3:`, sentence3.replaceAll('%', ''));

//4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
    let sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
    let salary = sentence4.substring(9, 13);
    let bonus = sentence4.substring(42, 47);
    let sideHustle = sentence4.substring(67, 72);
    console.log(`3.4:`, (parseInt(salary)*12)+ parseInt(bonus) + (parseInt(sideHustle)*12), `dollars a year`);