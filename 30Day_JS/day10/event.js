// task-1
const one = document.querySelector('.button');
one.addEventListener('click', function(e){
    document.textContent('this is not a button')
});
// task-2
const two= document.getElementById("two");
two.addEventListener('dblclick', (e)=>{
    if (two.style.visibility==="hidden") {
        two.style.visibility==="visible"     
    }else{
        two.style.visibility==="hidden"
    }
})
