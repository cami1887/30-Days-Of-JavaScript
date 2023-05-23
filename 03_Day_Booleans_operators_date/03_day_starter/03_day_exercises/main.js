
//LEVEL 1 EXERCISES
//1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
    let firstName = 'Camille';
    let lastName = 'Lacaden';
    let country = 'United States';
    let city = 'Beaverton';
    let age = 22;
    let isMarried = false;
    let birthYear = 2001;
    console.log(`1.1:`, typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof birthYear);

//2: Check if type of '10' is equal to 10
    console.log(`1.2:`, typeof '10' === 10);

//3: Check if parseInt('9.8') is equal to 10
    console.log(`1.3:`, parseInt('9.8') === 10);

//4: Boolean value is either true or false.
//i. Write three JavaScript statement which provide truthy value.
    console.log(`1.4.i:`, 5 === 5, 4 < 5, 1 > 0 );
//ii. Write three JavaScript statement which provide falsy value.
    console.log(`1.4.ii:`, 5 != 5, 1 > 2, 3/2 === 1);

//5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//i. 4 > 3
    console.log(`1.5.i:`, 4 > 3 );
//ii. 4 >= 3
console.log(`1.5.ii:`, 4 >= 3);
//iii. 4 < 3
console.log(`1.5.iii:`, 4 < 3);
//iv. 4 <= 3
console.log(`1.5.iv:`, 4 <= 3);
//v. 4 == 4
console.log(`1.5.v:`, 4 == 4);
//vi. 4 === 4
console.log(`1.5.vi:`, 4 === 4);
//vii. 4 != 4
console.log(`1.5.vii:`, 4 != 4);
//viii. 4 !== 4
console.log(`1.5.viii:`, 4 !== 4);
//ix. 4 != '4'
console.log(`1.5.ix:`, 4 != '4');
//x. 4 == '4'
console.log(`1.5.x:`, 4 == '4' );
//xi. 4 === '4'
console.log(`1.5.xi:`, 4 == '4');
//xii. Find the length of python and jargon and make a falsy comparison statement.
let python = 'python';
let jargon = 'jargon';
console.log(`1.5.xii:`, python.length != jargon.length);

//6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//i. 4 > 3 && 10 < 12
console.log(`1.6.i:`, 4 > 3 && 10 < 12);
//ii. 4 > 3 && 10 > 12
console.log(`1.6.ii:`, 4 > 3 && 10 > 12);
//iii. 4 > 3 || 10 < 12
console.log(`1.6.iii:`, 4 > 3 || 10 < 12);
//iv. 4 > 3 || 10 > 12
console.log(`1.6.iv:`, 4 > 3 || 10 > 12);
//v. !(4 > 3)
console.log(`1.6.v:`, !(4 > 3));
//vi. !(4 < 3)
console.log(`1.6.vi:`, !(4 < 3));
//vii. !(false)
console.log(`1.6.vii:`, !(false));
//viii. !(4 > 3 && 10 < 12)
console.log(`1.6.viii:`, !(4 > 3 && 10 < 12));
//ix. !(4 > 3 && 10 > 12)
console.log(`1.6.ix:`, !(4 > 3 && 10 > 12));
//x. !(4 === '4')
console.log(`1.6.x:`, !(4 === '4'));
//xi. There is no 'on' in both dragon and python
let dragon = 'dragon';
console.log(`1.6.xi:`, dragon.includes("on") && python.includes("on"));

//7: Use the Date object to do the following activities
//i. What is the year today?
let now = new Date();
console.log(`1.7.i:`, now.getFullYear());
//ii. What is the month today as a number?
console.log(`1.7.ii:`, now.getMonth() );
//iii. What is the date today?
console.log(`1.7.iii:`, now.getDate());
//iv. What is the day today as a number?
console.log(`1.7.iv:`, now.getDay());
//v. What is the hours now?
console.log(`1.7.v:`, now.getHours());
//vi. What is the minutes now?
console.log(`1.7.vi:`, now.getMinutes());
//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(`1.7.vii:`, now.getTime());

//LEVEL 2 EXERCISES
//1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base= 20;
let height= 10;
console.log(`2.1:`, .5*base*height);

//2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = 5;
let b = 4;
let c = 3;
console.log(`2.2:`, a+b+c);

//3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = 1;
let width = 2;
console.log(`2.3:`, `area:`, length * width, `perimeter:`, 2 * (length + width));

//4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = 3;
const pi = 3.14;
console.log(`2.4:`, `area:`, pi*radius*radius, `circumference`, 2*pi*radius);

//5: Calculate the slope, x-intercept and y-intercept of y = 2x -2
console.log(`2.5:`, `slope:`, 2, `x-intercept:`, 2/2, `y-intercept:`, y=2*0-2 );

//6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log(`2.6:`, `slope:`, (10-2)/(6-2));

//7: Compare the slope of above two questions.
console.log(`2.7:`, `slope difference:`, ((10-2)/(6-2))-2);

//8: Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -3;
console.log(`2.8:`, `y =`, (x+3)*(x+3), `when x =`, x);

//9: Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person
let hours = 40;
let rate = 28;
console.log(`2.9: weekly salary =`, hours*rate, `dollars`);

//10: If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = 'camille';
if (yourName.length > 7) {
    console.log(`2.10: Your name is long`);
}
else {
    console.log(`2.10: Your name is short` ); 
}

//11: Compare your first name length and your family name length and you should get this output.
     firstName = 'Camille';
     lastName = 'Lacaden';
     if (firstName.length > lastName.length) {
        console.log(`2.11: Your first name, ${firstName} is longer than your family name, ${lastName}`);
     }
     if (firstName.length < lastName.length) {
        console.log(`2.11: Your first name, ${firstName} is shorter than your family name, ${lastName}`);
     }
     else {
        console.log(`2.11: Your first name, ${firstName} is the same length as your family name, ${lastName}`);
     }

//12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
    // let myAge = 250
    // let yourAge = 25
    // console.log(`2.12: I am ${myAge-yourAge} years older than you`);

//13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    // let year = prompt("What year were you born?");
    // let date = new Date();
    // age = date.getFullYear() - year;
    // if (age >= 18) {
    //     console.log(`2.13:`, `You are ${age}. You are old enough to drive`);
    // }
    // else {
    //     console.log(`2.13:`, `You are ${date.getFullYear() - year}. You will be allowed to drive after ${18-age} years`);
    // }

//14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    // let lifespan = prompt("How old are you?");
    // console.log(`2.14: You have lived ${lifespan*365*24*60*60} seconds`);

//15: Create a human readable time format using the Date time object
    let date = new Date();
    //i. YYYY-MM-DD HH:mm
    console.log(`2.15.i: ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
    //ii. DD-MM-YYYY HH:mm
    console.log(`2.15.ii: ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
    //iii. DD/MM/YYYY HH:mm
    console.log(`2.15.iii: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);

//LEVEL 3 EXERCISES
//1: Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    //i. YYY-MM-DD HH:mm eg. 2012-01-02 07:05
    let month = date.getMonth()+1;
    let number = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if ((date.getMonth()+1) < 10) {
        month = `0${date.getMonth()+1}`;
    }
    if (date.getDate() < 10) {
        number = `0${date.getDate()}`
    }
    if (date.getHours() < 10) {
        hour = `0${date.getHours()}`;
    }
    if (date.getMinutes() < 10) {
        minutes = `0${date.getMinutes()}`
    }
        console.log(`3.1: ${date.getFullYear()}-${month}-${number} ${hour}:${minutes}`);