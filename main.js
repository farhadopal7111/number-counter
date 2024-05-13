#! /usr/bin/env node
import inquirer from "inquirer";
let user_ans = await inquirer.prompt([
    {
        name: "words",
        message: "input",
        type: "please enter your sentence"
    }
]);
let word_count = user_ans.words.trim().split("");
console.log(word_count);
console.log(`your sentence has ${word_count} words.`);
