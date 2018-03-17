var colors = randomColorGenerator(6);


var squares = document.querySelectorAll(".sqaure");
var message = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplayed");
var Allhi = document.querySelector("h1");
var pickedColor = pickColor();

var resetColor = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;


resetColor.addEventListener("click", function(){
colors = randomColorGenerator(6);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
}
h1.style.background = "#232323";
});


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorGenerator(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){ 
		var clickedColor=this.style.backgroundColor;

		if(clickedColor === pickedColor){
			alert("Right Guessed!")
			message.textContent = "Correct!";
			changeColors(clickedColor);
			Allhi.style.backgroundColor = clickedColor;
		}
		else{
			this.style.background = "#232323";
			message.textContent = "Try Again!";
		}

	});


function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

}	