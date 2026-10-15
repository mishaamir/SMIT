// Format a course as a readable sentence
export function formatCourse(course) {
  return `${course.name} is taught by ${course.instructor}. Fee: Rs. ${course.fee}.`;
}
