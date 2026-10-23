function greet() {
    console.log("Welcome to JavaScript!");
}

function greetUser(name) {
    console.log("Welcome, " + name + "!");
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

greet();

greetUser("Sara");

let sum = addNumbers(10, 20);
console.log("Sum: " + sum);