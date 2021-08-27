const newyear=new Date("1 Jan 2022");

const daysdiv=document.getElementById("days");
const hoursdiv=document.getElementById("hours");
const minutesdiv=document.getElementById("minutes");
const secondsdiv=document.getElementById("seconds");

function countdown(){

const newyearday=new Date(newyear);
const currentday= new Date();
const totaltime=(newyearday-currentday)/1000;

const days =Math.floor(totaltime/3600/24);
const hours=Math.floor(totaltime/3600%24);
const minutes =Math.floor((totaltime/60)%60);
const seconds =Math.floor(totaltime%60);

console.log(days);
daysdiv.innerHTML=days;
hoursdiv.innerHTML=hours;
minutesdiv.innerHTML=minutes;
secondsdiv.innerHTML=seconds;
}
countdown();
setInterval(countdown,1000);
