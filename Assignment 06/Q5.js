let products= ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];

// Array Length
console.log("No of products", products.length);

// Array At
console.log("First products:", products.at(0));
console.log("Last products:", products.at(-1));

// Array Push
products.push("USB");
console.log("After Push", products);

// Array Unshift
products.unshift("Printer");
console.log("After Unshift:", products);

// Array Pop
products.pop();
console.log("After Pop", products);

// Array Shift
products.shift();
console.log("After Shift:", products);

// Create second array to concate
let newProducts = ["Speaker", "Web Camera", "Charger"];

console.log("After Concate", products.concat(newProducts));

// Array Slice
console.log("After slice():", products.slice(1, 4));

// Array Splice
products.splice(2, 1, "Macbook");
console.log("After splice():", products);

// Array Join
console.log("Final product list:", products.join("-"));

// Arrow function to display the final array
const showProducts = (array) => {
    console.log("Final array:", array);
};

showProducts(products);

// Array.isArray
console.log(Array.isArray(products));