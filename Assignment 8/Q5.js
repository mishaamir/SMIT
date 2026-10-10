// Question 5: Student Result Object

const student1 = {
    name: "Ali",
    class: "BSSE 1st Semester",
    chemistry: 85,
    mathematics: 90,
    urdu: 80,
    english: 75,

    // Calculate result
    calculateResult: function () {
        const total = this.chemistry + this.mathematics +
            this.urdu + this.english;

        const percentage = (total / 400) * 100;

        return {
            totalMarks: total,
            percentage: percentage
        };
    }
};

// Access properties
console.log("Student Name:", student1.name);
console.log("Student Class:", student1.class);
console.log("Chemistry Marks:", student1["chemistry"]);

// Display result
const result1 = student1.calculateResult();
console.log("Ali Total Marks:", result1.totalMarks);
console.log("Ali Percentage:", result1.percentage + "%");

// Second student
const student2 = {
    name: "Sara",
    class: "BSSE 1st Semester",
    chemistry: 92,
    mathematics: 88,
    urdu: 86,
    english: 90,

    // Calculate result
    calculateResult: function () {
        const total = this.chemistry + this.mathematics +
            this.urdu + this.english;

        const percentage = (total / 400) * 100;

        return {
            totalMarks: total,
            percentage: percentage
        };
    }
};

// Display second result
const result2 = student2.calculateResult();
console.log("Sara Total Marks:", result2.totalMarks);
console.log("Sara Percentage:", result2.percentage + "%");

// Remove property
delete student1.urdu;
console.log("Final Student Object:", student1);