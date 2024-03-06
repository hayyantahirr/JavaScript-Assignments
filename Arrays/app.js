// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let names =[]

// 2. Declare an empty array using JS object notation to store
// student names in future.
// let names =[]

// 3. Declare and initialize a strings array

// let fruits = ["apples", "grape", "watermelon"];

// 4. Declare and initialize a numbers array.

// let ages = ["10", "11", "12"];

// 5. Declare and initialize a boolean array.

// let booleans = ["true", "false"];

// 6. Declare and initialize a mixed array

// let mixed = ["saleem", "mustafa", "hussain", "hamza", 1, 2, 3, "true", "false"];

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

// let networks = ["zong", "telenor", "onic"];

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:

// let qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// for (let i = 0; i < qualifications.length; i++) {
//    let ol =document.querySelector(`ol`)
//    ol.innerHTML+=`<li>${qualifications[i]}</li>`

// }

// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

// let movies = [
//   "top gun mavrick",
//   "jalebi",
//   "gumraah",
//   "tu jhooti mai makar",
//   "harry mets sajel",
// ];

// for (let i = 0; i < movies.length; i++) {
//    let ol =document.querySelector('ol')
//     ol.innerHTML+=`<li>${movies[i]}</li>`
// }
// let h1 =document.querySelector('h1')
// h1.innerHTML=`Length of array is : ${movies.length}`

// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// let cars = ["fit", "city", "civic", "prado", "land cruiser", "dala"];

// let h1 = document.querySelector("h1");
// h1.innerHTML = `favourite cars`;

// let p = document.querySelector("p");
// p.innerHTML = cars;

// let ul =document.querySelector("ul")
// ul.innerHTML =`<li>first index of the array :${cars.indexOf("fit")}</li>`
// ul.innerHTML +=`<li>car at first index of the array :${cars[0]}</li>`
// ul.innerHTML +=`<li>last index of the array :${cars.indexOf("dala")}</li>`
// ul.innerHTML +=`<li>car at last index of the array :${cars[5]}</li>`

// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:

// let names =['saim','baber','faheem']
// let scores =[320,230,480]
// let totalScores = 500

// let ul =document.querySelector("ul")
// ul.innerHTML += `<li>Score of ${names[0]} is ${scores[0]}. percentage : ${
//   (scores[0] / totalScores) * 100
// }% </li>`;
// ul.innerHTML += `<li>Score of ${names[1]} is ${scores[1]}. percentage : ${
//   (scores[1] / totalScores) * 100
// }% </li>`;
// ul.innerHTML += `<li>Score of ${names[2]} is ${scores[2]}. percentage : ${
//   (scores[2] / totalScores) * 100
// }% </li>`;

// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// To be asked

// 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

// let scores = [230, 256, 148, 125, 145, 654, 895, 247, 563];
// let ul = document.querySelector("ul");
// ul.innerHTML += `<li>Scores of students : ${scores}</li>`;
// scores.sort();
// ul.innerHTML += `<li>Ordered Scores of students : ${scores.reverse()}</li>`;

// 14. Write a program to sort the below mentioned array:
// let fruits = ["strawberry", "apple", "orange", "banana"];

// let ul = document.querySelector("ul");
// ul.innerHTML += `<li>Fruits list ${fruits}</li>`;

// ul.innerHTML += `<li>Ordered Scores of students : ${fruits.sort()}</li>`;

// 15. Write a program to initialize an array with city names. Copy

// 3 array elements from cities array to selectedCities array.

// let city =['karachi','lahore','islamabad','Quetta','peshawar']
// let selectedCities = city.slice(2,4)

// let ul = document.querySelector("ul");
// ul.innerHTML += `<li>cities list : ${city}</li>`;

// ul.innerHTML += `<li>selected cities : ${selectedCities}</li>`;

// 16. Write a program to create a single string from the below
// mentioned array:

// let arr = ["This", "is", " my", " cat"];
// let h1 =document.querySelector(`.head1`)
// let h1_2 =document.querySelector(`.head2`)
// let p =document.querySelector(`.p`)
// let p_2 =document.querySelector(`.p-1`)
// h1.innerHTML=`Array`
// p.innerHTML=`${arr}`
// h1_2.innerHTML=`String`
// p_2.innerHTML=`${arr.join(" ")}`

// 17. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)

//  To be asked

// 18. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)

// To be asked

// Q19 .Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
//     the following dropdown/select menu in your browser using
//     document.write() method:

// let mobile = ["Apple", "Samsung", "Xiaomi", "oneplus"];

// document.write(
//   ` <select name="" id=""><option value="">${mobile[0]}</option><option value="">${mobile[1]}</option><option value="">${mobile[2]}</option><option value="">${mobile[3]}</option></select>`
// );
