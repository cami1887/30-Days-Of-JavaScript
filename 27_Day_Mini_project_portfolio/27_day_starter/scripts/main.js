let h1 = document.querySelector('h1');
let animatedWordContainer = document.querySelector('.animated-word-container');
let animatedWord = document.querySelector('.animated-word');
let biography = document.querySelector('.biography');
let challengeContainer = document.querySelector('.challenge-container');
let challenges = document.querySelectorAll('.challenge-container div')
let animatedSpan = document.querySelector('.animated-span');
let technology = document.querySelector('.technology')
let biographySpan = document.querySelectorAll('.biography span')
let titlesArray = ['Instructor', 'Developer', 'Motivational Speaker', 'Content Creator', 'Motivator', 'Educator', 'Programmer'];
let skillsArray = ['MONGODB', 'REACT', 'REDUX', 'PANDAS', 'NODE', 'PYTHON', 'NUMPY'];
let titleCount = 0;
let skillCount = 0;
let opacity = 0;
let slide = 0;
challengeContainer.addEventListener('mouseover', hoverAnimation);
challengeContainer.addEventListener('mouseout', outAnimation)

function setTitleInterval() {
    if (titleCount < titlesArray.length) {
        animateTitles(titlesArray[titleCount]);
        titleCount++;
    }
    else {
        titleCount = 0;
        animateTitles(titlesArray[titleCount]);
        titleCount++;
    }
}

function animateTitles(skill) {
        animatedWord.innerText = skill;
}

function setSkillsInterval() {
    if (skillCount< skillsArray.length) {
        animateSkills(skillsArray[skillCount]);
        skillCount++;
    }
    else {
        skillCount = 0;
        animateSkills(skillsArray[skillCount]);
        skillCount++;
    }
}

function animateSkills(skill) {
        animatedSpan.innerText = skill;  
}


document.body.style.width = '1000px';
document.body.style.margin = 'auto';

h1.style.font = '80px arial';
h1.style.letterSpacing = '15px';

animatedWordContainer.style.backgroundColor = 'pink';
animatedWordContainer.style.padding = '20px 20px';
animatedWordContainer.style.font = '36px arial';
animatedWordContainer.style.letterSpacing = '1px';

biography.style.font = '18px arial';
biography.style.letterSpacing = '1px';
biography.style.lineHeight = '2';

challengeContainer.style.display = 'grid';
challengeContainer.style.gridTemplateColumns = '270px 270px 270px';
challengeContainer.style.marginLeft = '25px';
challengeContainer.style.textAlign = 'center';
challengeContainer.style.gap = '70px'

technology.style.font = '18px arial';
technology.style.letterSpacing = '1px';

animatedSpan.style.font = '42px arial';
animatedSpan.style.fontWeight = 'bold';

biographySpan.forEach(span => {
    span.style.fontWeight = 'bold';
    span.style.letterSpacing = '0px';
})

challenges.forEach(challenge => {
    challenge.style.height = '120px';
    challenge.style.boxShadow = 'inset 0px 0px 5px rgba(80, 80, 80, 0.15) ';
    challenge.style.font = '20px arial';
    challenge.style.paddingTop = '65px';
    challenge.style.lineHeight = '1.5';
    challenge.style.letterSpacing = '1px';
})

function colorChange() {
    let rgbOne = Math.floor(Math.random()*250);
    let rgbTwo = Math.floor(Math.random()*250);
    let rgbThree = Math.floor(Math.random()*250);
    let rgb =  `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`
    animatedSpan.style.color = rgb;
}

function opacityChange() {
    if (opacity < 88) {
        animatedSpan.style.opacity = `${opacity}%`;
        animatedWord.style.opacity = `${opacity}%`;
        console.log(opacity)
        opacity++;
    }
     else {
        opacity = -11;
        console.log(opacity)
     }   
}

function slideTitle() {
    if (slide < 88) {
        animatedWord.style.marginLeft = `${slide++}px`
    }
    else {
        slide = -11;
    }
}

function hoverAnimation(event) {
    challenges.forEach(challenge => {
        if (challenge == event.target) {
        event.target.style.backgroundColor = 'lightpink';
        }
    })
}

function outAnimation(event) {
    event.target.style.backgroundColor = 'white';
}

setInterval(opacityChange, 10)
setInterval(setSkillsInterval, 1000)
setInterval(setTitleInterval, 1000)
setInterval(slideTitle, 10);
setInterval(colorChange, 1000)
