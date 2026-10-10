// Question 3: Employee Data from an API

const employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

// Filter IT employees
const itEmployees = employees.filter(employee => employee.department === "IT");

// Find first salary above 90000
const highSalaryEmployee = employees.find(employee => employee.salary > 90000);

// Get employee names
const employeeNames = employees.map(employee => employee.name);

// Calculate total salary
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);

console.log("All Employees:", employees);
console.log("IT Employees:", itEmployees);
console.log("First Employee Above 90000:", highSalaryEmployee);
console.log("Employee Names:", employeeNames);
console.log("Total Salary:", totalSalary);