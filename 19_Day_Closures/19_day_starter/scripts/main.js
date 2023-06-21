// Exercises: Level 1
// 1: Create a closure which has one inner function
    // function outerFunction() {
    //     let count = 0;
    //     function innerFunction() {
    //         count++;
    //         return count;
    //     }

    //     return innerFunction;
    // }

    // let functions = outerFunction();
    // console.log(functions());

// Exercises: Level 2
// 2: Create a closure which has three inner functions
    // function outerFunction() {
    //     let count = 0;
    //     function functionOne() {
    //         count++;
    //         return count;
    //     }
    //     function functionTwo() {
    //         count += 5;
    //         return count;
    //     }
    //     function functionThree() {
    //         count--;
    //         return count;
    //     }
    //     return {
    //         functionOne:functionOne(),
    //         functionTwo:functionTwo(),
    //         functionThree:functionThree()
    //     }
    // }

    // let functions = outerFunction();
    // console.log(functions.functionOne, functions.functionTwo, functions.functionThree);

// Exercises: Level 3
// 3: Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
    // function personAccount() {
    //     const firstName = 'Camille';
    //     const lastName = 'Lacaden';
    //     let addedIncome = 0;
    //     let addedExpense = 0;
    //     const incomes = [
    //         {job: 2000},
    //         {property: 3000}
    //     ]
    //     const expenses = [
    //         {rent: 1500},
    //         {utilities: 700}
    //     ]
    //     function totalIncome(bool) {
    //         if (bool === true) {
    //             let p = incomes.reduce((a,b) => a += parseInt(Object.values(b)),0);
    //             return p; 
    //         }
    //     }
    //     function totalExpenses(bool) {
    //         if (bool === true) {
    //             let p = expenses.reduce((a,b) => a += parseInt(Object.values(b)),0);
    //             return p;  
    //         }
    //     }
    //     function addIncome(name, amount) {
    //         incomes.push({[name]:amount});
    //         addedIncome = amount;
    //         return addedIncome;
    //     }
    //     function addExpense(name, amount) {
    //         expenses.push({[name]:amount});
    //         addedExpense = amount;
    //         return expenses;
    //     }
    //     function accountInfo() {
    //         return firstName + ' ' + lastName + ' Income: $' + totalIncome() + ', Expenses: $' + totalExpenses();
    //     }
    //     function accountBalance() {
    //         return totalIncome(true) - totalExpenses(true);
    //     }
    //     return {
    //         addIncome,
    //         addExpense,
    //         totalIncome,
    //         totalExpenses,
    //         accountInfo:accountInfo(),
    //         accountBalance:accountBalance()
    //     }
    // }
    // const bankAccount = personAccount();
    // console.log(bankAccount.addIncome('investment', 500))
    // console.log(bankAccount.totalIncome(true));
    // console.log(bankAccount.accountBalance)