//! ELEMENTS
const timeElm = document.querySelector("[data-time]");
// buttons
const buttonsElm = document.querySelectorAll("[data-button]");
// laps container
const lapContainerElm = document.querySelector("[data-laps]");

//! VARIABLES
let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
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

//? Watch Funtions
// starts the watch
const startWatch = () => {
  msec++;
  checkTime();
  changeTime();
};

// changes the time in document
const changeTime = () => {
  timeElm.innerHTML = `${hr < 10 ? `0${hr}` : `${hr}`}:${
    min < 10 ? `0${min}` : `${min}`
  }:${sec < 10 ? `0${sec}` : `${sec}`}:${msec < 10 ? `0${msec}` : `${msec}`}`;
};
// checks the time for change
const checkTime = () => {
  if (msec / 100 === 1) {
    msec = 0;
    sec++;
    if (sec / 60 === 1) {
      sec = 0;
      min++;
      if (min / 60 === 1) {
        min = 0;
        hr++;
      }
    }
  }
  return;
};

//? Buttons Functions
// start function function when user clicks start
const start = () => {
  disableButton("start");
  enableButtons("start");
  hideButton("start");
  showButton("pause");
  if (running) return;
  running = true;
  interval = setInterval(startWatch, 10);
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
  switch (e.composedPath()[0].dataset.button) {
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
