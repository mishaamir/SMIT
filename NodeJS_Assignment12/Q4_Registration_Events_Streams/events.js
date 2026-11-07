const EventEmitter = require("events");

// Create EventEmitter object
const registrationSystem = new EventEmitter();

// Register event listener
registrationSystem.on("studentRegistered", (id, name) => {

    console.log("Student Registered Successfully!");
    console.log("Student ID:", id);
    console.log("Student Name:", name);

    // Show reminder after 3 seconds
    setTimeout(() => {
        console.log("Reminder: Welcome " + name);
    }, 3000);

});

function registerStudent(id, name) {
    registrationSystem.emit("studentRegistered", id, name);
}

registerStudent(101, "Ali");
registerStudent(102, "Sara");