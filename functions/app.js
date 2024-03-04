// 1.	Create a block of code that you can use several times.

// function code(){
//     console.log("hey");
// } ;

// 2.	Write a function that displays current date & time in your browser.

// skipped()

// 3.	Write a function that takes first & last name and then it greets the user using his full name.

// function greetings() {
//     var firstName = prompt("enter your first name ")
//     var lasttName = prompt("enter your last name ")
//     document.write("hello my friend " + firstName +lasttName)
// }
// greetings()

// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum() {
//   var firstNum = +prompt("enter your first number ");
//   var lastNum = +prompt("enter your last number ");
//   var total = firstNum+lastNum
//   document.write("the sum of two numbers are " + total);
// }
// sum();

// 5. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
// Return and show the desired result in your browser.

// var num1 = +prompt("enter your first number ");
// var num2 = +prompt("enter your second number ");
// var operator = prompt("enter your operator ");

// function Calculator(number1, number2, operation) {
//   if (operation === "+") {
//     var total = number1 + number2;
//     document.write("the sum of the numbers is "+ total);
//   } else if (operation === "-") {
//     var total = number1 - number2;
//     document.write("the sum of the numbers is " + total);
//   } else if (operation === "*") {
//     var total = number1 * number2;
//     document.write("the sum of the numbers is " +total);
//   } else if (operation === "/") {
//     var total = number1 / number2;
//     document.write("the sum of the numbers is "+total);
//   } else {
//     document.write("enter a correct value");
//   }
// }

// Calculator(num1, num2, operator);

// 6. Write a function that squares its argument

// var square = +prompt("enter a number to make its square ");

// function squares(num) {
//   document.write("the square of your num is " + num * num);
// }

// squares(square);

// 7.	 Write a function that computes factorial of a number.

// to be asked

// 8.	Write a function that take start and end number as inputs & display counting in your browser.

// to be asked

// 9.	Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// var base = +prompt("enter the base of triangle")
// var height = +prompt("enter the height of triangle")

// function calculateHypotenuse(num1,num2) {

//     function calculateSquare() {

//     }
// }
// calculateHypotenuse(base,height)

// to be asked

// 10.	Write a function that writes variable length arguments list in your browser.

// to be asked

// 11.	Write a function that accepts any number of arguments & find largest of the number.

// to be asked

// 12.	Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a.	Arguments as values
// b.	Arguments as variables

// function areaOftriangles(base, height) {
//   document.write("the are of triangle is " + base * height);
// }
// part A
// areaOftriangles(20,30)

// part B
// var length = 60;
// var width = 20;
// areaOftriangles(width, length);

// 13.	Write a function that receives an array & returns the sorted array.

// to be asked

// 14.	Write a function that takes numbers array, sums its elements & returns the sum.

// to be asked

// 15.	Execute & monitor the output of following JS program:

// var param = function inner() {
//        return typeof inner;
// }
// alert(param());

// 16.	Write a function that computes power of a number. E.g. 23 is 8.

// function power() {
//   document.write(2 * 2 * 2);
// }
// power();

// 17.	Write a function that simulates a dice & returns a random dice value.

// to be asked

// 18.	Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223

// to be asked

// 19.	Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// to be asked

// 20.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// to be asked

// 21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// to be asked

// 22.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

// EXAMPLE STRING : 'The quick brown fox' 
// EXPECTED OUTPUT : 5

