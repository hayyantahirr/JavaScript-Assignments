// 
// Q1

// for (let i = 0; i < 5; i++) {
//   console.log(`hello world` )

// }


// Q3

// let ask = +prompt("enter a number to multiply ");
// let ask1 = +prompt("how many times do you want to print this table ");
// for (let i = 1; i <= ask1; i++) {
//   console.log (`${ask} x ${i} = ${i*ask}`)
// }







// Q5 

// let fruits = ["apple"," banana", "mango", "orange", "strawberry"]

// for (let i = 0; i < fruits.length; i++) {
 
// let ol=document.querySelector("ol")
// let ul=document.querySelector("ul")

// ol.innerHTML+=[`<li>${fruits[i]}</li>`]
// ul.innerHTML +=`<li>the index of ${fruits[i]} is ${0}</li>`
    
// }

// Q6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user

// let ask =+prompt("enter the number of items ")

// for (let i = 0; i < ask; i++) {
    
//     let askItem =prompt("enter the name of items ")
//     let h1=document.querySelector("h1")
//     h1.innerHTML=`Number of items are :${ask}`

//     let div =document.querySelector("div")
//     div.innerHTML+=askItem
// }






// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let abc = prompt("welcome to abs bakery what would you like to order")
let sweets = ["cake", "apple pie", "cookie", "chips", "patties"]

for (let i = 0; i < sweets.length; i++) {
if (sweets[i]===abc) {
    let div = document.querySelector("div")
    div.innerHTML=`${abc}is available at index ${i}`
}

}

