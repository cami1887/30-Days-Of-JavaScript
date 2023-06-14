

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
//   get getScore() {
//     return this.score
//   }
//   get getSkills() {
//     return this.skills
//   }
//   set setScore(score) {
//     this.score += score
//   }
//   set setSkill(skill) {
//     this.skills.push(skill)
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//     console.log(this)
//     return info
//   }
//   static favoriteSkill() {
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     console.log('hi')
//     return skills[index]
//   }
// }

// console.log(Person.favoriteSkill())

// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city)
//     this.gender = gender
//   }

//   saySomething() {
//     console.log('I am a child of the person class')
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''
//     let pronoun = this.gender == 'Male' ? 'He' : 'She'

//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//     console.log(this)
//     return info
//   }
// }

// const s1 = new Student(
//   'Asabeneh',
//   'Yetayeh',
//   250,
//   'Finland',
//   'Helsinki',
//   'Male'
// )
// const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1)
// console.log(s2)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())

// Exercises Level 1
// 1: Create an Animal class. The class will have name, age, color, legs properties and create different methods
  class Animal {
    constructor (name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  }
  console.log(Animal);

// 2: Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  animalDescription() {
    console.log('I am a dog');
  }
}
const germanShepherd = new Dog('Lush', 10, 'Black', 4);
germanShepherd.animalDescription();
console.log(germanShepherd.legs);

class Cat extends Animal {
  animalDescription() {
    console.log('I am a cat');
  }
}
const ragDoll = new Cat('Princess Yue', 0, 'White', 4);
ragDoll.animalDescription();
console.log(ragDoll.name);

// Exercises Level 2
// 1: Override the method you create in Animal class
  class Fish extends Animal {
    constructor (name, age, color, legs, breed) {
      super(name, age, color, legs)
      this.breed = breed;
    }
  }

  const goldFish = new Fish ('Gooby', 5, 'White', 0, 'Goldfish');
  console.log(goldFish);
  console.log(goldFish.breed);

// Exercises Level 3
// 1: Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
  constructor(array) {
    this.array = array;
  }
  count() {
    return this.array.length;
  }
  sum() {
    let count = 0;
    for (let element of this.array) {
      count+= element;
    }
    return count;
  }
  min() {
    let sorted = this.array.sort((a,b) =>  a-b);
    return sorted[0];
  }
  max() {
    let sorted = this.array.sort((a,b) =>  a-b);
    return sorted[sorted.length-1];
  }
  range() {
    let sorted = this.array.sort((a,b) =>  a-b);
    return sorted[sorted.length-1]-sorted[0];
  }
  mean() {
    return Math.round(this.sum()/this.count());
  }
  median() {
    if (this.count()%2 === 0) {
      let sorted = this.array.sort((a,b) =>  a-b);
      return Math.round((sorted[this.count()/2] + sorted[(this.count()/2)+1])/2)
    }
    if (this.count()%2 != 0) {
      let sorted = this.array.sort((a,b) =>  a-b);
      return sorted[Math.floor(this.count()/2)];
    }
  }
  mode() {
    let set = new Set(this.array.sort((a,b) =>  a-b));
    let storeNumbers = [];
    let count = 0;
    console.log(set);
    for (let part of set) {
      for (let element of this.array) {
      if (element === part) {
        count++;
      }
    }
      storeNumbers.push({mode: part, count: count});
      count = 0;
    }
    let sorted = storeNumbers.sort((a,b) =>  b.count-a.count);
    return sorted[0];
  }
  variance() {
    let sum = 0;
      for (let element of this.array) {
        let difference = element - this.mean();
        sum += (difference*difference);
      }
      sum/=this.count();
      return sum;
  }
  standardDeviation() {
    return Math.sqrt(this.variance());
  }
  frequencyDistribution() {
    let set = new Set(this.array.sort((a,b) =>  a-b));
    let storeNumbers = [];
    let count = 0;
    for (let part of set) {
      for (let element of this.array) {
        if (element === part) {
          count++;
        }
      }
      storeNumbers.push({Number:part, Percentage:((count/this.count())*100)});
      count = 0;
    }
    return storeNumbers;
  }
}

let statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.variance()) // 17.5
console.log('Standard Deviation: ', statistics.standardDeviation()) // 4.2
console.log('Frequency Distribution: ',statistics.frequencyDistribution()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstname, lastname , incomes, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = incomes;
    this.expenses = expenses;
    this.addedIncome;
    this.addedExpense;
  } 
  addIncome(income) {
    this.addedIncome = income;
    return this.addedIncome;
  }
  addExpense(expense) {
    this.addedExpense = expense;
    return this.addedExpense;
  }
  totalIncome() {
    return this.incomes + this.addedIncome;
  }
  totalExpense() {
    return this.expenses - this.addedExpense;
  }
  accountInfo() {
    return this.firstname + ' ' + this.lastname;
  }
  accountBalance() {
    return this.totalIncome()-this.totalExpense();
  }
} 
let person = new PersonAccount('Camille', 'Lacaden', 1200, 1000);

console.log(person.addIncome(100));
console.log(person.totalIncome());
console.log(person.addExpense(300));
console.log(person.totalExpense());
console.log(person.accountBalance());