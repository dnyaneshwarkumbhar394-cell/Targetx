// ==============================
// TARGET X SETTINGS
// STEP 3A
// ==============================

// Load Profile

window.onload = function(){

loadProfile();

loadTheme();

};

// -----------------------------

function loadProfile(){

const name =
localStorage.getItem("userName") || "Student";

document.getElementById("userName").textContent = name;

const photo =
localStorage.getItem("profilePhoto");

if(photo){

document.getElementById("profileImage").src = photo;

}

const streak =
localStorage.getItem("streak") || 0;

document.getElementById("streakValue").textContent = streak;

}

// -----------------------------

function changeName(){

let name = prompt("Enter Your Name");

if(!name) return;

name = name.trim();

if(name==="") return;

localStorage.setItem("userName",name);

loadProfile();

alert("✅ Name Updated");

}

// -----------------------------

function changePhoto(){

let url = prompt("Paste Image URL");

if(!url) return;

url = url.trim();

if(url==="") return;

localStorage.setItem("profilePhoto",url);

loadProfile();

alert("✅ Profile Photo Updated");

}

// -----------------------------

function loadTheme(){

const dark =
localStorage.getItem("darkMode");

const toggle =
document.getElementById("darkMode");

if(dark==="true"){

document.body.classList.add("dark");

toggle.checked = true;

}

toggle.addEventListener("change",function(){

if(this.checked){

document.body.classList.add("dark");

localStorage.setItem("darkMode","true");

}else{

document.body.classList.remove("dark");

localStorage.setItem("darkMode","false");

}

});

}


// ==============================
// TARGET X SETTINGS
// STEP 3B
// ==============================

// Change Password

function changePassword(){

let oldPass =
localStorage.getItem("appPassword") || "";

if(oldPass!=""){

let check =
prompt("Enter Current Password");

if(check!==oldPass){

alert("❌ Wrong Password");

return;

}

}

let newPass =
prompt("Enter New Password");

if(newPass==null) return;

newPass=newPass.trim();

if(newPass==""){

alert("Password cannot be empty");

return;

}

localStorage.setItem(
"appPassword",
newPass
);

alert("✅ Password Changed");

}

// ==============================
// Reset Today's Targets
// ==============================

function resetToday(){

if(!confirm("Reset today's targets?")){

return;

}

localStorage.removeItem("targetDB");

alert("✅ Today's Targets Reset");

location.reload();

}

// ==============================
// Reset All Data
// ==============================

function resetAllData(){

if(!confirm("Delete ALL app data?")){

return;

}

localStorage.clear();

alert("✅ All Data Deleted");

location.reload();

}

// ==============================
// Export Data
// ==============================

function exportData(){

const data={

profile:{

name:localStorage.getItem("userName"),

photo:localStorage.getItem("profilePhoto"),

password:localStorage.getItem("appPassword"),

streak:localStorage.getItem("streak")

},

targets:

JSON.parse(

localStorage.getItem("targetDB")

)||{}

};

const text=

JSON.stringify(data,null,2);

navigator.clipboard.writeText(text);

alert("📋 Backup copied to clipboard.");

}

// ==============================
// Import Data
// ==============================

function importData(){

let text=

prompt("Paste Backup JSON");

if(!text) return;

try{

const data=

JSON.parse(text);

if(data.profile){

localStorage.setItem(

"userName",

data.profile.name||"Student"

);

localStorage.setItem(

"profilePhoto",

data.profile.photo||""

);

localStorage.setItem(

"appPassword",

data.profile.password||""

);

localStorage.setItem(

"streak",

data.profile.streak||0

);

}

if(data.targets){

localStorage.setItem(

"targetDB",

JSON.stringify(data.targets)

);

}

alert("✅ Backup Restored");

location.reload();

}catch{

alert("❌ Invalid Backup");

}

}









function changePassword(){

let oldPass = localStorage.getItem("appPassword") || "";

if(oldPass!=""){

let current = prompt("Current Password");

if(current!==oldPass){

alert("Wrong Password");

return;

}

}

let newPass = prompt("Enter New Password");

if(!newPass) return;

localStorage.setItem("appPassword",newPass);

alert("Password Changed");

}