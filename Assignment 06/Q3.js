let colors = ["Red", "Blue", "Black", "Green"];

let cars = ["BMW", "Audi", "Mercedes", "Tesla"];

// Array Concate
console.log(colors.concat(cars));

// Array Slice
console.log(colors.slice(1, 3));

// Array Splice
console.log(cars.splice(2, 1));

console.log(cars.splice(2, 0, "Ferrari"));

console.log(cars);

// Array Delete
console.log(delete colors[1]);

console.log("After Delete", colors);