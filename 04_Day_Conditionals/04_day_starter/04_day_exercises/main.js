// Exercises: Level 1
// 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    // let age = prompt("Enter your age");
    // if (age >= 18) {
    //     console.log(`1.1: You are old enough to drive`);
    // }
    // else {
    //     console.log(`1.1: You are left with ${18-age} years to drive`);
    // }

// 2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    // let age = prompt("Enter your age");
    // let myAge = 22;
    // if (age > myAge) {
    //     console.log(`1.2: You are ${age-myAge} years older than me.`);
    // }
    // else if (age < myAge) {
    //     console.log(`1.2: I am ${myAge-age} years older than you.`);
    // }
    // else {
    //     console.log(`1.2: We are the same age.`);
    // }

// 3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    // let a = 1;
    // let b = 10;
    // i. using if else
    //     if(a > b) {
    //         console.log(`1.3.i: ${a} is greater than ${b}`);
    //     }
    //     else {
    //         console.log(`1.3.i: ${b} is greater than ${a}`);
    //     }
    // ii. ternary operator.
    //     a > b ? console.log(`1.3.ii: ${a} is greater than ${b}`) : console.log(`1.3.ii: ${b} is greater than ${a}`);

// 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    // let number = prompt("Enter a number");
    // number % 2 > 0 ? console.log(`${number} is an odd number`) : console.log(`${number} is an even number`);

// Exercises: Level 2
// 1: Write a code which can give grades to students according to theirs scores:
    // let grade = prompt("What is your score?");
    // console.log(grade);
    // switch(true) {
    //     case (grade > 89):
    //         console.log("You got an A");
    //         break;
    //     case (grade > 69):
    //         console.log("You got a B");
    //         break;
    //     case (grade > 59):
    //         console.log("You got a C");
    //         break;
    //     case (grade > 49):
    //         console.log("You got a D");
    //         break;
    //     case (grade < 50):
    //         console.log("You got an F");
    //         break;
    //     default:
    //         console.log("That's not a score");
    //         break;
    // }

// 2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // switch (month) {
    //     case 'september':
    //     case 'october':
    //     case 'november':
    //         console.log(`It is Fall`);
    //         break;
    //     case 'december':
    //     case 'january':
    //     case 'february':
    //         console.log(`It is Winter`);
    //         break;
    //     case 'march':
    //     case 'april':
    //     case 'may':
    //         console.log(`It is Spring`);
    //         break;
    //     case 'june':
    //     case 'july':
    //     case 'august':
    //         console.log(`It is Summer`);
    //         break;
    //     default:
    //         console.log(`That's not a month!`);
    // }

// 3: Check if a day is weekend day or a working day. Your script will take day as an input.
    // let day = prompt("What is the day today?").toLowerCase();
    // switch (day) {
    //     case 'monday':
    //     case 'tuesday':
    //     case 'wednesday':
    //     case 'thursday':
    //     case 'friday':
    //         console.log(`${day[0].toUpperCase()+ day.substring(1)} is a weekday`);
    //         break;
    //     case 'saturday':
    //     case 'sunday':
    //         console.log(`${day[0].toUpperCase()+ day.substring(1)} is a weekend`);
    //         break;
    //     default:
    //         console.log("That's not a day of the week!");
    // }

// Exercises: Level 3
// 1: Write a program which tells the number of days in a month.
// let month = prompt("What month is it?").toLowerCase();
// switch (month) {
//     case 'january':
//     case 'march':
//     case 'may':
//     case 'july':
//     case 'august':
//     case 'october':
//     case 'december':
//         console.log(`${month[0].toUpperCase()+month.substring(1)} has 31 days.`);
//         break;
//     case 'february':
//         console.log(`February has 28 days.`);
//         break;
//     case 'april':
//     case 'june':
//     case 'september':
//     case 'november':
//         console.log(`${month[0].toUpperCase()+month.substring(1)} has 30 days.`);
//         break;
//     default:
//          console.log("That's not a month!");
// }

// 2: Write a program which tells the number of days in a month, now consider leap year.
    // let month = prompt("What month is it?").toLowerCase();
    // switch (month) {
    //     case 'january':
    //     case 'march':
    //     case 'may':
    //     case 'july':
    //     case 'august':
    //     case 'october':
    //     case 'december':
    //         console.log(`${month[0].toUpperCase()+month.substring(1)} has 31 days.`);
    //         break;
    //     case 'february':
    //         let year = prompt("What year is it?");
    //         if (year%4 === 0) {
    //             console.log(`February has 29 days.`);
    //         }
    //         else {
    //             console.log(`February has 28 days.`)
    //         }
    //         break;
    //     case 'april':
    //     case 'june':
    //     case 'september':
    //     case 'november':
    //         console.log(`${month[0].toUpperCase()+month.substring(1)} has 30 days.`);
    //         break;
    //     default:
    //         console.log("That's not a month!");
    // }