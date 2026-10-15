// Q5 - Course Registration main file

import courses from "./courses.js";
import { formatCourse } from "./courseUtils.js";

// Extract name and fee from one course
const { name: selectedCourseName, fee: selectedCourseFee } = courses[0];
console.log("Selected course:", selectedCourseName);
console.log("Selected course fee:", selectedCourseFee);

// Add a course without changing the original array
const updatedCourses = [
  ...courses,
  { name: "Python Basics", instructor: "Mr. Ali", duration: "2 months", fee: 11000 }
];

// Update one course without changing its original object
const revisedCourse = { ...courses[1], fee: 10500 };

console.log("Original courses:", courses);
console.log("Courses including new course:", updatedCourses);
console.log("Original JavaScript course:", courses[1]);
console.log("Course with revised fee:", revisedCourse);

// Display all course summaries on the page and in the console
const courseList = document.getElementById("courseList");

updatedCourses.forEach((course) => {
  const summary = formatCourse(course);
  console.log(summary);

  const item = document.createElement("li");
  item.textContent = summary;
  courseList.appendChild(item);
});
