const resultElement = document.querySelector("#js_result");
const diceButton = document.querySelector("#launch-btn");
const playerDiceElement = document.querySelector("#player-dice");
const computerDiceElement = document.querySelector("#computer-dice");
let winner;

resultElement.classList.add("d-none");

diceButton.addEventListener("click", function () {
  const computerDice = Math.floor(Math.random() * 6) + 1;
  const playerDice = Math.floor(Math.random() * 6) + 1;

  if (computerDice > playerDice) {
    winner = "Ha vinto il computer! 😭";
  } else if (computerDice < playerDice) {
    winner = "Hai vinto! 😎";
  } else {
    winner = "Patta! 🤨";
  }

  computerDiceElement.innerHTML = `
  <h2 class="dice-label text-danger">Computer</h2>
  <i class="bi bi-dice-${computerDice}-fill text-danger">
  `;
  playerDiceElement.innerHTML = `
  <h2 class="dice-label text-primary">Player</h2>
  <i class="bi bi-dice-${playerDice}-fill text-primary">
  `;
  resultElement.innerText = winner;
  resultElement.classList.remove("d-none");
});
