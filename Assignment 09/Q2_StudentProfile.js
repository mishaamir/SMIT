// Q2 - Student Profile from an API

const student = {
  name: "Sara Ahmed",
  age: 19,
  department: "Software Engineering",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};

// Extract student details
const {
  name,
  age,
  department: program,
  address: { city, country },
  phone = "Not provided"
} = student;

// Display profile
console.log(`Name: ${name}`);
console.log(`Program: ${program}`);
console.log(`City: ${city}`);
console.log(`Phone: ${phone}`);
console.log(`Age: ${age}, Country: ${country}`);
