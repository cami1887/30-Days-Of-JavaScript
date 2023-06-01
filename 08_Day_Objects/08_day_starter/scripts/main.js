// Exercises: Level 1

// 1: Create an empty object called dog
    // const dog = {
    // }

// 2: Print the the dog object on the console
        // console.log(dog);

// 3: Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
        // dog.name = 'Lush';
        // dog.color = 'black';
        // dog.age = 10;
        // dog.legs = 4;
        // dog.bark = 'woof woof';

// 4: Get name, legs, color, age and bark value from the dog object
        // console.log(dog);

// 5: Set new properties the dog object: breed, getDogInfo
    // dog.breed = 'German Shepherd';
    // dog.getDogInfo = function() {
    //     return `My dogs name is ${dog.name}. She is ${dog.color} and ${dog.age} years old. She has ${dog.legs} legs and this is her bark: ${dog.bark}!`
    // }
    // console.log(dog.getDogInfo())

// Exercises: Level 2
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
// 1: Find the person who has many skills in the users object.
    // let keys = Object.keys(users);
    // let maxLength = 0;
    // let max = '';
    // keys.forEach(key => {
    //     if (users[key].skills.length > maxLength) {
    //         maxLength = users[key].skills.length;
    //         max = key;
    //     }   
    // })
    // console.log(max);

// 2: Count logged in users, count users having greater than equal to 50 points from the following object.
  // let person = Object.keys(users);
  // let loggedIn = 0;
  // let highScores = 0;
  // person.forEach(key => {
  //   if (users[key].isLoggedIn === true) {
  //     loggedIn++;
  //   }
  //   if (users[key].points >= 50) {
  //     highScores++;
  //   }
  // })
  // console.log(loggedIn, highScores)

// 3: Find people who are MERN stack developer from the users object
  // let keys = Object.keys(users);
  // keys.forEach(key => { 
  //   if (users[key].skills.includes('MongoDB') && users[key].skills.includes('Express') && users[key].skills.includes('React') && users[key].skills.includes('Node')) {
  //     console.log(key);
  //   }
  // })

// 4: Set your name in the users object without modifying the original users object
    // let usersCopy = Object.assign({Camille: {}}, users) 
    // console.log(usersCopy);
    
// 5: Get all keys or properties of users object
    // console.log(Object.keys(users));

// 6: Get all the values of users object
    // console.log(Object.values(users));

// 7: Use the countries object to print a country name, capital, populations and languages.
    // console.log(countries[Math.floor(Math.random()*(countries.length+1))])

// Exercises: Level 3
// 1: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
    const personAccount = {
      firstName: 'Camille',
      lastName: 'Lacaden',
      incomes: {
        job: 150000,
        investments: 50000
      },
      expenses: {
        utilities: 1000,
        mortgage: 100000,
        car: 2000,
        food: 5000,
        insurance: 10000
      },
      properties: {
        rentals: 50000,
        airBnbs: 50000
      },
      totalIncome: 300000,
      totalExpenses: 118000,
      accountInfo: {
        routingNumber: 123456754,
        accountNumber: 3232323
      },
      addIncome: {

      },
      addExpenses: {

      },
      accountBalance: 400000
    }

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// 2: Imagine you are getting the above users collection from a MongoDB database. 
  // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
    // function signUp(userName) {
    //   let included = 0;
    //   for (let element of users) {
    //     if (element.username === userName) {
    //       included++;
    //     }
    //   }
    //   if (included === 0) {
    //     users.push({username: userName})
    //     return users;
    //   }
    //   else {
    //     return 'User already exists';
    //   }
    // }
    // console.log(signUp('Cami1887'));

  // 2.b: Create a function called signIn which allows user to sign in to the application
      // function signIn(userName) { 
      //   let user = 0;
      //   for (let element of users) {
      //     if (element.username === userName) {
      //       element.isLoggedIn = true;
      //       user++;
      //       return 'Welcome back ' + userName;
      //     }
      //   }
      //   if (user === 0) {
      //     return `User Doesn't Exist`;
      //   }
      // }
      // console.log(signIn('xaid'));

// 3: The products array has three elements and each of them has six properties. 
    // a. Create a function called rateProduct which rates the product 
        // function rateProduct(productName) {
        //   let productExists = false;
        //   for (let product of products) {
        //     if (product.name === productName) {
        //       productExists = true;
        //       if (product.ratings.length != 0) {
        //         return product.ratings;
        //       }
        //       else {
        //         return 'This product has no ratings';
        //       }
        //     }
        //   }
        //   if (productExists === false) {
        //     return `This product doesn't exist`
        //   }
        // }
        // console.log(rateProduct('Laptop'));

    // b. Create a function called averageRating which calculate the average rating of a product
      // function averageRating(productName) {
      //     let productExists = false;
      //     let ratings = 0;
      //     let ratingCount = 0;
      //     for (let product of products) {
      //       if (product.name === productName) {
      //         productExists = true;
      //         if (product.ratings.length != 0) {
      //           product.ratings.forEach( x => {
      //             ratingCount++;
      //             ratings += x.rate;
      //           })
      //           return 'Average Rating: ' + ratings/ratingCount;
      //         }
      //         else {
      //           return 'This product has no ratings';
      //         }
      //       }
      //     }
      //     if (productExists === false) {
      //       return `This product doesn't exist`
      //     }
      //   }
      //   console.log(averageRating('mobile phone'));

// 4: Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
    // function likeProduct(productName, userId) {
    //       let productExists = false;
    //       for (let product of products) {
    //         if (product.name === productName) {
    //           productExists = true;
    //           if (!product.likes.includes(userId)) {
    //             product.likes.push(userId);
    //             console.log(products);
    //             return userId + ' liked this product';
    //           }
    //           else if (product.likes.includes(userId)) {
    //             product.likes.pop();
    //             console.log(products);
    //             return userId + ' removed their like'
    //           }
    //           }
    //         }
    //         if (productExists === false) {
    //         return `This product doesn't exist`
    //       }
    //       }     
    // console.log(likeProduct('mobile phone', 'asfswed'));