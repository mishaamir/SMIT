const os = require("os");
const path = require("path");
const fs = require("fs");

// Display computer information
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());

// Create data folder if it does not exist
if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
}

// Create file paths
const filePath = path.join("data", "student-notes.txt");
const newFilePath = path.join("data", "class-notes.txt");

// Display file name and extension
console.log("\nFile Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));

// Write notes
fs.writeFileSync(filePath,
    "1. Node.js runs JavaScript outside the browser.\n" +
    "2. The os module provides computer information.\n" +
    "3. The path module helps manage file paths."
);

// Read file
console.log("\nOriginal Notes:");
console.log(fs.readFileSync(filePath, "utf8"));

// Append new line
fs.appendFileSync(filePath,
    "\n4. The fs module manages files."
);

// Display updated notes
console.log("\nUpdated Notes:");
console.log(fs.readFileSync(filePath, "utf8"));

// Rename file
fs.renameSync(filePath, newFilePath);
console.log("\nFile renamed to class-notes.txt");

// Create and delete temporary file
fs.writeFileSync("data/temporary.txt", "Temporary file");
fs.unlinkSync("data/temporary.txt");

console.log("Temporary file created and deleted.");