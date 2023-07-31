//Musketeers
//Write a program that:

//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

//const musketers = ["Athos","Portos","Aramis"];

//Shows each array element using a for loop.

// for(let i = 0; i < musketers.length; i++) {
//     console.log(musketers[i]);
// }
 
//Adds the "D'Artagnan" value to the array.

// musketers.unshift("D'Artagnan")
// //Shows each array element using the forEach() method.
//     musketers.forEach(ele =>{
//     console.log(ele)
// });
//Remove poor Aramis.
//     musketers.pop();
//     console.log(musketers)

// //Shows each array element using a for-of loop.

// const musketeers = ["Athos","Portos","Aramis","D'Artagnan"];
// for (const musketeer of musketeers) {
//     console.log(musketeer)
// }

//Number of days in a month
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
//   
let n = 100
for (let i = 1; i <= n ; i++ ) {

if  ( i % 3 === 0 && i % 5 === 0) 
    console.log('FizzBuzz')

else if ( i % 5 === 0 ) 
    console.log('Buzz')

else if 
( i % 3 === 0) 
    console.log('Fizz')
 
  else 
        console.log(i)
 }

//  for (let i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }