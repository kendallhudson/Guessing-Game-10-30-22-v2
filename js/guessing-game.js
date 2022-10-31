/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

let winningNumber = Math.floor(Math.random() * 100) + 1;
let guessArr = [];
let guessCount = 0;

function generateWinningNumber(){
    console.log(winningNumber);
    return winningNumber;
}

generateWinningNumber();

// SUCCESSFUL - ADD NEW GUESSES TO PREVIOUS GUESS LIST
function myGuesses() {
    let myNewGuess = document.getElementById("guess").value;
    let myNewPTag = document.createElement("li");
    let myNum = document.createTextNode(myNewGuess);
    myNewPTag.setAttribute("id", "newNumOnList");
    myNewPTag.appendChild(myNum);
    document.getElementById("middle-container-2").appendChild(myNewPTag);
    // CLEAR INPUT FIELD
    document.getElementById("guess").value = "";
    // GRAB AND VIEW NEW GUESS ON LIST AND ADD TO ARRAY
    guessArr.push(myNewGuess);
    console.log(guessArr);
    // INCREASE GUESS COUNT
    guessCount++;
    // CHECK GUESSES
    // LOOP TO CHECK FOR WINNING NUMBER
    for(let i = 0; i < guessArr.length; i++) {
        if(Number(guessArr[i]) === winningNumber) {
            alert("You win!");
        document.getElementById("submit-btn").disabled = true;
        }
    }
    // LOOP TO GIVE APPROPRIATE HINT
    for(let i = 0; i < guessArr.length; i++) {
        if(Number(guessArr[i]) < winningNumber) {
        document.getElementById("hint").innerText = "Not quite! Guess again, try going higher...";
        } else if (Number(guessArr[i]) > winningNumber) {
            document.getElementById("hint").innerText = "Not quite! Guess again, try going lower...";
        }
    }
    if(guessCount === 5) {
        alert("Game Over! The Winning Number was: " + winningNumber);
        document.getElementById("submit-btn").disabled = true;
    }
}

// EXECUTES THE FUNCTION ON BUTTON CLICK
document.getElementById("submit-btn").addEventListener("click", myGuesses);
