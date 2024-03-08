// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop

// for (let i = 0; i < 5; i++) {
//     console.log("Hello world")

// }

// 2. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// let ul=document.querySelector(`ul`)
// let user =+prompt(`enter a number to multiply`)
// let user1 =+prompt(`enter till where you want to multiply`)

// for (let i = 1; i <= user1; i++) {
//   ul.innerHTML+=`<li>${user} X ${i}=${user*i}</li>`

// }

// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// let ul=document.querySelector(`ul`)
// let mobilePhones =[`xiaomi`,`huawei`,`honor`,`samsung`,`apple`,`oneplus`]

// for (let i = 0; i < mobilePhones.length; i++) {
//   ul.innerHTML+=`<li>${mobilePhones[i]} </li>`
// }

// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// let ul=document.querySelector(`ul`)
// let fruits =[`apple`,`banana`,`mango`,`orange`,`strawberry`]
// for (let i = 0; i < fruits.length; i++) {
//  ul.innerHTML+=`<li>${fruits[i]} <br>Element at index ${i} is ${fruits[i]}</li>`

// }

// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// let ul = document.querySelector(`ul`);
// let items = +prompt(`enter number of items`);

// ul.innerHTML = `number of items is ${items}`;

// let itemarr = [];

// for (let i = 0; i < items; i++) {
//   let askitem = prompt(`enter the value for ${i} index`);
//   itemarr.push(askitem);
//   ul.innerHTML += `<li>${itemarr[i]}</li>`;
// }

// Q7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// let h1 = document.querySelector(`h1`);
// // h1.innerHTML=`counting`
// let p = document.querySelector(`p`);
// for (let i = 1; i <= 15; i++) {
//   h1.innerHTML = `counting`;
//   p.innerHTML += `${i},`;
// }
// let h11 = document.querySelector(`.h11`);

// let p1 = document.querySelector(`.p1`);
// h11.innerHTML = `reverse counting`;
// for (let i = 15; i >= 1; i--) {
//   p1.innerHTML += `${i},`;
// }

// let h12 = document.querySelector(`.h12`);

// let p2 = document.querySelector(`.p2`);
// h12.innerHTML = `even`;
// for (let i = 0; i < 15; i+=2) {
//   p2.innerHTML += `${i},`;
// }
// let h13 = document.querySelector(`.h13`);

// let p3 = document.querySelector(`.p3`);
// h13.innerHTML = `odd`;
// for (let i = 1; i <= 15; i+=2) {
//   p3.innerHTML += `${i},`;
// }
// let h14 = document.querySelector(`.h14`);

// let p4 = document.querySelector(`.p4`);
// h14.innerHTML = `series`;
// for (let i = 2; i < 21; i+=2) {
//   p4.innerHTML += `${i}k,`;
// }

// 8 .You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");

// const bakery = ["cake", "cookie", "apple pie", "chips", "patties"];
// const checkBakery = prompt("What do you want to order sir/mam");

// for (let i = 0; i < bakery.length; i++) {
//   if (bakery[i] === checkBakery) {
//     p.innerHTML = `${checkBakery} is available on ${bakery.indexOf(
//       checkBakery
//     )}`;
//   } else {
//     console.log(`chal bhag ja yaha sai`);
//   }
// }

// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]


// 10. Write a program to identify the smallest number in the given
// array.
// A = [24, 53, 78, 91, 12]


// 11. Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]

// 12. Write a program to print multiples of 5 ranging 1 to 100
// let p =document.querySelector('p')
// for (i=5;i<101;i+=5){
//   p.innerHTML+=`${i},`
// }

// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

//Write a program to generate the following HTML table in your
// browser using JS

// let students = ["Ali", "Sami", "Taha", "Inam"];
// let scores = [58, 73, 89, 90];

// let table =document.querySelector('table')

// for (let index = 0; index < array.length<scores.length; index++) {
//   const element = array[index];
  
// }



