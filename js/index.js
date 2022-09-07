var a=Math.random();
a=a*6;
a=Math.floor(a);
a=a+1;
var b=Math.random();
b=b*6;
b=Math.floor(b);
b=b+1;
let h1element=document.querySelector(".instruction");
let element1=document.querySelector(".dice .outer .inner .box .p1 .line1");
let element2=document.querySelector(".dice .outer .inner .box .p1 .line2");
let element3=document.querySelector(".dice .outer .inner .box .p1 .line3");
let element11=document.querySelector(".dice .outer .inner .box .p2 .line1");
let element22=document.querySelector(".dice .outer .inner .box .p2 .line2");
let element33=document.querySelector(".dice .outer .inner .box .p2 .line3");
if(a==1){
    element1.style.visibility="hidden";
    element3.style.visibility="hidden";
    element2.innerHTML=" <div class='rounds1'></div>";
}
if(a==2){
    element1.style.visibility="hidden";
    element3.style.visibility="hidden";
}
if(a==3){
    let element4=document.querySelector(".dice .outer .inner .box .p1 .line3 .rounds1");
    let element5=document.querySelector(".dice .outer .inner .box .p1 .line1 .rounds2");
    element4.style.visibility="hidden";
    element5.style.visibility="hidden";
    element2.innerHTML=" <div class='rounds1'></div>";
   
}
if(a==4){
    element2.style.visibility="hidden";
}
if(a==5){
    element2.innerHTML=" <div class='rounds1'></div>";
}
if(b==1){
    element11.style.visibility="hidden";
    element33.style.visibility="hidden";
    element22.innerHTML=" <div class='rounds1'></div>";
}
if(b==2){
    element11.style.visibility="hidden";
    element33.style.visibility="hidden";
}
if(b==3){
    let element44=document.querySelector(".dice .outer .inner .box .p2 .line3 .rounds1");
    let element55=document.querySelector(".dice .outer .inner .box .p2 .line1 .rounds2");
    element44.style.visibility="hidden";
    element55.style.visibility="hidden";
    element22.innerHTML=" <div class='rounds1'></div>";
   
}
if(b==4){
    element22.style.visibility="hidden";
}
if(b==5){
    element22.innerHTML=" <div class='rounds1'></div>";
}

if(a>b){
    h1element.innerHTML="🎈player 1 wins";
}
if(a<b){
    h1element.innerHTML="🎈player 2 wins";
}
if(a==b){
    h1element.innerHTML="😐its a tie";
}


