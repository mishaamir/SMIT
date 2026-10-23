// Register a student using Promise
function registerStudent(name, seatAvailable) {
    return new Promise(function (resolve, reject) {
        if (seatAvailable) {
            resolve(name + " registered successfully.");
        } else {
            reject(new Error("Sorry, the class is full."));
        }
    });
}

// Success case
registerStudent("Ali", true)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error.message);
    });

// Failure case
registerStudent("Sara", false)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error.message);
    });