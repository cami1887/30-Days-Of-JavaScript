let wrapper = document.querySelector('.wrapper');
wrapper.innerHTML = `
<h1>Asabeneh Yetayeh challenges in <span>2020</span></h1>
<h2>30DaysOfJavaScript Challenge</h2>
<div class = "date" ></div>
<div class = "challenges"></div>
<div class="author">Asabeneh Yetayeh</div>
<div class="socials"></div>
<p class ="biography"></p>
<div>
    <ul class="titles">
        <p class ="titles-title" >Titles</p>
    </ul>
    <ul class="skills">
        <p class ="skills-title">Skills</p>
    </ul>
    <ul class="qualifications">
        <p class ="qualifications-title">Qualifications</p>
    </ul>
</div>
<div class="keywords">
    <p class="keywords-title">Keywords</p>
</div>
`
let h1 = document.querySelector('h1');
let year = document.querySelector('h1 span')
let h2 = document.querySelector('h2');
let date = document.querySelector('.date');
let challengeList = document.querySelector('.challenges');
let author = document.querySelector('.author');
let socials = document.querySelector('.socials');
let biography = document.querySelector('.biography');
let titles = document.querySelector('.titles');
let titlesTitle = document.querySelector('.titles-title');
let skills = document.querySelector('.skills');
let skillsTitle = document.querySelector('.skills-title');
let qualifications = document.querySelector('.qualifications');
let qualificationsTitle = document.querySelector('.qualifications-title');
let keywords = document.querySelector('.keywords');
let keywordsTitle = document.querySelector('.keywords-title');

wrapper.style.textAlign = 'center';
wrapper.style.margin = 'auto'
wrapper.style.fontFamily = 'Arial';
wrapper.style.width = '700px';
h1.style.fontWeight = 'normal';
year.style.fontSize = '80px';
h2.style.textDecoration = 'underline';
h2.style.fontWeight = 'normal';
h2.style.fontSize = '22px'
biography.innerText = asabenehChallenges2020.author.bio;


for (let challenge of asabenehChallenges2020.challenges) {
    let li = document.createElement('div');
    challengeList.appendChild(li);
    li.innerHTML = `
        <span class="name">${challenge.name}</span> 
        <details class="topics"> 
            <summary>${challenge.topics[0]}</summary>  
        </details>
        <span class="status">${challenge.status}</span>
    `  
    li.style.display = 'grid';
    li.style.gridTemplateColumns = '250px 120px 90px';
    li.style.gap = '130px'
    li.style.margin = 'auto';
    li.style.width = '700px';
    li.style.padding = '20px 20px';
    li.style.marginBottom = '3px'

    challengeList.style.margin = 'auto auto 20px';
    let topicList = document.querySelector('.topics');
    
    li.style.textAlign = 'left';
    for (let i=0; i<challenge.topics.length; i++) {
        let topic = document.createElement('div');
        topicList.appendChild(topic);
        topic.innerText = challenge.topics[i];
    }
   topicList.classList.toggle("topics");

   let name = document.querySelector('.name');

   if (challenge.status === 'Done') {
    li.style.backgroundColor = 'green';
    name.style.textDecoration = 'underline';
    name.classList.toggle("name");
    name.style.width = '200px'
   }
   if (challenge.status === 'Ongoing') {
    name.style.textDecoration = 'underline';
    li.style.backgroundColor = 'yellow';
    
   }
   if (challenge.status === 'Coming') {
    li.style.backgroundColor = 'red';
    name.classList.toggle("name");
   }
} 

for (let social of asabenehChallenges2020.author.socialLinks) {
    let link = document.createElement('a');
    link.href = social.url;
    link.innerHTML = social.fontawesomeIcon;
    author.style.fontSize = '28px';
    author.style.fontWeight = 'bold';
    author.style.paddingBottom = '10px'
    socials.style.height = '30px'
    socials.appendChild(link);
}



for (let title of asabenehChallenges2020.author.titles) {
    let list = document.createElement('li');
    list.innerText = title[0] + title[1];
    titles.appendChild(list);
    titles.style.fontSize = '15px';
    titles.style.listStyle = 'none';
    titles.style.display = 'inline-block';
    titles.style.textAlign = 'left';
    titlesTitle.style.fontWeight = 'bold';
    titlesTitle.style.marginBottom = '5px';
    titles.style.verticalAlign = 'top';
}

for (let skill of asabenehChallenges2020.author.skills) {
    let list = document.createElement('li');
    list.innerText = '✅' + skill;
    skills.style.fontSize = '15px';
    skills.appendChild(list);
    skills.style.listStyle = 'none';
    skills.style.display = 'inline-block';
    skills.style.textAlign = 'left';
    skillsTitle.style.fontWeight = 'bold';
    skillsTitle.style.marginBottom = '5px';
    skills.style.verticalAlign = 'top';
}

for (let qualification of asabenehChallenges2020.author.qualifications) {
    let list = document.createElement('li');
    list.innerText = '👩🏻‍🎓'+ qualification;
    qualifications.appendChild(list);
    qualifications.style.fontSize = '15px';
    qualifications.style.listStyle = 'none';
    qualifications.style.display = 'inline-block';
    qualifications.style.textAlign = 'left';
    qualifications.style.verticalAlign = 'top';
    qualificationsTitle.style.fontWeight = 'bold';
    qualificationsTitle.style.marginBottom = '5px';
}

for (let keyword of asabenehChallenges2020.keywords) {
    let list = document.createElement('div');
    list.innerText = `#${keyword}`;
    list.style.display = 'inline-block';
    list.style.margin = '2px 10px';
    list.style.padding = '5px 25px 5px 10px';
    list.style.borderRadius = '20px';
    list.style.fontSize = '14px';
    list.style.fontStyle = 'italic'
    list.style.backgroundColor = `rgb(${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)})`
    keywords.appendChild(list);
    keywords.style.width = '750px';
    keywords.style.margin = 'auto';
    keywordsTitle.style.fontWeight = 'bold';
    keywordsTitle.style.textAlign = 'left';
}
    
function getColor() {
    let randomOne = Math.floor(Math.random()*250);
    let randomTwo = Math.floor(Math.random()*250);
    let randomThree = Math.floor(Math.random()*250);
    year.style.color = `rgb(${randomOne}, ${randomTwo}, ${randomThree})`;  
    date.style.backgroundColor = `rgb(${randomTwo}, ${randomOne}, ${randomOne})`;
}

function getDate() {
   let currentDate = new Date();
   date.innerText = currentDate.toUTCString(); 
   date.style.width = '250px';
   date.style.padding = '8px 15px';
   date.style.margin = '15px auto';

}

setInterval(getDate, 1000);
setInterval(getColor, 1000);