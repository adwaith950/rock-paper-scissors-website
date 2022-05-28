let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  if(letter === 's') return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.style.color = "green";
  result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(computer). You win! Pick any one to continue.`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.style.color = "red";
  result_p.innerHTML = `${convertToWord(userChoice)}(user) does not beat ${convertToWord(computerChoice)}(computer). You lose! Pick any one to continue.`;
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.style.color = "yellow";
  result_p.innerHTML = `${convertToWord(userChoice)}(user) equalizes to ${convertToWord(computerChoice)}(computer). It is a draw! Pick any one to continue.`;
}

function choose(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {

    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;

    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;

    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener('click', function() {
    choose('r');
  })
  paper_div.addEventListener('click', function() {
    choose('p');
  })
  scissors_div.addEventListener('click', function() {
    choose('s');
  })
}

main();
