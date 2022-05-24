//! ELEMENTS
const timeElm = document.querySelector("[data-time]");
// buttons
const buttonsElm = document.querySelectorAll("[data-button]");
// laps container
const lapContainerElm = document.querySelector("[data-laps]");

//! VARIABLES
let msecs = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let running = false;
let windowInterval = null;

//! FUNCTIONS
//? Uitilites Funtions
// hides the button sent in argument
const hideButton = (buttonName) => {
  buttonsElm.forEach((button) => {
    if (button.dataset.button === buttonName) button.classList.add("hidden");
    return;
  });
};
// shows the button sent in argument
const showButton = (buttonName) => {
  buttonsElm.forEach((button) => {
    if (button.dataset.button === buttonName) button.classList.remove("hidden");
    return;
  });
};
// disables the button sent in argument
const disableButton = (buttonName) => {
  buttonsElm.forEach((button) => {
    if (button.dataset.button === buttonName) button.disabled = true;
    return;
  });
};
// enables all buttons other than the one sent
const enableButtons = (buttonName) => {
  buttonsElm.forEach((button) => {
    if (button.dataset.button === buttonName) return;
    button.disabled = false;
    return;
  });
};
// start function function when user clicks start
const start = () => {
  disableButton("start");
  enableButtons("start");
  hideButton("start");
  showButton("pause");
};
// stop function function when user clicks stop
const stop = () => {
  disableButton("stop");
  enableButtons("stop");
};
// reset function function when user clicks reset
const reset = () => {
  disableButton("reset");
  enableButtons("reset");
};
// pause function function when user clicks pause
const pause = () => {
  disableButton("pause");
  enableButtons("pause");
  hideButton("pause");
  showButton("start");
};
// lap function function when user clicks lap
const lap = () => {
  disableButton("lap");
  enableButtons("lap");
};

// button click handler function
const buttonClickHandler = (e) => {
  switch (e.path[0].dataset.button) {
    case "start":
      start();
      break;
    case "stop":
      stop();
      break;
    case "reset":
      reset();
      break;
    case "pause":
      pause();
      break;
    case "lap":
      lap();
      break;
    default:
      break;
  }
};

//? Initialization Function
const Initialize = () => {
  buttonsElm.forEach((button) => {
    button.addEventListener("click", buttonClickHandler);
  });
};

Initialize();
