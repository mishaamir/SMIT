// Import functions
const student = require("./student");

const name = "Ali";
const course = "Web Development";
const obtainedMarks = 425;
const totalMarks = 500;

console.log(student.getIntroduction(name, course));
console.log("Percentage:", student.calculatePercentage(obtainedMarks, totalMarks) + "%");

console.log("Node.js Version:", process.version);