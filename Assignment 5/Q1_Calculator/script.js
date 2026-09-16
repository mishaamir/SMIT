function getNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    return [num1, num2];
}

function addNumbers() {
    let numbers = getNumbers();
    let num1 = numbers[0];
    let num2 = numbers[1];

    let result = num1 + num2;

    document.getElementById("result").textContent = "Result: " + result;
}

function subtractNumbers() {
    let numbers = getNumbers();
    let num1 = numbers[0];
    let num2 = numbers[1];

    let result = num1 - num2;

    document.getElementById("result").textContent = "Result: " + result;
}

function multiplyNumbers() {
    let numbers = getNumbers();
    let num1 = numbers[0];
    let num2 = numbers[1];

    let result = num1 * num2;

    document.getElementById("result").textContent = "Result: " + result;
}

function divideNumbers() {
    let numbers = getNumbers();
    let num1 = numbers[0];
    let num2 = numbers[1];

    if (num2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero";
        return;
    }

    let result = num1 / num2;

    document.getElementById("result").textContent = "Result: " + result;
}