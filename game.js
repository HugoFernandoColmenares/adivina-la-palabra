// choose a word to guess
const words = ["paloma", "perro", "gato", "conejo", "tortuga"];

// choose a random word from the array
const word = words[Math.floor(Math.random() * words.length)];

// get references to the input field and submit button
const input = document.querySelector("#guess");
const submit = document.querySelector("#submit");

// create an event listener for the submit button
submit.addEventListener("click", function () {
    // get the player's guess
    const guess = input.value.toLowerCase();

    // check if the guess is correct
    if (guess === word) {
        // update the result element with a message saying the guess was correct
        document.querySelector("#result").textContent = "Correct!";
    } else {
        // create an empty string to store the matching letters
        let matchingLetters = "";

        // loop through each letter of the guess and the word
        for (let i = 0; i < guess.length; i++) {
            // if the letters match, add the letter to the matching letters string
            if (guess[i] === word[i]) {
                matchingLetters += guess[i];
            } else {
                // if the letters don't match, add an underscore to the matching letters string
                matchingLetters += "_";
            }
        }
        // update the result element with a message showing the matching letters
        document.querySelector("#result").textContent = `Incorrect, try again. Matching letters: ${matchingLetters}`;
    }
});