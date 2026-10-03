let employee = {
    id: 101,
    firstName: "Sara",
    lastName: "Ali",
    department: "IT",
    designation: "Developer",
    salary: 85000
};

console.log(employee.firstName);
console.log(employee.department);

console.log(employee["designation"]);
console.log(employee["salary"]);

// Add
employee.email = "sara@gmail.com";

// Change
employee.salary = 90000;

// Delete
delete employee.department;

console.log(employee);