// Task 1 : Create a array of numbers 1 to 5 & log it to the console

const myArray=[1,2,3,4,5]
console.log(myArray);

// Task 2 : Access the first & last element of Array & log them in the console

console.log(myArray[0])
console.log(myArray[myArray.length-1])

// Task 3 : By using the `push` method , add a number to the end of the array & log the updated array

myArray.push(6)
console.log(myArray);

// Task 4 : By using the `pop` method , remove the last element of the array & log it to the console

myArray.pop(myArray.length)
console.log(myArray);

// Task 5 : By using the `shit` method , remove the first element of the array & log the updated array

myArray.shift();
console.log(myArray);

//Task 6 : By using the `unshift` method , add a new number to the beginning of the array & log it to the console

myArray.unshift(1)
console.log(myArray);
// Task 7 : By using the `map` method to create a new array where each number is doubled & log the new array

const newArray=myArray.map(
    (items)=>{
        let values = items*2
        return values
    }
)
console.log(newArray);
// Task 8 : By using the `filter` method to create a new array with only even numbers & log the new array

const newArray1=myArray.filter(
    (num)=>{
        if(num%2==0){
            return num
        }
    }
)
console.log(newArray1);

// Task 9 : By using the `reduce` method to calculate the sum of all numbers in the array & log it to the console

const newArray2=myArray.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(newArray2);
// Task 10 : By using `for` loop iterate over an array & log each element to the console

for (let i = 0; i < myArray.length; i++) {
    console.log(`The element of the array is ${i}`); 
}

// Task 11 : By using `forEach` method , iterate over the array & log each element to the console

myArray.forEach((itmem)=> {
    console.log(itmem);}

)
// Task 12 : Create a two-dimensional array ( matrix ) & log entire array to the console

const multidimensionalArray=[[1,2,3]
                             [4,5,6]
                             [7,8,9]
                            ]
console.log(multidimensionalArray);

// Task 13 : Access & log a specific element from the two-dimensional array

const specificElement= [2][1]
console.log(specificElement);
