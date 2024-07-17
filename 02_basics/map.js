const myarray=[1,2,3,4,5,6,7,8,9,10]
//const result=myarray.map((num)=>num*10 )
//console.log(result);
// is method ko chaining kehte hai 
const chain=myarray
            .map((num)=>num*10)// yaha par num ki value my array se li gyi hai
            .map((num)=> num+1)// yaha par num ki value previous method pe depend karti hai
console.log(chain);