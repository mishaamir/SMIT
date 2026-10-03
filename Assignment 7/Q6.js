let products = [
    { name: "Laptop", category: "Electronics", price: 120000, stock: 10 },
    { name: "Phone", category: "Electronics", price: 80000, stock: 15 },
    { name: "Bag", category: "Accessories", price: 3500, stock: 20 },
    { name: "Mouse", category: "Electronics", price: 2500, stock: 30 },
    { name: "Keyboard", category: "Electronics", price: 4500, stock: 25 }
];

// Total
console.log("Total products:", products.length);

// Search
let product = products.find(p => p.name === "Laptop");
console.log("Search:", product);

// Condition
let cheap = products.find(p => p.price < 5000);
console.log("Price under 5000:", cheap);

// Arrow function
let showProduct = p => console.log("Product:", p);
showProduct(product);

// Sort
let low = [...products].sort((a, b) => a.price - b.price);
let high = [...products].sort((a, b) => b.price - a.price);

console.log("Low to High:", low);
console.log("High to Low:", high);