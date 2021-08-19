function yellowColor() {
    document.body.style.backgroundColor = 'yellow';
}
function blueColor() {
    document.body.style.backgroundColor = 'blue';
}

function skyColor() {
    document.body.style.backgroundColor = 'skyblue';
}
const pinkbutton = document.getElementById('make-pink-button');
console.log(pinkbutton);
pinkbutton.onclick = pinkColor;

function pinkColor() {
    document.body.style.backgroundColor = 'pink';
}
const grayButton = document.getElementById('make-gray-button');
console.log(grayButton);
grayButton.onclick = grayColor;

function grayColor() {
    document.body.style.backgroundColor = "gray";
}

const magentaColor = document.getElementById('make-magenta-button');
console.log(magentaColor);
magentaColor.onclick = mmagenta;

function mmagenta() {
    document.body.style.backgroundColor = "magenta"
}

const greenButton = document.getElementById('make-green-button');
console.log(greenButton);
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// handle by using add evenlistener
const darkRed = document.getElementById('make-darkRed');
darkRed.addEventListener('click', darkRedButton);
function darkRedButton() {
    document.body.style.backgroundColor = 'darkRed';
}

const greenyellow = document.getElementById('make-GreenYellow');
greenyellow.addEventListener('click', green0);
function green0() {
    document.body.style.backgroundColor = 'GreenYellow';
}

// handle evenlistener 
const oliveButton = document.getElementById('make-Olive-button');
oliveButton.addEventListener('click', function olive8() {
    document.body.style.backgroundColor = "Olive"
})

// direct shortcut 
document.getElementById('make-NavajoWhite').addEventListener('click', function fd() {
    document.body.style.backgroundColor = "NavajoWhite";
})