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

function toggleMessageSection(){
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector('ul');

  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block"
  }
}
//Hide message when the page first load
toggleMessageSection();

const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function(event){
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName);
  console.log(usersEmail);
  console.log(usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");
  newMessage.innerHTML = 
    '<a href="mailto:' + usersEmail + '">' + usersName + 
    "</a>" + "<span> wrote: " + usersMessage + "</span>";

  // Remove button 
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function(){
    const entry = removeButton.parentNode;
    entry.remove();
    toggleMessageSection(); // hide the section if that was the last message
  });

  // Edit button
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";

  editButton.addEventListener("click", function(){
    const messageSpan = newMessage.querySelector("span");
    const newText = prompt("Edit your message:", usersMessage);
    
    if(newText !== null && newText.trim() !== ""){
      messageSpan.innerText = " wrote: " + newText;
    }
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  toggleMessageSection();// show the section now that it has a message


  event.target.reset();
});