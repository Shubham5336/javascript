//++++++++++++++++++++++++Task-1+++++++++++++++++++++
const myArray=[1,2,3,4,5]
console.log(myArray);
//++++++++++++++++++++++++Task-2+++++++++++++++++++++
console.log(myArray[0])
console.log(myArray[myArray.length-1])
//++++++++++++++++++++++++Task-3+++++++++++++++++++++
myArray.push(6)
console.log(myArray);
//++++++++++++++++++++++++Task-4+++++++++++++++++++++
myArray.pop(myArray.length)
console.log(myArray);
//++++++++++++++++++++++++Task-5++++++++++++++++++++
myArray.shift();
console.log(myArray);
//++++++++++++++++++++++++Task-6+++++++++++++++++++++
myArray.unshift(1)
console.log(myArray);
//++++++++++++++++++++++++Task-7++++++++++++++++++++
const newArray=myArray.map(
    (items)=>{
        let values = items*2
        return values
    }
)
console.log(newArray);
//++++++++++++++++++++++++++Task-8+++++++++++++++++++
const newArray1=myArray.filter(
    (num)=>{
        if(num%2==0){
            return num
        }
    }
)
console.log(newArray1);
//+++++++++++++++++++++++++++Task-9+++++++++++++++++++
const newArray2=myArray.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(newArray2);
//+++++++++++++++++++++++++++Task-10++++++++++++++++++
for (let i = 0; i < myArray.length; i++) {
    console.log(`The element of the array is ${i}`); 
}
//++++++++++++++++++++++++++++Task-11+++++++++++++++
myArray.forEach((itmem)=> {
    console.log(itmem);}
)
//+++++++++++++++++++++++++++Task-12+++++++++++++++
