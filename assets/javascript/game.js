// VARIABLES
// ==========================================================================

//An array with a list of letters
var deepBlue = ["a", "z", "g", "h", "k", "w", "c", "d"];

//Need a Wins variable
var wins = 0;

//Need a Losses variable
var losses = 0;

//Need a Guesses Left variable
var guesses = 9;


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("loss");
var guessesText = document.getElementById("guessLeft");

document.onkeyup = function (event) {
    var userChoice = event.key;

    var deepBlueGuess = deepBlue[Math.floor(Math.random() * deepBlue.length)];
}

// FUNCTIONS
// ==============================================================================

//Random test - this function works, can see random letter displayed in console. Just no display
// on page yet

//function deepBlueGuess(deepBlue) {
    //return deepBlue[Math.floor(Math.random() * deepBlue.length)];

//}
//console.log(deepBlueGuess(deepBlue));



//Need a guesses so far variable, which shows the letter you have typed
//

//So the computer is going to have the Array of Letters, so that will be an Array will be 
//Randomized

//So once you get to the last guess and get to 0, everything gets resets and your Losses
//increase by 1 and the Guesses left resets back to 9. And the computer picks a new letter.

//when you guess right, your Wins go up by 1






//Need a function to display # of times user has guessed correctly
//Need a function to display the # Guesses left, so we can set it like it is in the video, 
//so 9 guesses is the top limit, then each guess is -1, so this might be a for loop

//Need to search for a function that randomly chooses an element from an array

//I could create an alert if a user picks a key other than a letter


// MAIN PROCESS
// ==============================================================================