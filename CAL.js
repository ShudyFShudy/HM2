var buttonPlus = document.getElementById ("buttonPlus");
var buttonMinus = document.getElementById ("buttonMinus");
var buttonMultiphy = document.getElementById ("buttonMultiphy");
var buttonDivide = document.getElementById ("buttonDevide");

function onButtonPlusClick() {
    console.log("onButtonPlusClick")
}
function onButtonMinusClick() {
    console.log("onButtonMinusClick")
}
function onButtonMultiphyClick() {
    console.log("onButtonMultiphyClick")
}
function onButtonDivideClick() {
    console.log("onButtonDivideClick")
}

buttonPlus.addEventListener("click", onButtonPlusClick)
buttonMinus.addEventListener("click", onButtonMinusClick)
buttonMultiphy.addEventListener("click", onButtonMultiphyClick)
buttonDivide.addEventListener("click", onButtonDivideClick)