//Musketeers
//Write a program that:

//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

const musketers = ["Athos","Portos","Aramis"];

//Shows each array element using a for loop.

// for(let i = 0; i < musketers.length; i++) {
//     console.log(musketers[i]);
// }
 
//Adds the "D'Artagnan" value to the array.

musketers.unshift("D'Artagnan")
// console.log(musketers[0]);
// console.log(musketers.length)

//Shows each array element using the forEach() method.
    
// musketers.forEach(ele =>{
//     console.log(ele)
// });
//Remove poor Aramis.
musketers.pop();
// console.log(musketers)

//Shows each array element using a for-of loop.

const musketeers = ["Athos","Portos","Aramis","D'Artagnan"];
for (const musketeer of musketeers) {
    console.log(musketeer)
}