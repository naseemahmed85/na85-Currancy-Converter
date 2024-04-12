#!/usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    OMR: 2.60,
    JOD: 1.41,
    SGD: 0.74,
    AUD: 0.65,
    NZD: 0.61,
    BZD: 2.02,
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD","EUR", "GBP", "INR", "PKR", "OMR", "JOD", "SGD", "AUD", "NZD", "BZD"],
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD","EUR", "GBP", "INR", "PKR", "OMR", "JOD", "SGD", "AUD", "NZD", "BZD"],
        },
        {
        
            name: "amount",
            message: "Enter your amount",
            type: "number",
        },
    ]
);
let fromAmount = currency[userAnswer.from]; // exchange rate 
let toAmount = currency[userAnswer.to]; // exchange rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount; // USD base currency // 4
let convertedAmount = baseAmount * toAmount; 
console.log(convertedAmount);