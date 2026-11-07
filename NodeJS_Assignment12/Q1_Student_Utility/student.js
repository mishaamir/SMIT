// Return student introduction
function getIntroduction(name, course) {
    return `Student Name: ${name}\nCourse: ${course}`;
}

// Calculate percentage
function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

// Export functions
module.exports = {
    getIntroduction,
    calculatePercentage
};