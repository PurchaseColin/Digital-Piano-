// The document DOM is the owner of all the elements on your webpage
const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("tunes");
//by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based in key pressed
  audio.play(); // playing audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
  // calling playTune function with passing data key as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value; //passing the range slider value as an audio volume
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
