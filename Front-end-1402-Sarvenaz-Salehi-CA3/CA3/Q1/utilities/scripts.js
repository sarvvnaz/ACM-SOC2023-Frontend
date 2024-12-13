

var regex = "^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
const colorInput = document.getElementsByClassName("color-input")[0];

colorInput.onkeyup = changeBoxColor;

function changeBoxColor() {
        var colorBox = document.getElementsByClassName("color-box")[0];
        if (colorInput.value.match(regex)){
            colorBox.style.background = '#'+ colorInput.value;
            console.log("string is hex")
        }
        else{
            colorBox.style.background = "#000000";
            console.log("string is not hex")
        }
    }


