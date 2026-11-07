const fs = require("node:fs");
const path = require("node:path");

const sourcePath = path.join(__dirname, "large.txt");
const copyPath = path.join(__dirname, "copy.txt");

// Read and display the file in chunks.
const readable = fs.createReadStream(sourcePath, { encoding: "utf8" });

readable.on("data", (chunk) => {
    console.log("Received chunk:\n" + chunk);
});

readable.on("end", () => {
    console.log("Finished reading the activity log.");
});

readable.on("error", (error) => {
    console.error("Read error:", error.message);
});

// Copy the file using readable and writable streams.
const copyReadable = fs.createReadStream(sourcePath);
const writable = fs.createWriteStream(copyPath);

copyReadable.pipe(writable);

writable.on("finish", () => {
    console.log("Activity log copied successfully to copy.txt!");
});

copyReadable.on("error", (error) => {
    console.error("Copy read error:", error.message);
});

writable.on("error", (error) => {
    console.error("Write error:", error.message);
});
