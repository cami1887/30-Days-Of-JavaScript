// Exercise: Level 1
// 1: Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
    // let firstParagraph = document.querySelector('p');
    // console.log(firstParagraph);

// 2: Get each of the the paragraph using document.querySelector('#id') and by their id
    // let firstParagraph = document.querySelector('#first');
    // let secondParagraph = document.querySelector('#second');
    // let thirdParagraph = document.querySelector('#third');
    // let fourthParagraph = document.querySelector('#fourth');
    // console.log(firstParagraph, secondParagraph, thirdParagraph, fourthParagraph);

// 3: Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
    // let allParagraphs = document.querySelectorAll('p');
    // console.log(allParagraphs);

// 4: Loop through the nodeList and get the text content of each paragraph
    // for (let i =0; i<allParagraphs.length; i++) {
    //     console.log(allParagraphs[i].innerText)
    // }

// 5: Set a text content to paragraph the fourth paragraph,Fourth Paragraph
    // allParagraphs[3].innerText = 'Fourth Paragraph';
    // console.log(allParagraphs[3])

// 6: Set id and class attribute for all the paragraphs using different attribute setting methods
    // allParagraphs[0].className = 'firstClass';
    // allParagraphs[1].id = 'First';
    // allParagraphs[2].setAttribute('class', 'thirdClass');
    // allParagraphs[3].classList.add('fourthClass');
    // console.log(allParagraphs)

// Exercise: Level 2
// 1: Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family) 
    // for (let i =0; i<allParagraphs.length; i++) {
    //     allParagraphs[i].style.backgroundColor = 'red';
    //     allParagraphs[i].style.color = 'white';
    //     allParagraphs[i].style.borderRadius = '20px';
    //     allParagraphs[i].style.borderStyle = 'solid'
    //     allParagraphs[i].style.borderColor = 'white';
    //     allParagraphs[i].style.width = '150px';
    //     allParagraphs[i].style.height = '30px';
    //     allParagraphs[i].style.margin = 'auto';
    //     allParagraphs[i].style.padding = '20px 30px 10px'
    // }

// 2: Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// for (let i =0; i<allParagraphs.length; i++) {
//     if (i === 0 || i === 2) {
//         allParagraphs[i].style.backgroundColor = 'green';
//     }
//     if (i === 1 || i === 3) {
//         allParagraphs[i].style.backgroundColor = 'red';
//     }
// }

// 3: Set text content, id and class to each paragraph
    // for (let i=0; i<allParagraphs.length; i++) {
    //     if (i === 0) {
    //         allParagraphs[i].innerText = 'Hola hehehehehehehe';
    //         allParagraphs[i].id = 'First';
    //         allParagraphs[i].className = 'Paragraph';
    //     }
    //     if (i === 1) {
    //         allParagraphs[i].innerText = 'eee woooo ';
    //         allParagraphs[i].id = 'Second';
    //         allParagraphs[i].className = 'Paragraph';
    //     }
    //     if (i === 2) {
    //         allParagraphs[i].innerText = 'pp';
    //         allParagraphs[i].id = 'Third';
    //         allParagraphs[i].className = 'Paragraph';
    //     }
    //     if (i === 3) {
    //         allParagraphs[i].innerText = 'doodo';
    //         allParagraphs[i].id = 'Fourth';
    //         allParagraphs[i].className = 'Paragraph';
    //     }
    // }
    // console.log(allParagraphs)

// Exercise: Level 3
// DOM: Mini project 1


// 1: Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
// add date and span //add attribute
// The year color is changing every 1 second //settimeout(1000)
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

const container = document.querySelector('.wrapper');
container.style.textAlign = 'center';
container.innerHTML = `
<h1>Asabeneh Yetayeh challenges in <span>2020</span></h1>
<h2>30DaysOfJavaScript Challenge</h2>
<p></p>
<ul>
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>
</ul>`

const title = document.querySelector('h1');
const year = document.querySelector('span');
const challenge = document.querySelector('h2');
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const dateContainer = document.querySelector('p');
dateContainer.innerText = new Date().toUTCString();

title.style.font = '30px Arial';
// title.style.paddingTop = '40px';

year.style.color = 'red';
year.style.fontSize = '80px'
// year.style

challenge.style.font = '20px Arial'
challenge.style.textDecoration = 'underline'

dateContainer.style.font = '14px Arial';
dateContainer.style.backgroundColor = 'green';
dateContainer.style.padding = '8px';
dateContainer.style.margin = '0px 480px'

list.style.textAlign = 'left';
list.style.margin = '20px 250px';

for (let i=0; i<listItems.length; i++) {
   listItems[i].style.padding = '15px';
    listItems[i].style.backgroundColor = 'red';
    listItems[i].style.listStyle = 'none';
    listItems[i].style.border = 'solid white'
    listItems[i].style.borderWidth = '1px';
    listItems[i].style.font = '14px arial';
}


function updateTime() {
    dateContainer.innerText = new Date().toUTCString();
}

function changeColor() {
let rgbOne = Math.floor(Math.random() * 250);
let rgbTwo = Math.floor(Math.random() * 250);
let rgbThree = Math.floor(Math.random() * 250);
year.style.color = `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
dateContainer.style.backgroundColor = `rgb(${rgbTwo}, ${rgbThree}, ${rgbOne})`
}

for (let i=0; i<listItems.length; i++) {
    if (listItems[i].innerText.includes('Coming')) {
        listItems[i].style.backgroundColor = 'red';
    }
    if (listItems[i].innerText.includes('Done')) {
        listItems[i].style.backgroundColor = 'green';
    }
    if (listItems[i].innerText.includes('Ongoing')) {
        listItems[i].style.backgroundColor = 'gold';
    }
}

setInterval(changeColor, 1000)
setInterval(updateTime, 1000);


