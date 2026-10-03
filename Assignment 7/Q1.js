let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// Check whether Ayesha is present
let isAyeshaPresent = students.includes('Ayesha');

// Position of first occurrence
let firstSaraPosition = students.indexOf('Sara');

// Position of last occurrence 
let lastSaraPosition = students.lastIndexOf('Sara');

// Find the first student whose name starts with A
let firstAStudent = students.find(function(student) {
    return student.startsWith('A');
});

// Find the position of the first student whose name starts with A
let firstAPosition = students.findIndex(function(student) {
    return student.startsWith('A');
});

// Find the last student whose name starts with A
let lastAStudent = students.findLast(function(student) {
    return student.startsWith('A');
});

// Find the position of the last student whose name starts with A
let lastAPosition = students.findLastIndex(function(student) {
    return student.startsWith('A');
});


console.log("Is Ayesha present?", isAyeshaPresent);
console.log("First position of Sara:", firstSaraPosition);
console.log("Last position of Sara:", lastSaraPosition);
console.log("First student starting with A:", firstAStudent);
console.log("Position of first student starting with A:", firstAPosition);
console.log("Last student starting with A:", lastAStudent);
console.log("Position of last student starting with A:", lastAPosition);