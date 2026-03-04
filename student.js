// Array of student objects
let students = [
  {
    name: "Aisha",
    marks: [85, 78, 92]
  },
  {
    name: "Rahul",
    marks: [70, 88, 90]
  },
  {
    name: "Meena",
    marks: [95, 91, 89]
  }
];

// Function to calculate average
function calculateAverage(marksArray) {
  let total = 0;
  
  for (let i = 0; i < marksArray.length; i++) {
    total += marksArray[i];
  }

  return total / marksArray.length;
}

// Display student averages
students.forEach(function(student) {
  let avg = calculateAverage(student.marks);
  console.log("Student:", student.name);
  console.log("Marks:", student.marks);
  console.log("Average:", avg.toFixed(2));
  console.log("----------------------");
});
