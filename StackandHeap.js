/*  in  js there are two types of memory
1. stack => it stores primitive data types(number boolean string null undefined symbol bigint)
2.heap => it stores non primitive data types (object , function , array)
*/
let score =33
let value=score
value= 34
console.log(score);
console.log(value);
// is case se score ki value  change nhi hogi kyuki stack dusre variable ko phele variable ki ek copy bhejta hai 
// stack sends a copy of the value to another variable who is accessing the first varibale




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let Userone ={
    name: shubham,
    age: 19
}
let Usertwo=Userone
Userone.age=20

// is case me age ki value dono jagah change ho jayegi i.e userone aur usertwo me bhi
// heap basically reference use krta hai 