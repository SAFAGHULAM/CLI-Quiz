#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Which of the following is NOT a valid TypeScript data type?",
        choices: ["void", "any", "dynamic", "tuple"]
    },
    {
        name: "question_2",
        type: "list",
        message: "How do you denote a variable as readonly in TypeScript?",
        choices: ["const", "static", "readonly", "fixed"]
    },
    {
        name: "question_3",
        type: "list",
        message: "How do you define an optional parameter in the TypeScript function?",
        choices: ["function foo(param: string?)", "function foo(param?: string)", "function foo(param string=)", "function foo(param string?)"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Which of the following will transpile a TypeScript file (example.ts) to JavaScript?",
        choices: ["typescript example.ts", "ts-compile example.ts", "tsc example.ts", "ts example.ts"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Which TypeScript feature allows for declaring new names for existing types?",
        choices: ["Aliases", "Enums", "Interfaces", "Decorators"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "dynamic":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. InCorrect!");
}
switch (quiz.question_2) {
    case "readonly":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. InCorrect!");
}
switch (quiz.question_3) {
    case "function foo(param?: string)":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. InCorrect!");
}
switch (quiz.question_4) {
    case "tsc example.ts":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. InCorrect!");
}
switch (quiz.question_5) {
    case "Aliases":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. InCorrect!");
}
console.log(`Score: ${score}`);
