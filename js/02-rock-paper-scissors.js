/*eslint-env browser */

function rock_paper_scissors_game() {
    "use strict";
    var playAgain ="y";
    while(playAgain === "y"){

        // collect users choice
        var userChoice = window.prompt("What do you want to choose: rock, paper or scissors?");

        // Collect Computers choice..
        var computerChoice = Math.floor(Math.random() * 10);
        if (computerChoice <= 3) {
            computerChoice = "rock";
        } 
        else if(computerChoice > 3 && computerChoice <= 6) {
            computerChoice = "paper";
        } else if(computerChoice > 6 && computerChoice <= 10) {
            computerChoice = "scissors";
        }
        
        //playing game..
        if(userChoice === "rock" || userChoice === "scissors" || userChoice === "paper" ){

            // Comparing choices 
            if (userChoice === computerChoice){
                window.alert("It was a tie! What are the odds!! Try Again.");
                continue;
            }

            if(userChoice === "rock") {
                if(computerChoice === "scissors") {
                    window.alert("Rock destroys scissors. You Won!");
                } 
                else if(computerChoice === "paper"){
                    window.alert("Paper covers rock. You Loose!");
                }
                return;
            }
            else if(userChoice === "scissors") {
                if(computerChoice === "paper") {
                    window.alert("Scissors cut paper. You Won!");
                } 
                else if(computerChoice === "rock") {
                    window.alert("Rock destroys scissors. You Loose!");
                }
                return;
            }
            else if(userChoice === "paper") {
                if(computerChoice === "rock") {
                    window.alert("Paper covers rock. You Won!");
                } 
                else if(computerChoice === "scissors") {
                    window.alert("Scissors cut paper. You Loose!");
                }
                return;
            }
        }
        else if(userChoice === "") {
            window.alert("You did not choose anything");
        }
        else{
            window.alert(userChoice + " is not a valid choice");
        }

        playAgain = window.prompt("Would you like to play again? (y/n)");
        if(playAgain !== "y" && playAgain !== "n" ){
            window.alert(playAgain + " is not a valid input. Assuming you dont want to play with me. Exiting the game.");
        }
    }
}

function main(){
    "use strict";
    rock_paper_scissors_game();
    window.alert("Thanks for playing");
}
main();
