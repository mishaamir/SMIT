// Calculator using callback
function calculate(num1, num2, callback) {
    callback(num1, num2);
}

calculate(10, 20, function (a, b) {
    console.log("Sum:", a + b);
});

// Calculate total bill
function calculateBill(price1, price2, price3, callback) {
    callback(price1 + price2 + price3);
}

calculateBill(200, 300, 500, function (total) {
    console.log("Total Bill:", total);
});

// Withdraw money after 2 seconds
function withdrawMoney(amount, callback) {
    let balance = 10000;

    setTimeout(function () {
        balance -= amount;
        callback(balance);
    }, 2000);
}

withdrawMoney(2000, function (remainingBalance) {
    console.log("Remaining Balance:", remainingBalance);
});