// let amount = 1000;
// console.log("Your Bill Amount is $" + amount);

// let name = prompt("What is your Name?..");
// console.log("hi", name);

// let ticket = prompt("How many tickets : ");

// if(!isNaN(ticket)){
//     console.log(ticket * 5);
// } else {
//     console.log("Enter a valid Number")
// }

// function convert() {
//   const input = document.getElementById("input").value;
//   let inch = input  * (9/5) + 32;

//   const result = document.getElementById("result");
//   result.innerHTML = inch.toFixed(2) + " "+"farenheat";
// }

// let str = "If you're visiting this page"

// let str1 = "it can also be a fun way to surprise others."

// console.log(str.concat(str1));

// console.log(str.concat(" ",str1));

// console.log(str.substr(8,16))

// console.log(str1.replaceAll('i','t'))

// PRINT RANDOM STRING

// let value = "Mugesh";

// let randomLetter = value.charAt(Math.floor(Math.random() * value.length));

// console.log(randomLetter);



// TEMPLAE LITERALS



// let Fn = "mugesh";
// let Ln = "kanna";
// let city = "cbe";

// let combine = Fn + " " + Ln + " " + "Lives In " + city;
// let msg = `${Fn} ${Ln} Lives In ${city}`;

// console.log(combine); 
// console.log(msg);

// let items = 5;
// let amt = 95;

// let message = `"You have ${items}items  in your cart.
// Your bill amount is $${amt}"`;
// console.log(message)

// ARRAYS

  // let arr = [1,2,3,4,5,6,7,8,9]
  // console.log(arr.length);
  // console.log(arr[8])
  // console.log(arr[arr.length-1])

  // let array = [5, 7, 6, [1,2], "hello"];
  // // console.log(array[3][0])
  // console.log(array[4])

  let arr = ["a","c","e"]

  // arr.push('t')   //add last element in array
  // console.log(arr)

  // arr.pop()  // remove the last element in array
  // console.log(arr)

  // arr.shift()  // remove first element from array
  // console.log(arr)

  // arr.unshift("g"); //add first element in array
  // console.log(arr)

  arr.splice(2,0,'k') //add or remove or replace  the elements whereever you want with the help of index values
  console.log(arr);
  