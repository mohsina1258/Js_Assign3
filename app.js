// JS ASSIGN 3 ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var studentNames = [];
// var studentNames = new Array();
// var stringsArray = ["apple", "banana", "cherry"];
// var numbersArray = [1, 2, 3, 4, 5];
// var booleanArray = [true, false, true];
// var mixedArray = [1, "apple", true, null, undefined];
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// console.log("Available education qualifications in Pakistan:");
// for (var i = 0; i < qualifications.length; i++) {
//   console.log(qualifications[i]);
// }


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// Array to store student names

// var studentNames = ["Alice", "Bob", "Charlie"];

// // Array to store student scores
// var studentScores = [430, 380, 450];

// // Total marks for each student
// var totalMarks = 500;

// console.log("Student Scores and Percentages:");

// for (var i = 0; i < studentNames.length; i++) {
//   var name = studentNames[i];
//   var score = studentScores[i];
//   var percentage = (score / totalMarks) * 100;

//   console.log(name + ": Score = " + score + ", Percentage = " + percentage.toFixed(2) + "%");
// }




// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// // Initialize an array with color names
// var colorArray = ["red", "green", "blue"];

// // Display the array elements
// function displayArray() {
//   console.log("Current Array: " + colorArray.join(", "));
// }

// // a. Add a color to the beginning of the array
// var colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");
// colorArray.unshift(colorToAddAtBeginning);
// displayArray();

// // b. Add a color to the end of the array
// var colorToAddAtEnd = prompt("Enter a color to add at the end:");
// colorArray.push(colorToAddAtEnd);
// displayArray();

// // c. Add two more colors to the beginning of the array
// colorArray.unshift("orange", "purple");
// displayArray();

// // d. Delete the first color in the array
// colorArray.shift();
// displayArray();

// // e. Delete the last color in the array
// colorArray.pop();
// displayArray();

// // f. Add a color at a desired position/index
// var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// var colorToAddAtIndex = prompt("Enter a color to add at the specified index:");
// colorArray.splice(indexToAdd, 0, colorToAddAtIndex);
// displayArray();

// // g. Delete color(s) from a user-defined position/index
// var indexToDelete = parseInt(prompt("Enter the index to start deleting from:"));
// var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(indexToDelete, deleteCount);
// displayArray();


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// Array to store student scores
// var studentScores = [78, 92, 85, 64, 98, 73, 88, 91];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//   return a - b;
// });

// // Display the sorted array
// console.log("Sorted Student Scores (Ascending Order): " + studentScores.join(", "));



// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// Initialize an array with city names
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle", "Boston"];

// // Copy 3 array elements to selectedCities array
// var selectedCities = cities.slice(0, 3);

// // Display the selectedCities array
// console.log("Selected Cities: " + selectedCities.join(", "));



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log("Single String: " + singleString);



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var queue = [];

// // Add values to the queue
// queue.push("Mohsin");
// queue.push("20");
// queue.push("Bachelors");

// // Remove and display values in FIFO order
// console.log(queue.shift()); // Output: Value 1
// console.log(queue.shift()); // Output: Value 2
// console.log(queue.shift()); // Output: Value 3


// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)
// var stack = [];

// // Add values to the stack
// stack.push("Cricket");
// stack.push("Football");
// stack.push("Hockey");

// // Remove and display values in LIFO order
// console.log(stack.pop()); // Output: Value 3
// console.log(stack.pop()); // Output: Value 2
// console.log(stack.pop()); // Output: Value 1


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
// document.write("<select id='manufacturer'>");

// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
// }

// document.write("</select>");
