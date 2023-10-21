const letras = ["a", "b", "c", "d", "e", "f", "a", "b", "c"];
let colorHex = "";
let numeroRandom;
let randomizer;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  getRandomNumber();

  document.body.style.backgroundColor = (`#${colorHex}`);
  color.textContent = (`#${colorHex}`);
  colorHex = "";
});

function getRandomNumber() {
  for (let i = 0; i < 6; i++) {
    numeroRandom = Math.floor(Math.random()*9);
    randomizer = Math.floor(Math.random()*2);
    console.log(randomizer)

    if (randomizer === 1) {
      colorHex += numeroRandom;
    } else if (randomizer === 0) {
      colorHex += letras[numeroRandom];
    }
  }
}
