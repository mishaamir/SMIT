// Return student data after 2 seconds
function getStudentData(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const students = {
                1: { id: 1, name: "Ali", course: "JavaScript" },
                2: { id: 2, name: "Sara", course: "Web Development" },
                3: { id: 3, name: "Ahmed", course: "Python" }
            };

            if (students[id]) {
                resolve(students[id]);
            } else {
                reject(new Error("Student not found."));
            }
        }, 2000);
    });
}

async function loadStudents() {
    try {
        console.log("Loading Student 1...");
        const student1 = await getStudentData(1);
        console.log(student1);

        console.log("Loading Student 2...");
        const student2 = await getStudentData(2);
        console.log(student2);

        console.log("Loading Student 3...");
        const student3 = await getStudentData(3);
        console.log(student3);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadStudents();
