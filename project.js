// 1. Deposit Money
// 2. Determine number of lines
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. On win, give user money
// 7. Play again or user has no money left

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {

}

const depositAmount = deposit();
console.log(depositAmount);