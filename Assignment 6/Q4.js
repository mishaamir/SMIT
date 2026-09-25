let vegetables= ["Carrot", "Potato", "Lady Finger"];
let name= "Sara";
let age= 22;

// Array.isArray
console.log("Is Vegetables in Array?", Array.isArray(vegetables));
console.log("Is Name in Array?", Array.isArray(name));
console.log("Is Age in Array?", Array.isArray(age));

// Arrow function that accepts an array
const showArray = (array) => {
    console.log("Array:", array);
};

showArray(vegetables);

// Another simple arrow function
const showValue = (value) => {
    console.log("Value:", value);
};

showValue("Hello");