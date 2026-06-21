let currentInput = "";
let previousInput = "";
let selectedChoice = null;

const resultDisplay = document.getElementById("result");
const historyDisplay = document.getElementById("history");

function appendNumber(num) {
    if (currentInput === "0") currentInput = "";
    currentInput += num.toString();
    updateDisplay();
}

function setOperator(choice) {
    if (currentInput === "") return;
    selectedChoice = choice;
    previousInput = currentInput;
    currentInput = "";
    
    const operators = { 1: "+", 2: "-", 3: "×", 4: "÷", 5: "%" };
    historyDisplay.innerText = `${previousInput} ${operators[choice]}`;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    selectedChoice = null;
    resultDisplay.innerText = "0";
    historyDisplay.innerText = "0";
}

function updateDisplay() {
    resultDisplay.innerText = currentInput || "0";
}

// This mirrors your switchcase.c backend logic perfectly
function calculate() {
    if (!previousInput || !currentInput || !selectedChoice) return;

    let a = parseInt(previousInput);
    let b = parseInt(currentInput);
    let output = 0;

    switch (selectedChoice) {
        case 1: // Addition
            output = a + b;
            break;
        case 2: // Subtraction
            output = a - b;
            break;
        case 3: // Multiplication
            output = a * b;
            break;
        case 4: // Division
            if (b !== 0) {
                output = Math.floor(a / b);
            } else {
                alert("Error: Division by 0 is not possible");
                clearDisplay();
                return;
            }
            break;
        case 5: // Modulo
            if (b !== 0) {
                output = a % b;
            } else {
                alert("Error: Modulo by 0 is not possible");
                clearDisplay();
                return;
            }
            break;
        default:
            alert("Invalid Action");
            return;
    }

    historyDisplay.innerText += ` ${currentInput} =`;
    resultDisplay.innerText = output;
    currentInput = output.toString();
    previousInput = "";
    selectedChoice = null;
}