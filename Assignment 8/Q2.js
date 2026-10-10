// Question 2: Student Performance Analyzer

const originalMarks = [45, 78, 92, 61, 88, 54, 73, 95];

// Add 5 to every mark
const practiceMarks = originalMarks.map(mark => mark + 5);

// Filter marks 70 or above
const marksAbove70 = originalMarks.filter(mark => mark >= 70);

// Find first mark above 90
const firstMarkAbove90 = originalMarks.find(mark => mark > 90);

// Calculate total marks
const totalMarks = originalMarks.reduce((total, mark) => total + mark, 0);

console.log("Original Marks:", originalMarks);
console.log("Practice Marks:", practiceMarks);
console.log("Marks Above 70:", marksAbove70);
console.log("First Mark Above 90:", firstMarkAbove90);
console.log("Total Marks:", totalMarks);