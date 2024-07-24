#! /usr/bin/env node

import inquirer from "inquirer"; 

const answer =await  inquirer.prompt([{massage: "Enter first number",type: "number", name: "firstNumber"},
    {massage: "Enter second number",type: "number", name: "secondNumber"},
    {massage: "select one of the opretor to perform action",
    type : "list",
    name: "opretor",
     choices: ["Addition", "Subtraction","Multiplaction","Division"]

    }
]);
// conditional statement
if (answer.opretor === "Addition"){
    console.log(answer.firstNumber +answer.secondNumber);
}else if (answer.opretor === "Subtraction") {
    console.log (answer.firstNumber - answer.secondNumber);
}else if (answer.opretor === "Multiplaction") {
    console.log (answer.firstNumber * answer.secondNumber);
}else if (answer.opretor === "Division") {
    console.log (answer. firstNumber / answer.secondNumber);
}else {
    console.log ("please select valid opretor ")
}
