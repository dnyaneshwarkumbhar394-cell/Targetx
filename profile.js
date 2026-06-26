// Name

document.getElementById("userName").innerHTML=
localStorage.getItem("userName") || "Student";

// Photo

let photo=
localStorage.getItem("profilePhoto");

if(photo){

document.getElementById("profileImage").src=photo;

}

// Streak

let streak=
localStorage.getItem("streak") || 0;

document.getElementById("streakCount").innerHTML=
streak+" Days";

// Progress

let total=9;

let data=
JSON.parse(localStorage.getItem("dailyTargets")) || {};

let completed=0;

for(let key in data){

if(data[key]===true){

completed++;

}

}

let percent=
Math.round(completed/total*100);

document.getElementById("todayProgress").innerHTML=
percent+"%";

// Badge

let badge="🌱 Beginner";

if(streak>=7){

badge="🥉 Bronze";

}

if(streak>=30){

badge="🥈 Silver";

}

if(streak>=100){

badge="🥇 Gold";

}

document.getElementById("badge").innerHTML=badge;