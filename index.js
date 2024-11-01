function rollDice(){
    var randomNumber1=Math.floor((Math.random()*6)+1);

var randomNumber2=Math.floor((Math.random()*6)+1);

document.querySelector(".left img").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".right img").setAttribute("src","./images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1🚩 Won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2🚩 Won";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW";
}
}

document.querySelector("h1").addEventListener("click", rollDice);


