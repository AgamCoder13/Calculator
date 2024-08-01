// Get the display element from the DOM
const display = document.getElementById('display');

// Function to clear the display, setting it to '0'
function clearDisplay() {
    display.innerText = '0'; // Set the display text to '0'
}

// Function to delete the last character in the display
function deleteLast() {
    if (display.innerText.length > 1) { // If the display text has more than one character
        display.innerText = display.innerText.slice(0, -1); // Remove the last character
    } else {
        display.innerText = '0'; // If only one character, reset to '0'
    }
}

// Function to append a character to the display
function appendCharacter(char) {
    if (display.innerText === '0') { // If the display currently shows '0'
        display.innerText = char; // Replace '0' with the new character
    } else {
        display.innerText += char; // Otherwise, append the new character to the existing text
    }
}

// Function to calculate the result of the expression in the display
function calculateResult() {
    try {
        display.innerText = eval(display.innerText); // Evaluate the expression and set the display text to the result
    } catch {
        display.innerText = 'Error'; // If an error occurs (invalid expression), set the display text to 'Error'
    }
}
