
//   Exercises: Level 1
//   Store you first name, last name, age, country, city in your browser localStorage.
    // localStorage.setItem('firstName', 'Camille');
    // localStorage.setItem('lastName', 'Lacaden');
    // localStorage.setItem('age', 22);
    // localStorage.setItem('country', 'United States');
    // localStorage.setItem('city', 'Beaverton');
    // console.log(localStorage);

//   Exercises: Level 2
//   Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
    // const student = {
    //     firstName: 'Camille',
    //     lastName: 'Lacaden',
    //     age: 22,
    //     skills: ['HTML', 'CSS', 'JavaScript'],
    //     country: 'United States',
    //     enrolled: true
    // }
    // const stringified = JSON.stringify(student);
    // localStorage.setItem('Student', stringified);
    // let Student = localStorage.getItem('Student');
    // console.log(Student);

//   Exercises: Level 3
//   Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
    const personAccount = {
        firstName: 'Camille',
        lastName: 'Lacaden',
        incomes: {'job': 3000, 'property': 2000, 'investments': 1000},
        expenses: {'utilities':500 , 'mortgage':1200, 'food': 1000, 'insurances': 1000},
        totalIncomes: function() {
            return Object.values(this.incomes).reduce((total, accum)=>total+accum,0);
        },
        totalExpenses: function() {
            return Object.values(this.expenses).reduce((total, accum)=>total+accum,0);
        },
        accountInfo: function() {
            return 'Total Incomes: ' + this.totalIncomes() + ', Total Expenses: ' + this.totalExpenses();
        },
        addIncome: function(incomeName, amount) {
            this.incomes[incomeName] = amount;
            return this.totalIncomes();
        },
        addExpense: function(expenseName, amount) {
            this.expenses[expenseName] = amount;
            return this.totalExpenses();
        },
        accountBalance: function() {
            return this.totalIncomes()-this.totalExpenses();
        }
    }
    console.log(personAccount.accountBalance());