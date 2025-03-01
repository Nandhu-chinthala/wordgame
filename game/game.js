// Word options for different levels
const words = {
    easy: ["bed",,"top", "dog", "bat", "sun", "hat","elephant","hand","hat"],
    medium: ["table", "chair", "bread", "plant", "house","home","chair","loptop","window","door"],
    hard: ["elephant", "umbrella", "computer", "chocolate", "developer","software","hardware","insitute","fullstack"]
};

let currentWord = "";
let shuffledWord = "";


// Function to shuffle the word
function shuffleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

// Function to start the game
function startGame(level) {
    let wordList = words[level];
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    shuffledWord = shuffleWord(currentWord);

    document.getElementById("shuffled-word").textContent = shuffledWord;
    document.getElementById("user-input").value = "";
    document.getElementById("result").textContent = "";
}

// Function to check user input
function checkWord() {
    let userWord = document.getElementById("user-input").value.toLowerCase();
    let resultDisplay = document.getElementById("result");

    if (userWord === currentWord) {
        resultDisplay.textContent = "✅ Correct! Well done!";
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = "❌ Wrong! Try again.";
        resultDisplay.style.color = "red";
    }
   
}
function nextWord() {
    startGame(currentLevel);
}

// Event listener for level change
document.getElementById("level").addEventListener("change", function() {
    startGame(this.value);
});

// Start game on page load with default level
window.onload = function() {
    startGame(document.getElementById("level").value);
};
