var cookieCount = 0;
var clickValue = 1;
var autoClick = 0;

function update(){
    document.getElementById('text').value = cookieCount;
    document.getElementById('texttwo').value = autoClick;
    document.getElementById('textthree').value = clickValue;
}
function timer(){
    cookieCount += autoClick;
    update()
}
setInterval(timer,1000)
function add(){
    cookieCount += clickValue;
    document.getElementById('text').value = cookieCount;
}
function buyOne(){
   if(cookieCount >= 10){
   clickValue +=1;
   cookieCount -=10;
   document.getElementById('text').value = cookieCount;
    }
}
function buyTwo(){
    if(cookieCount >=50){
   clickValue +=2;
   cookieCount -=50;
   document.getElementById('text').value = cookieCount;
    }
}
function buyFive(){
    if(cookieCount >= 100){
    clickValue +=5;
    cookieCount -=100;
    document.getElementById('text').value = cookieCount;
    }
 }
 function autoClickerOne(){
    if(cookieCount >= 100){
    autoClick +=1;
    cookieCount -=100;
    document.getElementById('text').value = cookieCount;
    }
 }
 function autoClickerTwo(){
    if(cookieCount >= 250){
    autoClick +=2;
    cookieCount -=250;
    document.getElementById('text').value = cookieCount;
    }
 }
 function autoClickerThree(){
    if(cookieCount >= 500){
    autoClick +=3;
    cookieCount -=500;
    document.getElementById('text').value = cookieCount;
    }
 }
 function test(){
    cookieCount +=500;
    document.getElementById('text').value = cookieCount;
 }

