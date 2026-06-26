// =========================
// DAILY TARGET APP
// app.js
// =========================

// Today's Date

const today = new Date();

const options = {

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

};

document.getElementById("todayDate").innerHTML =
today.toLocaleDateString("en-IN",options);

// Load Name

let name =
localStorage.getItem("userName");

if(name){

document.getElementById("userName").innerHTML = name;

}

// Load Profile Photo

let photo =
localStorage.getItem("profilePhoto");

if(photo){

document.getElementById("profileImage").src = photo;

}

// Load Streak

let streak =
localStorage.getItem("streak") || 0;

document.getElementById("streak").innerHTML =
streak + " Days";

// Daily Reset Check

let lastOpen =
localStorage.getItem("lastOpenDate");

let todayKey =
today.toDateString();

if(lastOpen !== todayKey){

// New Day

localStorage.setItem(
"lastOpenDate",
todayKey
);

// Target Reset yahan Step 5 me add karenge

}















// Default password (first run)
if(!localStorage.getItem("appPassword")){

localStorage.setItem("appPassword","1234");

}

function unlockApp(){

const pass =
document.getElementById("lockPassword").value;

const saved =
localStorage.getItem("appPassword");

if(pass===saved){

document.getElementById("lockScreen").style.display="none";

}else{

document.getElementById("lockMessage").innerHTML=
"❌ Wrong Password";

}

}








