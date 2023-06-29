let result = document.createElement('p');
let code = document.createElement('div');
let keyPressed;
result.innerText = 'Press any key';
result.style.font = '35px arial';
result.style.border = '1.5px solid grey';
result.style.textAlign = 'center';
result.style.margin = '400px auto 0px';
result.style.width = '400px';
result.style.padding = '15px';
result.style.boxShadow = '0px 2px 4px grey';
code.style.font = '35px arial';
code.style.textAlign = 'center';
code.style.margin = 'auto';
code.style.width = '100px';
code.style.padding = '25px 5px';
code.style.color = 'green';
document.body.appendChild(result);
document.body.appendChild(code);
document.body.addEventListener('keypress', e => { 
    keyPressed = e.key;
    result.innerHTML = `You Pressed <span class = "keyy" >${keyPressed}</span>`;
    let keyy = document.querySelector('.keyy');
    code.innerText = `${keyPressed.charCodeAt(0)}`
    code.style.border = '1.5px solid lightgrey';
    code.style.boxShadow = '0px 3px 4px lightgrey';
    result.style.margin = '300px auto 30px';
    keyy.style.color = 'green';
});

