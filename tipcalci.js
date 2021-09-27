function update(){


let bill=Number(document.getElementById('yourbill').value);
let tippercent =document.getElementById('tipinput').value;
let split = document.getElementById('splitinput').value;
let totalwithtip = document.getElementById('totalwithtip').value;
let billeach = document.getElementById('billeach').value;
console.log({bill,tippercent,split});







let tipvalue =bill*(tippercent/100);
let tipeach =tipvalue/split;
let newbilleach=(bill+tipvalue)/split;
let total=tipvalue+bill;
console.log(newbilleach);

document.getElementById("tippercent").innerHTML=tippercent+"%";
document.getElementById("tipvalue").innerHTML="Rs."+tipvalue;
document.getElementById("tipeach").innerHTML="Rs."+tipeach;
document.getElementById("totalwithtip").innerHTML="Rs."+total;
document.getElementById("billeach").innerHTML="Rs."+newbilleach;
}

let container=document.getElementById('container');
container.addEventListener("input",update);