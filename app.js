const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];

// make global var
let userChoice;
let computerChoice;

const handleClick = (ev) => {
  userChoice = ev.target.id;
  userChoiceDisplay.innerHTML = "User choice: " + userChoice;
  generateComputerChoice();
  getResults();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = "Computer choice: " + computerChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

const getResults = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "YOU WIN!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "YOU LOSE!";
      break;
    case "paperspaper":
    case "scissorscissors":
    case "rockrock":
      resultDisplay.innerHTML = "IT'S A DRAW!";
      break;
  }
};
