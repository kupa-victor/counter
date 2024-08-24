const Decrease = document.getElementById("BtnDecrease");
const BtnIncrease = document.getElementById("BtnIncrease");
const BtnReset = document.getElementById("BtnReset");
const myLabel = document.getElementById("myLabel");
let counter = 0;

Decrease.onclick = function(){
    counter--;
    myLabel.textContent = counter;
}
BtnIncrease.onclick = function(){
    counter++;
    myLabel.textContent = counter;
}
BtnReset.onclick = function(){
    counter = 0;
    myLabel.textContent = counter;
}

