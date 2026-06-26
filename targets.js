// ===================================
// TARGET X
// targets.js
// Reply 3A
// ===================================

// Database

let targetDB = {

math:[],

chemistry:[],

physics:[]

};

// Load

const saved = localStorage.getItem("targetDB");

if(saved){

targetDB = JSON.parse(saved);

}

// Current Subject

let currentSubject = "";

let editIndex = -1;

// Elements

const popup =
document.getElementById("popup");

const targetInput =
document.getElementById("targetInput");

const priority =
document.getElementById("priority");

const popupTitle =
document.getElementById("popupTitle");

// Open Popup

function openPopup(subject){

currentSubject = subject;

editIndex = -1;

popupTitle.innerHTML =
"➕ Add Target";

targetInput.value = "";

priority.value = "easy";

popup.style.display = "flex";

}

// Close Popup

function closePopup(){

popup.style.display = "none";

}

// Save Target

function saveTarget(){

const text =
targetInput.value.trim();

if(text===""){

alert("Enter Target");

return;

}

if(

editIndex==-1 &&

targetDB[currentSubject].length>=3

){

alert("Maximum 3 Targets Allowed");

return;

}

const data={

title:text,

priority:priority.value,

completed:false

};

if(editIndex==-1){

targetDB[currentSubject].push(data);

}else{

targetDB[currentSubject][editIndex]=data;

}

localStorage.setItem(

"targetDB",

JSON.stringify(targetDB)

);

closePopup();

renderTargets();

}

// Render

function renderTargets(){

renderSubject(

"math",

"mathList"

);

renderSubject(

"chemistry",

"chemistryList"

);

renderSubject(

"physics",

"physicsList"

);

}

renderTargets();

// ===================================
// TARGET X
// Reply 3B
// ===================================

// Render One Subject

function renderSubject(subject,id){

const list =
document.getElementById(id);

list.innerHTML="";

targetDB[subject].forEach((item,index)=>{

const card =
document.createElement("div");

card.className="targetItem";

let icon="🟢";

if(item.priority==="medium"){

icon="🟡";

}

if(item.priority==="hard"){

icon="🔴";

}

card.innerHTML=`

<input
type="checkbox"
${item.completed?"checked":""}
onchange="toggleComplete('${subject}',${index})">

<div class="targetText">

${icon}
${item.title}

</div>

<button
onclick="editTarget('${subject}',${index})">

✏️

</button>

<button
onclick="deleteTarget('${subject}',${index})">

🗑️

</button>

`;

list.appendChild(card);

});

updateProgress();

}

// Complete

function toggleComplete(subject,index){

targetDB[subject][index].completed=

!targetDB[subject][index].completed;

saveDatabase();

}

// Edit

function editTarget(subject,index){

currentSubject=subject;

editIndex=index;

popup.style.display="flex";

popupTitle.innerHTML="✏️ Edit Target";

targetInput.value=

targetDB[subject][index].title;

priority.value=

targetDB[subject][index].priority;

}

// Delete

function deleteTarget(subject,index){

if(confirm("Delete Target?")){

targetDB[subject].splice(index,1);

saveDatabase();

}

}

// Save

function saveDatabase(){

localStorage.setItem(

"targetDB",

JSON.stringify(targetDB)

);

renderTargets();

}


// ===================================
// TARGET X
// Reply 3C
// Progress + Streak + Daily Reset
// ===================================

// Today's Date

const today=new Date();

const todayText=today.toLocaleDateString(
"en-IN",
{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
}
);

document.getElementById("todayDate").innerHTML=
todayText;

// Load Profile

const savedName=
localStorage.getItem("userName");

if(savedName){

document.getElementById("userName").innerHTML=
savedName;

}

const savedPhoto=
localStorage.getItem("profilePhoto");

if(savedPhoto){

document.getElementById("profileImage").src=
savedPhoto;

}

// Progress

function updateProgress(){

let total=0;

let completed=0;

Object.values(targetDB).forEach(subject=>{

subject.forEach(target=>{

total++;

if(target.completed){

completed++;

}

});

});

const percent=
total===0
?0
:Math.round((completed/total)*100);

document.getElementById("progressText").innerHTML=
percent+"%";

document.getElementById("progressFill").style.width=
percent+"%";

// All complete

if(total>0 && completed===total){

giveStreak();

}

}

// Streak

function giveStreak(){

const todayKey=
new Date().toDateString();

if(localStorage.getItem("lastStreakDate")===todayKey){

return;

}

let streak=
parseInt(localStorage.getItem("streak"))||0;

streak++;

localStorage.setItem("streak",streak);

localStorage.setItem("lastStreakDate",todayKey);

document.getElementById("streakValue").innerHTML=
streak;

alert("🎉 Amazing! All Today's Targets Completed.");

}

// Load Streak

document.getElementById("streakValue").innerHTML=
localStorage.getItem("streak")||0;

// Daily Reset

const lastOpen=
localStorage.getItem("lastOpenDate");

const todayKey=
today.toDateString();

if(lastOpen!==todayKey){

localStorage.setItem("lastOpenDate",todayKey);

targetDB={

math:[],

chemistry:[],

physics:[]

};

saveDatabase();

}

// First Render

renderTargets();

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click",()=>{

saveDatabase();

alert("✅ Targets Saved");

});