var secret = 7;
var secret = Math.floor(Math.random() * 10) + 1;
//var answer;
var startButton = document.getElementById("ClickMe");
startButton.addEventListener("click", askQuestion);

function askQuestion() {
    var answer = "";
    while (answer !== secret) {
        answer = parseInt(prompt("Please guess a number between 1 and 10"));

        if (answer < secret) {
            alert("Incorrect! Your guess is not high enough.");
            //document.write("Incorrect! Your guess is too low.");
        } else if (answer > secret) {
            alert("Incorrect! Your guess is not low enough.");
            //document.write("Incorrect! Your guess is too high.");
        } else {
            correct_answer_found();
        }
    }
}

function correct_answer_found() {
    document.write("Correct! you have guessed the correct answer.");
}