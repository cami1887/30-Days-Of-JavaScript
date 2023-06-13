// Exercises: Level 1
// 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
    // const sentence = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
    // const matches = sentence.match(/[0-9]+/g)
    // console.log(matches)
    // let salary = (parseInt(matches[0])*12) + (parseInt(matches[2])*12) + parseInt(matches[1]) 
    // console.log(salary);

// 2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
    // const sentence = "The position of some particles on the horizontal xaxis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
    // let regExp = /[-0-9]+/g;
    // let matches = sentence.match(regExp);
    // console.log(matches[matches.length-1]- matches[0]);

// 3: Write a pattern which identify if a string is a valid JavaScript variable
//     function isValidVariable(variable) {
//         let regExp = /[0-9]|[-]|[^A-Za-z _]/g;
//         let matches = variable.match(regExp);
//         if (matches != undefined || matches != null) {
//             return "Invalid JavaScript Variable"
//         }
//         else {
//             return "Valid JavaScript Variable"
//         }
//     }
// console.log(isValidVariable('first_name'))
//  # True
// console.log(isValidVariable('first-name'))
// # False
// console.log(isValidVariable('1first_name'))
// # False
// console.log(isValidVariable('firstname')) 
// # True

// Exercises: Level 2
// 1: Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
    // let paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
    // function tenMostFrequentWords(string) {
    //     let replaced = string.replaceAll('.', '');
    //     let words = replaced.split(' ');
    //     let set = new Set(words);
    //     let match = []
    //     let wordOccurence = []
    //     for (let element of set) {
    //         let regExp = new RegExp(' ' + element, 'g');
    //         let frequency = string.match(regExp);
    //         match.push({word:element, count:frequency.length});
    //     } 
    //     let sorted = match.sort((a,b)=> a.count - b.count);
    //     for (let i=1; i<=10; i++) {
    //         wordOccurence.push(sorted[sorted.length-i])
    //     }
    //     return wordOccurence;
    // }
    // console.log(tenMostFrequentWords(paragraph))

// Exercises: Level 3
// 1: Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  let cleanedText = '';
  function cleanText(string) {
    let regExp = /[^A-Za-z ' ']/g;
    cleanedText = string.replaceAll(regExp, '');
    return cleanedText;
  }

  function mostFrequentWords(string) {
    let words = string.split(" ");
    let set = new Set(words);
    let count = 0;
    let countWords = [];
    for (let word of set) {
      for (let element of words) {
        if (element === word) {
          count++;
        }
      }
      countWords.push({word:word, count: count});
      count = 0;
    }
    let sorted = countWords.sort((a,b) => b.count - a.count);
    let highest = [sorted[0], sorted[1], sorted[2]];
    return highest;
  }

    console.log(cleanText(sentence));
    console.log(mostFrequentWords(cleanedText));
