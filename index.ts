#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
  { message: "Enter your first number: ", type: "number", name: "firstNumber" },
  {
    message: "Enter your second number: ",
    type: "number",
    name: "secondNumber"
  },
  {
    message: "Choose one operator from the following: ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Division", "Multiplication"]
  },
]);
if (answers.operator==="Addition"){
  console.log("Your answer is: ");
  console.log(answers.firstNumber+answers.secondNumber);
}
else if (answers.operator==="Substraction"){
  console.log("Your answer is: ");
  console.log(answers.firstNumber-answers.secondNumber);
} 
else if (answers.operator==="Division"){
  console.log("Your answer is: ");
  console.log(answers.firstNumber/answers.secondNumber);
} 
else if (answers.operator==="Multiplication"){
  console.log("Your answer is: ");
  console.log(answers.firstNumber*answers.secondNumber);
} 
else {console.log("Please enter a valid operator.");}