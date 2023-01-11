const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

document.addEventListener("keydown", function (event) {
  var name = event.key;
  var audio = new Audio(buttonSounds[name]);
  audio.play();
  buttonAnimation(name);
});

function handleClick() {
  var name = this.innerHTML;
  var audio = new Audio(buttonSounds[name]);
  audio.play();
  buttonAnimation(name);
}

const buttonSounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
