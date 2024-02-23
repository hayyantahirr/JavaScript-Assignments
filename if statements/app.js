// Q1 Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

// var askNum = +prompt("enter a numebr that is divisible by 3");
// var divide = 3;
// var remainder = askNum % divide;
// if (remainder === 0) {
//   document.write("the number is divisible by 3");
// } else {
//   document.write("sahi number daal");
// }

// Q2  Write a program that checks whether the given input is an even
// number or an odd number.;

// var num = +prompt("enter a number to determine it even or odd")

// if (num%2 ===0){
// console.log("it is even")
// }
// else(
//     console.log("its an odd number")
// )

// Q3 Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// var age = +prompt("enter your age ")

// if (age>= 18) {
//     document.write("you are old enough")
// }
// else {
//     document.write("Too Young")
// }

// Q4 Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

// var userName = prompt("enter your full name ")
// if (userName==="hayyan tahir") {
//     document.write("hi hayyan")
// }

// Q5 Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

// var askNum = +prompt("enter a numebr that is divisible by 3");
// var divide = 3;
// var remainder = askNum % divide;
// if (remainder === 0) {
//   document.write("the number is divisible by 3");
// } else {
//   document.write("sahi number daal");
// }

// Q6 Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)

// To be asked

// Q7 Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// var operator = prompt("enter what calculation (enter only operational symbol)");
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number ");
// if (operator === "+") {
//   var total = num1 + num2;
//   document.write("the sum of the numbers is " + total);
// } else if (operator === "-") {
//   var total1 = num1 - num2;
//   document.write("the subtraction of the numbers is " + total1);
// } else if (operator === "*") {
//   document.write("the product of the numbers is " + num1 * num2);
// } else if (operator === "/") {
//   document.write("the division of the numbers is " + num1 / num2);
// } else {
//   document.write("enter correct value ");
// }

// Q8 Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

// To be asked

// Q9 Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.

// to be asked

// Q 10 Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise

// var password = "htabkkJSvar";
// var askPassword = prompt("enter the password");
// if (askPassword === "") {
//   document.write("please enter the password");
// } else if (askPassword === password) {
//   document.write("the password you entered is correct");
// } else {
//   document.write("enter correct password ");
// }

// Q11 Write a program that adds an else statement to the following
// script to display “You are not Fahad”

// var firstName = "Fahad";
// if (firstName === "Fahad") {
//   document.write("Hello Fahad!");
// } else {
//   document.write("you are not fahad ");
// }

// Q12 This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// }

// Q13 Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var num1 = +prompt("enter a first number to compare ");
// var num2 = +prompt("enter a second number to compare ");

// if (num1 > num2) {
//   document.write(num1 + " is bigger than " + num2);
// } else if (num1 < num2) {
//   document.write(num2 + " is bigger than " + num1);
// } else if (num1 === num2) {
//   document.write(num1 + " is equal to " + num2);
// }

// Q14 Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.

// var askNum = +prompt(
//   "enter a number to determine whether it is positive or negative "
// );
// if (askNum === 0) {
//   document.write("the number you entered is 0");
// } else if (askNum > 0) {
//   document.write("your number is positive ");
// }
// else if (askNum<0){
//     document.write("your number is negative");
// }
// else{
//     document.write("enter a valid number ")
// }

// Q 15 Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)

// to be asked

// Q16 Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”

// To be asked

// Q17  Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.

// var alpha = prompt("enter a vowel");

// if (alpha.length > 1) {
//   document.write("enter a single alphabet ");
// } else if (
//   alpha === "a" ||
//   alpha === "e" ||
//   alpha === "i" ||
//   alpha === "o" ||
//   alpha === "u"
// ) {
//   document.write("you entered  a vowel ");
// } else {
//   document.write("enter a vowel ");
// }

// Q18 Choose the correct comparison operator to display "true",
// when:
// 10 is NOT equal to 8.

// var check = Boolean(810!= 8);
// console.log(check);

// if (10 != 8) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Q19 Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

// var month;
// month = 124444;
// if (month == 1) {
//   alert("January");
// } else if (month == 2) {
//   alert("February");
// } else if (month == 3) {
//   alert("March");
// } else if (month == 4) {
//   alert("April");
// } else if (month == 5) {
//   alert("May");
// } else if (month == 6) {
//   alert("June");
// } else if (month == 7) {
//   alert("July");
// } else if (month == 8) {
//   alert("August");
// } else if (month == 9) {
//   alert("September");
// } else if (month == 10) {
//   alert("October");
// } else if (month == 11) {
//   alert("November");
// } else if (month == 12) {
//   alert("December");
// } else {
//   alert("Invalid month");
// }

// Q20 Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// var age = +prompt("enter your age ")

// if (age>= 18) {
//     document.write("you are old enough")
// }
// else {
//     document.write("Too Young")
// }
