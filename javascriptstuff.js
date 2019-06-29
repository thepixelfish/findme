var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function rpgText() {
  if (i < txt.length) {
    document.getElementById("textEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
