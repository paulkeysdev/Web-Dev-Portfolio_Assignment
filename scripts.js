let skills = ['Web Developer', 'Web Designer', 'Freelancer', 'Photographer'];
let skill = document.getElementById('intro-skill');
let i = 0;

function typeSkill(text) {
    skill.textContent = text;

    const charCount = text.length;
    const width = `${charCount}ch`

    skill.style.width = '0ch';
    skill.style.transition = 'none';
    skill.style.animation = 'none'
    void skill.offsetWidth;

    skill.style.width = width;
    skill.style.transition = `width 2s steps(${charCount}, end)`;

    skill.style.animation = 'blink 0.7s step-end infinite';
}

function updateSkill() {
    typeSkill(skills[i]);
    i = (i + 1) % skills.length;
}

updateSkill();
setInterval(updateSkill, 3000);

// function updateSkill() {
//     skill.textContent = skills[i]
//     i = (i + 1) % skills.length
// }