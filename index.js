// Random Number Generator and console log
var randomNumber1=Math.floor(Math.random() * 6) + 1;
console.log("Random number for Player 1: " + randomNumber1);

var randomNumber2=Math.floor(Math.random() * 6) + 1;
console.log("Random number for Player 1: " + randomNumber2);


//changing the image with random number
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


//Changing the text accordingly
if(randomNumber1 === randomNumber2)
	document.querySelector("h1").innerHTML="Its a DRAW!!!";
else if(randomNumber1 > randomNumber2)
	document.querySelector("h1").innerHTML="🚩 Player 1 wins";
else
	document.querySelector("h1").innerHTML="Player 2 wins 🚩";
	