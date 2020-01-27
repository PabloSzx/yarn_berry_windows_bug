import inquirer from "inquirer";
 
if (process.env.HELLO) {
    console.log("hello " + process.env.HELLO);
}

inquirer.prompt([{
    type: "checkbox",
    name: "isItOk?",
    message: "Is it everything ok?",
    default: "yes",
    choices: ["yes", "no"]
}]).then(answers => {
    console.log({answers});
    process.exit(0);
})