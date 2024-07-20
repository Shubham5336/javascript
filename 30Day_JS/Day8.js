//Task-1 Use template literals to create a string that includes variables for a persons name and persons age and log it to the console

const person={
    name:"shubham",
    Age:20
}
console.log(`the name of the person is ${person.name} and the age of the person is ${person.Age}`);

// Task 2: create a multiline string using template literals and log it to the console

const multiLine=`
this is a multi-line string.
it can include multiple lines.
and it can include variable like ${new Date().toLocaleDateString()}`
console.log(multiLine);

// Task 3: Use array destructuring to extract the first and second elements in an array of numbers and log them to the console

const [num1,num2]=[1,2,3,4,5,6,7]
console.log(num1,num2);

//Task 4: Use object destructuring  to extract the title and author from a book object and log them to the console

const book={
    Title:"book one",
    Author:"robin"
}
const {Title,Author}=book
console.log(Author,Title);

// Task 5: Use the spread operator that to create a new array which includes the value of exisiting array and also new values and log it to the console.
const myarray=[1,2,3,4,5,6]
const newArray=[...myarray,7,8,9]
console.log(newArray);

//Task 6: Use the rest operator in a function to accept numbers of arbitary arguments, sum them and return the result .

function sum(...numbers){
    return numbers.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
}
console.log(sum(2,3,5));

// Task 7: Write a funtction and return their product , which takes two parameters , second parameter with the value of 1 , Log the result of this functin with and without the second parameter.

const product= (num1, num2=1)=>{
    return num1*num2
}
console.log(product(5));// output is 5
console.log(product(5,15));// output is 75

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console
 
const enhancedObject={
    name:"ram",
    email:"ram.google.com",
    method1(){
        console.log(`My name is ${name} and my email is ${email} `);
    },    
    method2(){
        console.log(`this is method 2 `);
     },  
}
console.log(enhancedObject);

//Task-9 Create an object with a computed property names based on variables and logs the object to the console.
const myName="name"
const age='Age'
const newObject={
    ["name"]:"shubham",
    ["Age"]:20,
    email:"shyam.github.com"
}
console.log(newObject);