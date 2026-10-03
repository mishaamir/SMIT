let employee1 = {
    id: 101,
    firstName: "Sara",
    lastName: "Ali",
    department: "IT",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    info: function() {
        return this.id + " - " + this.department;
    }
};

let employee2 = {
    id: 102,
    firstName: "Zara",
    lastName: "Ahmed",
    department: "HR",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    info: function() {
        return this.id + " - " + this.department;
    }
};

console.log(employee1.fullName());
console.log(employee1.info());

console.log(employee2.fullName());
console.log(employee2.info());