let marks1 = [78, 45, 92, 66, 88, 54, 91, 73];
let marks2 = [81, 69, 95, 60];

// Combine
let marks = marks1.concat(marks2);
console.log("Combined:", marks);

// Selected portion
console.log("Selected:", marks.slice(2, 7));

// Change a mark
marks.splice(5, 1, 70);

// Remove a mark
marks.splice(6, 1);

console.log("Marks:", marks);
console.log("Total:", marks.length);

// Sort
let sorted = [...marks].sort((a, b) => a - b);
console.log("Sorted:", sorted);
console.log("Reverse:", [...sorted].reverse());

// Arrow function
let showMarks = marks => console.log("Final:", marks);

showMarks(sorted);