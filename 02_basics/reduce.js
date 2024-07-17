const myarr=[1,2,3,4]
//General form 
/*const total= myarr.reduce(function (accumulator, currentvalue){
    console.log(`accumulator:${accumulator} , currentvalue:${currentvalue}`);
    return accumulator+currentvalue;
},0)*/
// By Using arrow function(shorter form)
const total=myarr.reduce((acc,curval)=> acc+curval,0)
console.log(total);