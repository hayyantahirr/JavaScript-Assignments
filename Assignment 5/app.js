// Q1 Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + total);

// Q2 Repeat task1 for subtraction, multiplication, division & modulus.;
// multiplication
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 * num2;
// document.write("product of " + num1 + " and " + num2 + " is " + total);

// division
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 / num2;
// document.write("divide of " + num1 + " and " + num2 + " is " + total);

// subtraction
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 - num2;
// document.write("subtract of " + num1 + " and " + num2 + " is " + total);

// modulus
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 % num2;
// document.write("modulus of " + num1 + " and " + num2 + " is " + total);

// Q3 Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
//
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”;

// TO BE ASKED

// Q4 Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output;

// var moviePrice = 600;
// var quantity = 5;
// var total = moviePrice * quantity;
// document.write(
//   "Total cost to buy " + quantity + " tickets to a movie is " + total +"PKR"
// );

// Q5 Write a script to display multiplication table of any
// number in your browser. E.;

// var num = parseInt(prompt("enter a num for table"));

// document.write(
//   "Table of " +
//     num +
//     "<br>" +
//     num +
//     " X " +
//     1 +
//     "=" +
//     num * 1 +
//     "<br>" +
//     num +
//     " X " +
//     2 +
//     "=" +
//     num * 2 +
//     "<br>" +
//     num +
//     " X " +
//     3 +
//     "=" +
//     num * 3 +
//     "<br>" +
//     num +
//     " X " +
//     4 +
//     "=" +
//     num * 4 +
//     "<br>" +
//     num +
//     " X " +
//     5 +
//     "=" +
//     num * 5 +
//     "<br>" +
//     num +
//     " X " +
//     6 +
//     "=" +
//     num * 6 +
//     "<br>" +
//     num +
//     " X " +
//     7 +
//     "=" +
//     num * 7 +
//     "<br>" +
//     num +
//     " X " +
//     8 +
//     "=" +
//     num * 8 +
//     "<br>" +
//     num +
//     " X " +
//     9 +
//     "=" +
//     num * 9 +
//     "<br>" +
//     num +
//     " X " +
//     10 +
//     "=" +
//     num * 10
// );

// Q6 The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”;

// var farenhiet = parseInt(prompt("enter Farenhiet temprature "));
// var celcius = parseInt(prompt("enter celcius tempreture"));
// var conversion1 = ((farenhiet - 32) * 5) / 9;
// var conversion2 = (celcius * 9) / 5 + 32;
// document.write(
//   celcius +
//     "°C is " +
//     conversion2 +
//     "°F" +
//     "<br>" +
//     farenhiet +
//     "°F is " +
//     conversion1 +
//     "°C "
// );

// Q7 Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.;

// var item1 = 650;
// var item2 = 100;
// var Shipping = 100;

// var quantityItem1 = parseInt(prompt("enter the product first quantity"));
// var quantityItem2 = parseInt(prompt("enter the product second quantity"));

// var total1 = item1 * quantityItem1;
// var total2 = item2 * quantityItem2;
// var finalTotal = total1 + total2 + Shipping;

// document.write("<h1 style=font-size: 3rem;>Shopping Cart</h1>");

// document.write("<br><br>Price of product 1 is " + item1);
// document.write("<br>quantity of product 1 is " + quantityItem1);

// document.write("<br>Price of product 2 is " + item2);
// document.write("<br>quantity of product 2 is " + quantityItem2);

// document.write(" <br>shipping charges " + Shipping);
// document.write("<br><br><br>Your total of order is " + finalTotal);

// Q8 Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var totalMarks = 1000;
// var marksObtained = parseInt(prompt("enter the obtained marks "));

// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1 style=font-size: 3rem;>MarkSheet </h1><br><br><br><br>");

// document.write("Total Marks are : " + totalMarks);
// document.write("<br>Obtained Marks are : " + marksObtained);
// document.write("<br>Percentage obtained is : " + percentage +"%");

// Q9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee);

// var usd = 104.8;
// var riyal = 28;

// var usdQuantity = parseInt(prompt("enter usd quantity"));
// var riyalQuantity = parseInt(prompt("enter riyal quantity"));

// var total1 = usdQuantity * usd;
// var total2 = riyalQuantity * riyal;
// var final = total1 + total2;

// document.write(
//   "<h1 style=font-size: 3rem;>Currency in PKR</h1><br><br><br><br>"
// );
// document.write("Total Currency in PKR : " + final);

// Q10 Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression;

// var num = 5451695619490;

// var expression = ((num + 5) * 10) / 2;

// document.write(expression);

// Q11 The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.;

// var currentYear = parseInt(prompt("enter current year "));
// var birthYear = parseInt(prompt(" enter your birth year "));
// var totalAge = currentYear - birthYear;

// document.write(
//   "<h1 style=font-size: 3rem;>Age calculator </h1><br><br><br><br>"
// );
// document.write("Current Year : " + currentYear);
// document.write(" <br>birth Year : " + birthYear);
// document.write(" <br> Your current Age is :" + totalAge);

// Q12 The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142);

// var radius = parseInt(prompt("enter a radius "));
// var circumfrance = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write(
//   "<h1 style=font-size: 3rem;>The Geometrizer </h1><br><br><br><br>"
// );
// document.write("<br>Radius of the circle is :" + radius);
// document.write("<br>Circumfrance of the circle is :" + circumfrance);
// document.write("<br>The area of circle is  :" + area);

// Q13 The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”;

// var snack = prompt("enter your favourite Snack ");
// var age = parseInt(prompt("enter your Age "));
// var maxAge = parseInt(prompt("enter your Estimated Maximum age "));
// var snackPerDay = parseInt(
//   prompt("enter your amount of the snacks you consume per day  ")
// );
// var need = (maxAge - age) * snackPerDay;

// document.write(
//   "<h1 style=font-size: 3rem;>The life time supply calculator  </h1><br><br><br><br>"
// );
// document.write("<br>Favourite Snack is :" + snack);
// document.write("<br>Age is :" + age);
// document.write("<br>Estimated Maximum Age  is  :" + maxAge);
// document.write("<br>Amount of snacks per day :" + snackPerDay);
// document.write(
//   "<br> You will need " + need + " " + snack + " to last you until " + maxAge
// );
