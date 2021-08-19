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