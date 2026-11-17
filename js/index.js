//Add a footer element to the page
const body = document.querySelector("body");
const newFooter = document.createElement("footer");
body.appendChild(newFooter);

//Insert copyright text in the footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Hanh Solo ${thisYear}`;

footer.appendChild(copyright);

//Create the list of skills
const skills = ["HTML", "CSS", "JavaScript", "Node", "Git", "Python", "Java"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}