const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];

const handleClick = (ev) => {
  const userChoice = ev.target.innerHTML;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  getResults(userChoice, computerChoice);
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML =
        "You chose " +
        userChoice +
        " and the computer chose " +
        computerChoice +
        " , YOU WIN!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML =
        "You chose " +
        userChoice +
        " and the computer chose " +
        computerChoice +
        " , YOU LOSE!";
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML =
        "You chose " +
        userChoice +
        " and the computer chose " +
        computerChoice +
        " , IT'S A DRAW!";
      break;
  }
};
