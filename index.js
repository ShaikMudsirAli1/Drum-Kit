alert("Welcome to Drum-Kit 🥁🥁🥁!");

/* USING_THE_addEventListener()-METHOD_ ATTACHES_AN_EVENT_HANDLER_TO_A_document.
   ACTION_PERFORMED_USING_MOUSE_CLICK  */

//Detechting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    /*THIS_KEYWORD_TARGET_COMPLETE_CLASS = ".drum" */
    this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    /*SWITCH_ACT_AS_IF_DEFAULT_ACT_AS_ELSE
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var Kick = new Audio("sounds/kick.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }*/
  });
}

//Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(Key) {
  /*SWITCH_ACT_AS_IF_DEFAULT_ACT_AS_ELSE*/
  switch (Key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var Kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
