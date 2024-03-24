import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Enter any number :",
    },
]);
// conditional check
if (randomNumber === answer.guessedNumber) {
    console.log("Congratulations! You have guessed the right number .");
}
else {
    console.log("Please try again you have guessed wrong number.");
}
