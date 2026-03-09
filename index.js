const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function calculateResult() {
    try {
        if (display.value.trim() !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}