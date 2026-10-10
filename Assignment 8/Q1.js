// Question 1: Online Store Sales Report

const orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// Find first order above 2000
const firstLargeOrder = orderAmounts.find(amount => amount > 2000);

// Filter orders above 1000
const ordersAbove1000 = orderAmounts.filter(amount => amount > 1000);

// Calculate total sales
const totalSales = orderAmounts.reduce((total, amount) => total + amount, 0);

console.log("Original Orders:", orderAmounts);
console.log("First Order Above 2000:", firstLargeOrder);
console.log("Orders Above 1000:", ordersAbove1000);
console.log("Total Sales:", totalSales);