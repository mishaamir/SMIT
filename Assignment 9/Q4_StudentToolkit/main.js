// Import named and default exports
import getTotalMarks, { getFullName } from "./studentTools.js";

const fullName = getFullName("Sara", "Ahmed");
const totalMarks = getTotalMarks(85, 90, 78, 88);

console.log("Full Name:", fullName);
console.log("Total Marks:", totalMarks);
