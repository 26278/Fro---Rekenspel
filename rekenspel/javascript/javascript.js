const wrapper = document.getElementById("wrapper");
const assignment = document.getElementById("assignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const scoreboard = document.getElementById("scoreboard");

var aantalGames = 0;
var aantalGoed = 0;
var aantalFout = 0;
let mySum;
let sound = new Audio();

function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + "*" + b;
  sumDisplay = a + " x " + b;
  assignment.innerHTML = sumDisplay;
  scoreboard.innerHTML = "Aantal sommen: " + aantalGames + 
  "<br>" + "Aantal goed: " + aantalGoed + 
  "<br>" + "Aantal fout: " + aantalFout;
  myAnswer.focus();
};

function keyPressed(evt) {
  if (evt.keyCode == 13) {

    if (eval(mySum) == myAnswer.value) {
      aantalGoed++;
      aantalGames++;
      feedback.src="content/positief.jpg";
      feedback.className = "goed";
      sound.src="content/true.mp3";
      sound.play();
    }
    else {
      aantalGames++;
      aantalFout++;
      feedback.src="content/horror.jpg";
      feedback.className = "fout";
      sound.src="content/false.mp3";
      sound.play();
    }
    window.setTimeout(waiting, 2000);
  }

};

function waiting() {
feedback.src="content/feedback.png";
feedback.className = "";
myAnswer.value="";
makeSum();
};

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);
