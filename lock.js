// ========================
// LOCK.JS
// ========================

function unlockEdit(){

const savedPassword =
localStorage.getItem("appPassword") || "";

if(savedPassword===""){

return true;

}

const entered =
prompt("🔐 Enter Password");

if(entered===savedPassword){

return true;

}else{

alert("❌ Wrong Password");

return false;

}

}