//++++++++++++++++++++++Task-1+++++++++++++++++++++++
let num=10
if(num==0){
    console.log(`number is zero,${num}`);
}else if(num>0){
    console.log(`number is positive,${num}`);
}
else if (num<0)
{
    console.log(`number is negative,${num}`)
}
//+++++++++++++++++++++++Task-2++++++++++++++++++++++
let Age=20
if(Age=>18){
    console.log(`Eligible to vote,${Age}`);
}
else if (Age>18)
{
    console.log(`not eligible to vote,${Age}`)
}
//++++++++++++++++++++++++Task-3+++++++++++++++++++++
let num1=10
let num2=20
let num3=15
if(num1>num2 &&num1>num3){
    console.log(`num1 is greatest,${num1}`);
}else if(num2>num1 && num2>num3){
    console.log(`num2 is greatest,${num2}`);
}
else
{
    console.log(`num3 is greatest,${num3}`)
}
//+++++++++++++++++++++++++Task-4++++++++++++++++++++++
let Day=2
switch (Day) {
    case 1:
        console.log(`Today is the ${Day} day of week ie Monday`);  
        break;
    case 2:
        console.log(`Today is the ${Day} day of week ie Tuesday`);  
        break;
    case 3:
        console.log(`Today is the ${Day} day of week ie Wednesday`);  
        break;
    case 4:
        console.log(`Today is the ${Day} day of week ie Thrusday`);  
        break;
    case 5:
        console.log(`Today is the ${Day} day of week ie Friday`);  
        break;
    case 6:
        console.log(`Today is the ${Day} day of week ie Saturday`);  
        break;
    case 7:
        console.log(`Today is the ${Day} day of week ie Sunday`);  
        break;
    default:
        console.log(unvalid);
        break;
}
//+++++++++++++++++++++++++Task-5+++++++++++++++++++++++++++++++++++\
let Marks=60
switch (Marks) {
    case 20:
        console.log("E grade");
        break;
    case 40:
        console.log("d grade");
        break;
    case 60:
        console.log("C grade");
        break;
    case 80:
        console.log("B grade");
        break;
    case 100:
        console.log("A grade");
        break;

    default:
        console.log("Failed i.e F grade");
        break;
}
//++++++++++++++++++++++++++Task-6+++++++++++++++++++++++
//Odd or Even
let number=10
number%2==0? console.log(`number is even ${number}`) :console.log(`number is odd ${number}`);
//+++++++++++++++++++++++++++Task-7+++++++++++++++++++++++
// Leap year
let year=2000
if(year%4==0 && (year%100==0 || year%400==0)){
    console.log(`The Given Year is a Leap Year ${year}`);
}
else{
    console.log(`Not a leap year ${year}`);
}