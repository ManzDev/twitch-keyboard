const infoDiv = document.querySelector(".info");
const sounds = [
  new Audio("key1.mp3"),
  new Audio("key2.mp3")
];

const keyPlay = () => {
  const n = Math.random() * 1;
  const i = n > 0.96 ? 1 : ~~n;
  sounds[i].currentTime = 0;
  sounds[i].play();
};

addEventListener("keydown", (ev) => {
  const key = ev.code.toLowerCase();
  const keyDiv = document.querySelector(`#${key}`) ?? null;

  // (American keyboard: disable ñ, etc...)
  if (!keyDiv) { return; }

  if (key === "f4") {
    document.querySelector(".keyboard").classList.toggle("led");
  }

  if ((key === "numlock") || (key === "capslock") || (key === "scrolllock")) {
    const ledDiv = document.querySelector(`.led.${key}`);
    ledDiv.classList.toggle("on");
  }

  // Pressed key
  keyDiv.classList.add("pressed");
  keyPlay();
  infoDiv.textContent = `Se ha pulsado la tecla '${key}' ${ev.key} (${ev.keyCode})`;
});

addEventListener("keyup", (ev) => {
  const key = ev.code.toLowerCase();
  const keyDiv = document.querySelector(`#${key}`) ?? null;

  // (American keyboard: disable ñ, etc...)
  if (!keyDiv) { return; }

  keyDiv.classList.remove("pressed");
});
