//++++++++++++++++++++++++Task-1++++++++++++++++++
for (let i = 1; i <=10; i++) {
    console.log(i)
    
}
//++++++++++++++++++++++++Task-2+++++++++++++++++++
for (let i = 0; i <=10; i++) {
    let element = i*5;
    console.log(element);
    
}
//++++++++++++++++++++++++Task-3+++++++++++++++++++
let temp=0;
let num=1;
while(num<=10){
    temp=temp+num;
    console.log(temp);
    num++;
}
//+++++++++++++++++++++++++Task-4+++++++++++++++++++
let reverse=10
while (reverse>=0) {
    console.log(reverse);
    reverse--;   
}
//+++++++++++++++++++++++++++Task-5+++++++++++++++++++
let num1=1
do {
    console.log(num1);
    num1++
} while (num1<=5);

//+++++++++++++++++++++++++++Task-6+++++++++++++++++++
let fact=5
do {
    let result=1;
    result=result*fact;
    console.log(result);
    fact--;
} while (fact>0);

//++++++++++++++++++++++++++Task-8++++++++++++++++++++
for (let i = 0; i <=10; i++) {
    if (i==5) {
        continue;       
    }
    console.log(i);
    
}
//+++++++++++++++++++++++++++Task-9+++++++++++++++++++
for (let i = 1; i <=10; i++) {
    if (i==7) {
        console.log(`the value of i is${i}`);
        break;       
    }
    console.log(i);
    
}
