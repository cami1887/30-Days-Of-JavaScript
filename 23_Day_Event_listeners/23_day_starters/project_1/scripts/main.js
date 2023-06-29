let wrapper = document.querySelector('.wrapper');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
wrapper.innerHTML = `
    <div class="inputWrapper">
        <input placeholder="Generate more numbers"></input>
        <button>Generate Numbers</button>
    </div>
    <p class="error"></p>  
    <div class="numbers"></div>`
let number;
let input = document.querySelector('input');
let button = document.querySelector('button');
let inputWrapper = document.querySelector('.inputWrapper');
let error = document.querySelector('.error');
let numbers = document.querySelector('.numbers');
let entered = 101;

button.addEventListener('click', generateNumbers);
input.style.width = '500px';
input.style.padding = '8px';
input.style.border = '2px solid'
input.style.borderColor = 'green';

button.style.padding = '10px';
button.style.backgroundColor = 'green';
button.style.color = 'white'
button.style.border = 'none';
button.style.marginLeft = '10px'

inputWrapper.style.textAlign = 'center';
inputWrapper.style.marginBottom = '20px';

wrapper.style.width= '900px';
wrapper.style.margin = 'auto';

h1.style.textAlign = 'center';
h1.style.fontFamily = 'arial';
h1.style.paddingTop = '15px';
h1.style.marginBottom = '0px';
h1.style.fontWeight = 'normal';
h1.style.color = 'green';

h2.style.textAlign = 'center';
h2.style.font = '17px arial';
h2.style.letterSpacing = '.5px';
h2.style.margin = '0px';

h3.style.textAlign = 'center';
h3.style.font = '15px arial';
h3.style.marginTop = '4px';

for (let i=0; i<=100; i++) {
    number = document.createElement('div');
    number.className = 'number';
    number.style.font = '30px arial';
    number.style.lineHeight = '35px';
    number.style.padding = '2px';
    number.style.color = 'white';
    number.style.display = 'inline-block'
    number.style.margin = `2px`;
    number.style.textAlign = 'center';
    number.style.width = '90px';
    number.style.backgroundColor = 'red';
    number.textContent = i;
    numbers.appendChild(number);
    let prime = true;
    if (number.textContent % 2 === 0 && number.textContent != 2) {
        number.style.backgroundColor = 'green';
    }
    if (number.textContent % 2 != 0) {
        number.style.backgroundColor = 'yellow';
    }
    if (number.textContent > 2) {
        for (let x=number.textContent-1; x>1; x--) {
        
            if (number.textContent % x === 0) {
            prime = false;
    } 
        }
    if (prime === true) {
        console.log(number.textContent)
            number.style.backgroundColor = 'red';
        }
    }
} 

function generateNumbers(event) {
    numbers.innerHTML = '';
    let entered = parseInt(input.value);
    if (typeof entered == 'number') {
        for (let i=0; i<=entered; i++) {
            number = document.createElement('div');
            number.className = 'number';
            number.style.font = '30px arial';
            number.style.lineHeight = '35px';
            number.style.padding = '2px';
            number.style.color = 'white';
            number.style.display = 'inline-block'
            number.style.margin = `2px`;
            number.style.textAlign = 'center';
            number.style.width = '90px';
            number.style.backgroundColor = 'red';
            number.textContent = i;
            numbers.appendChild(number);
            let prime = true;
            if (number.textContent % 2 === 0 && number.textContent != 2) {
                number.style.backgroundColor = 'green';
            }
            if (number.textContent % 2 != 0) {
                number.style.backgroundColor = 'yellow';
            }
            if (number.textContent > 2) {
                for (let x=number.textContent-1; x>1; x--) {
                    if (number.textContent % x === 0) {
                    prime = false;
                    } 
                }
                if (prime === true) {
                    number.style.backgroundColor = 'red';
                }
            }
        }
    }
    else {
        error.innerText = 'Please enter a valid number';
        error.style.color = 'red';
    }
}




