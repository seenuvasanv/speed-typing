const randomWords = [
  "half",
  "vest",
  "polite",
  "form",
  "decorous",
  "wrench",
  "rapid",
  "woman",
  "sofa",
  "call",
  "lie",
  "fire",
  "direful",
  "joke",
  "chief",
  "stone",
  "nation",
  "imported",
  "attack",
  "rub",
  "leg",
  "roasted",
  "value",
  "handsome",
  "popcorn",
  "hurried",
  "overconfident",
  "meeting",
  "neighborly",
  "brick",
  "lovely",
  "birthday",
  "error",
  "blind",
  "wild",
  "hate",
  "tawdry",
  "behavior",
  "ill",
  "summer",
  "nose",
  "broken",
  "third",
  "rotten",
  "long",
  "save",
  "heavy",
  "gusty",
  "imaginary",
  "expert",
  "wail",
  "painstaking",
  "desk",
  "pink",
  "vacation",
  "license",
  "shoes",
  "door",
  "clam",
  "nondescript",
  "zephyr",
  "grateful",
  "water",
  "statement",
  "ignorant",
  "party",
  "yoke",
  "crabby",
  "apparel",
  "jog",
  "pointless",
  "record",
  "scissors",
  "name",
  "end",
  "admit",
  "attempt",
  "hook",
  "space",
  "steer",
  "unequaled",
  "deranged",
  "boorish",
  "stir",
  "condemned",
  "transport",
  "jewel",
  "form",
  "fire",
  "comb",
  "gather",
  "unlock",
  "beam",
  "honey",
  "rob",
  "fearful",
  "man",
  "cruel",
  "dress",
  "breath"
];

const time = 5,
  seconds = document.querySelector("#seconds"),
  word = document.querySelector("#word"),
  typeWord = document.querySelector("#type-word"),
  reset = document.querySelector("#reset"),
  gameOver = document.querySelector("#game-over"),
  corrctAnswer = document.querySelector("#correct-answer"),
  scoreBoard = document.querySelector("#score-board");
let isPlaying = false,
  randomWord = "",
  score = 0,
  timeInterval,
  timeLeft;

const setRandomWord = function() {
  let randomNumber = Math.floor(Math.random() * 100);
  word.textContent = randomWords[randomNumber];
  randomWord = randomWords[randomNumber];
};

const init = function() {
  seconds.textContent = time;
  scoreBoard.textContent = score;
  score = 0;
  scoreBoard.textContent = score;
  isPlaying = false;
  typeWord.value = "";
  gameOver.style.display = "none";
  corrctAnswer.style.display = "none";
  setRandomWord();
  timeLeft = time;
};

const checkForValidation = function() {
  let valid = false;
  if (randomWord === typeWord.value) {
    valid = true;
  }
  return valid;
};

const updateScore = function() {
  seconds.textContent = time;
  score += 1;
  scoreBoard.textContent = score;
  typeWord.value = "";
  gameOver.style.display = "none";
  corrctAnswer.style.display = "inline";
  setRandomWord();
  timeLeft = 5;
  isPlaying = false;
};

const stopGame = function() {
  corrctAnswer.style.display = "none";
  gameOver.style.display = "block";
};

const startGame = function(e) {
  if (!isPlaying) {
    isPlaying = true;
    gameOver.style.display = "none";
    corrctAnswer.style.display = "none";
    timeInterval = setInterval(() => {
      timeLeft -= 1;
      seconds.textContent = timeLeft;
      if (checkForValidation()) {
        clearInterval(timeInterval);
        updateScore();
      } else if (!timeLeft) {
        clearInterval(timeInterval);
        stopGame();
      }
    }, 1000);
  } else {
    if (checkForValidation()) {
      clearInterval(timeInterval);
      updateScore();
    }
  }
};

init();

typeWord.addEventListener("keypress", startGame);
reset.addEventListener("click", init);
