var colors = [];
var pickedColor;

 // todo
 // select squeres in html
 var squares = document.querySelectorAll(".square");
 // -end
 var colorDisplay = document.querySelector("#color-display");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");

 // todo
 // select reset button
 var resetButton = document.getElementById("reset");
 // -end

 // todo
 // how to start this game? :)
 // here :::::::::
 // hint: just a funtion call to begin the game
 // another hint ↓
 // -end
init();
 function init() {
   colorDisplay.textContent = pickedColor;
   setupSquares();
   reset();
 }

 resetButton.addEventListener("click", function () {
   // todo
   reset();
   // -end
 });

 function setupSquares() {
   for (var i = 0; i < squares.length; i++) {
     squares[i].style.backgroundColor = colors[i];
     squares[i].addEventListener("click", function () {
       var clickedColor = this.style.backgroundColor;
       // todo
       //  if the clicked color was picked color,
       if(clickedColor == pickedColor){
        messageDisplay.textContent = "you goddamn right!";
        resetButton.textContent = "Play Again";

       }
       else {
        this.style.backgroundColor = "#232323" ;
        messageDisplay.textContent =  "Come on!";
        
       }
       /*
 		messageDisplay inner text = "you goddamn right!"
 		resetButton innet text =  "Play Again"
 		call another round :D
    		*/

       //  else
       /*
 		backdround of this clicked color turn to #232323
 		messageDisplay inner text = "Come on!"
    		*/
       // -end
     });
   }
 }

 function reset() {
   colors = genRandomColors();
   pickedColor = chooseColor();
   colorDisplay.textContent = pickedColor;
   h1.style.backgroundColor = "#2C8E99";
   resetButton.textContent = "New Colors";
   messageDisplay.textContent = "";
   for (var i = 0; i < squares.length; i++) {
     if (colors[i]) {
       squares[i].style.display = "block";
       squares[i].style.backgroundColor = colors[i];
     } else {
       squares[i].style.display = "none";
     }
   }
 }

 function changeColors(color) {
   for (var i = 0; i < squares.length; i++) {
     squares[i].style.backgroundColor = color;
     h1.style.backgroundColor = color;
   }
 }

 function chooseColor() {
   // todo
   //  choose a random number between 0 to 5
   var random = Math.floor(Math.random()*5);
   // -end
   return colors[random];
 }

 function genRandomColors() {
   var arr = [];
   // todo
   for(var i=0; i<6 ; i++) {
    arr.push(makeColor());
   }
   //  return an array of six(6) random colors
   // hint: makeColor returns a random color
   // -end
   return arr;
 }

 function makeColor() {
   // todo
   // select random numbers for r, g, b
   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);
   // -end

   return "rgb(" + r + ", " + g + ", " + b + ")";
 }