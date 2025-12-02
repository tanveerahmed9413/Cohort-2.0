let Increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')
let result = document.querySelector('.result')

let count = 0;

result.innerHTML = count
Increment.addEventListener('click',()=>{
    count++
    result.innerHTML = count
})
decrement.addEventListener('click',()=>{
    if(count > 0){
        count--
    }
    result.innerHTML = count
})




