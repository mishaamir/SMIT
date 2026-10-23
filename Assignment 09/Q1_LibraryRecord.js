// Q1 - Library Book Record

const book = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Extract values and skip category
const [bookId, bookTitle, , price] = book;

// Use a default category 
const shortBook = ["BK-105", "Learning ES6"];
const [shortBookId, shortBookTitle, category = "General"] = shortBook;

console.log(`Book ID: ${bookId}, Title: ${bookTitle}, Price: Rs. ${price}`);
console.log(`Book ID: ${shortBookId}, Title: ${shortBookTitle}, Category: ${category}`);

// Original arrays remain unchanged
console.log("Original book:", book);
console.log("Original short book:", shortBook);


