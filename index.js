"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
if (process.env.HELLO) {
    console.log("hello " + process.env.HELLO);
}
inquirer_1.default.prompt([{
        type: "checkbox",
        name: "isItOk?",
        message: "Is it everything ok?",
        default: "yes",
        choices: ["yes", "no"]
    }]).then(function (answers) {
    console.log({ answers: answers });
    process.exit(0);
});
