const prices = [1200, 450, 3000, 750, 1500, 250];

// 1. Lowest to highest
const lowToHigh = prices.slice().sort((a, b) => a - b);
console.log('Lowest to highest:', lowToHigh);

// 2. Highest to lowest
const highToLow = prices.slice().sort((a, b) => b - a);
console.log('Highest to lowest:', highToLow);

// 3. Original list and reversed version
const reversedPrices = prices.slice().reverse();
console.log('Original list:', prices);
console.log('Reversed list:', reversedPrices);

// 4. Random order for promotional display
const randomPrices = prices.slice().sort(() => Math.random() - 0.5);
console.log('Random order:', randomPrices);