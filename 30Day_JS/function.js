//++++++++++++++++++++++Task-1++++++++++++++++++++++++++++
const check=function(num){
    if(num%2==0){
        console.log(`The given number is even ${num}`);
    }
    else{
        console.log(`The given number is odd ${num}`);
    }
}
check(5)
//+++++++++++++++++++++Task-2+++++++++++++++++++++++++++
const square=function(num){
    let result=num*num;
    console.log(result);
}
square(6)
//+++++++++++++++++++++Task-3+++++++++++++++++++++++++++
const compare=function(num1,num2){
    if(num1>num2){
        console.log(`num1 is greater${num1}`);
    }
    else{
        console.log(`num2 is greater${num2}`);
    }
}
compare(5,3)
//+++++++++++++++++++++Task-4++++++++++++++++++++++++++++
const concat=function(string1,string2){
    let result=(string1.concat(string2))
    console.log(result);
}
concat("hello"," world")
//++++++++++++++++++++++Task-5++++++++++++++++++++++++++++
const sum = (num1,num2)=>{
    let Add=num1+num2
    console.log(Add);
}
sum(5,15)
//++++++++++++++++++++++Task-6+++++++++++++++++++++++++++++
const contain=(string,char)=>{
    if (string.includes("char")){
        console.log(`The given string ${string}contains the substring`);     
    } else {
        console.log(`The given string ${string} does not contains the substring ${char} `);   
    }
}
contain("hello","d")
//++++++++++++++++++++++Task-7+++++++++++++++++++++++++++++
const product=function(num1,num2){
    let result=num1*num2;
    console.log(result);
}
product(5,3)
//++++++++++++++++++++++++Task-8+++++++++++++++++++++++++++
const greet=function(name,age){
    console.log(`Hello ${name} welcome to our website`);
}
greet("shubham",15)
//+++++++++++++++++++++++++task-9+++++++++++++++++++++++++
/*const call=function(num){
    const high=function(num){
        for (let i = 0; i <=num; i++) {
            console.log(`the function has been called for the ${i} time`);    
        }
        console.log();
    }
}
call(5)*/