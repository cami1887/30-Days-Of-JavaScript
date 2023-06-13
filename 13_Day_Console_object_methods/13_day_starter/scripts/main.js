const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

// Exercises:Level 1
// 1: Display the countries array as a table
    console.table(countries1);

// 2: Display the countries object as a table
    console.table(countries);

// 3: Use console.group() to group logs
  console.group('Countries');
  console.table(countries1);
  console.table(countries);

// Exercises:Level 2
// 1: 10 > 2 * 10 use console.assert()
  console.assert(10 > 2 * 10);

// 2: Write a warning message using console.warn()
  console.warn('pp?');

// 3: Write an error message using console.error()
  console.error('PP!')

// Exercises:Level 3
// 1: Check the speed difference among the following loops: while, for, for of, forEach
console.group('time')
let array = [0, 1, 2, 3, 4];
let count = 0;

console.time('For Loop')
for (let i=0; i < 5; i++) {
    console.log(i);
}
console.timeEnd('For Loop')

console.time('For Of')
for (let element of array) {
    console.log(element);
}
console.timeEnd('For Of');

console.time('While')
while (count < 5) {
    count++;
    console.log(count);
}
console.timeEnd('While');

console.time('ForEach')
    array.forEach(element => console.log(element));
console.timeEnd('ForEach');