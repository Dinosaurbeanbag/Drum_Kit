
//detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//for statement that loops through the drum buttons based on the html assigned in each button.
for (var i = 0; i< numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); //sends to function 'makeSound'

    buttonAnimation(buttonInnerHTML);
  });
  }

  //detecting key press - event listener 'listens' for when a key is pressed and triggers the function based on the event.

  document.addEventListener("keydown", function(event){

    makeSound(event.key /* key tells us which keyboard key was pressed*/); //sends to function 'makeSound' where the audio file will be assigned
    buttonAnimation(event.key);

  });


//function to assign sounds to letters
function makeSound(key) {

//switch that will look for the case, assign the audio file to it and then play it.
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "k":
    var tom3 = new Audio ("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    default: //if none of the other cases are met
    console.log(buttonInnerHTML);

  }

}

function buttonAnimation (currentKey){
  var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}
