let timeNow = new Date();

let hours = timeNow.getHours();
let elem = document.getElementById("greetings");
 
if(hours>=18)
{
    elem.innerText = "Good evening.";
    elem.style.color = "Royalblue";
}else if(hours>=12)
{
    elem.style.color = "Orange";
    elem.innerText = "Good afternoon.";
}else{
    elem.style.color = "Seagreen";
    elem.innerText = "Good morning"
}

document.getElementById("greetings").innerText = msg;