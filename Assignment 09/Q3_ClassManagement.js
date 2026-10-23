// Q3 - Manage Class Lists and Student Profiles

const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];

const profile = {
  name: "Laiba",
  className: "Web Development",
  city: "Karachi"
};

// Combine both groups
const combinedGroup = [...groupA, ...groupB];

// Copy Group A and add a student
const copiedGroupA = [...groupA];
copiedGroupA.push("Usman");

// Update city without changing the original profile
const updatedProfile = { ...profile, city: "Lahore" };

// Add email while keeping existing details
const profileWithEmail = { ...profile, email: "laiba@example.com" };

// Display original and updated data
console.log("Original Group A:", groupA);
console.log("Copied Group A:", copiedGroupA);
console.log("Combined class list:", combinedGroup);
console.log("Original profile:", profile);
console.log("Updated profile:", updatedProfile);
console.log("Profile with email:", profileWithEmail);
