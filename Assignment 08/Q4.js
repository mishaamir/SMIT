// Question 4: Store Inventory Using JavaScript Map

const inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Add product
inventory.set("mangoes", 150);

// Update quantity
inventory.set("bananas", 350);

// Get quantity
console.log("Apples Quantity:", inventory.get("apples"));

// Check product
console.log("Oranges Exist:", inventory.has("oranges"));

// Remove product
inventory.delete("oranges");

// Display size
console.log("Number of Products:", inventory.size);

// Display names and quantities
console.log("Product Names:", Array.from(inventory.keys()));
console.log("Quantities:", Array.from(inventory.values()));

// Display inventory
inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});

// Empty inventory
inventory.clear();
console.log("Final Inventory Size:", inventory.size);