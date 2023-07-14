let h1 = document.querySelector('h1');
let form = document.querySelector('.form');
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let countryInput = document.getElementById('country');
let scoreInput = document.getElementById('player-score');
let error = document.querySelector('.error');
let leaderboard = document.querySelector('.leaderboard');
let nameDateContainer = document.querySelector('.container');
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
let date = document.querySelector('.date');
let countryName = document.querySelector('.country-name');
let points = document.querySelector('.points');
let trash = document.querySelectorAll('.trash');
let addFive = document.querySelectorAll('.addFive');
let subtractFive = document.querySelectorAll('.subtractFive');
let button = document.querySelector('button');
let scores = [];
button.addEventListener('click', processForm);
trash.forEach(t => t.addEventListener('click', deleteChild));
addFive.forEach(add => add.addEventListener('click', addFivePoints));
subtractFive.forEach(subtract => subtract.addEventListener('click', subtractFivePoints));

document.querySelectorAll('.points').forEach(point => scores.push([point.parentNode, point.innerText]))

function processForm(event) {
    if (firstNameInput.value && lastNameInput.value && countryInput.value && scoreInput.value) {
        error.innerText = '';
        let li = document.createElement('li');
        let date = new Date();
        li.innerHTML = `
			<div class="container">
				<div><span class="first-name">${firstNameInput.value.toUpperCase()} </span><span class="last-name">${lastNameInput.value.toUpperCase()}</span></div>
				<div class="date">${date}</div>
			</div>
			<div class="country-name">${countryInput.value.toUpperCase()}</div>
			<div class="points">${scoreInput.value}</div>
			<button class="trash">Trash</button>
			<button class="addFive">+5</button>
			<button class="subtractFive">-5</button>
        `
        li.setAttribute('id', `${scores.length + 1}`);
        scores.push([li, scoreInput.value]);
        let sorted = scores.sort((a,b)=> b[1] - a[1]);
        leaderboard.innerHTML = ``;
        for (let i=0; i<sorted.length; i++) {
            leaderboard.appendChild(sorted[i][0]);
        }
    }
    else {
        error.innerText = "Must fill out all fields";
    }
    trash = document.querySelectorAll('.trash');
    addFive = document.querySelectorAll('.addFive');
    subtractFive = document.querySelectorAll('.subtractFive');
    trash.forEach(t => t.addEventListener('click', deleteChild));
    addFive.forEach(add => add.addEventListener('click', addFivePoints));
    subtractFive.forEach(subtract => subtract.addEventListener('click', subtractFivePoints));
}

function deleteChild(event) {
    leaderboard.removeChild(event.target.parentNode);
    let copy = [];
    document.querySelectorAll('.points').forEach(point => copy.push([point.parentNode, point.innerText]));
    scores = copy;
}

function addFivePoints(event) {
    let x = event.target.previousElementSibling.previousElementSibling;
    let newScore = parseInt(x.innerText) + 5;
    x.innerText = newScore;
}

function subtractFivePoints(event) {
    let x = event.target.previousElementSibling.previousElementSibling.previousElementSibling;
    let newScore = parseInt(x.innerText) - 5;
    x.innerText = newScore;
}
