
/*File: app.js
Author: Józsa Márk
Copyright: 2024, Józsa Márk
Group: Szoft V
Date: 2024-03-07
Github: https://github.com/mark200023k3r234j234/
Licenc: GNU GPL
*/
 

const aside=document.querySelector("#a")
const bside=document.querySelector("#b")
const cside=document.querySelector("#c")
const dside=document.querySelector("#d")
const resultInput=document.querySelector("#result")
calcbutton.addEventListener('click',()=>{
startCal();
});

function startCal(){
const a=Number(aside.value)
const b=Number(bside.value)
const c=Number(cside.value)
const d=Number(dside.value)
const result=calcValue(a,b,c,d)
console.log(a,b,c,d,(result))
}


function calcValue(a,b,c,d){
const felkerulet=(a+b+c+d)/2
return Math.sqrt((felkerulet-a)*(felkerulet-b)*(felkerulet-c)*(felkerulet-d))
}

//felkerulet =s el szóval az s helyett felkerulet a valtozo ertekem azzal szamolom ki a teruletet.
