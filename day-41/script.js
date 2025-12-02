



let img = document.querySelector('.card .middle img')
let love = document.querySelector('.card .middle #love')
let like = document.querySelector('.card .bottom #like')
// console.log(img);

let btn = document.querySelector('.card .top .right h3')
btn.addEventListener('click',()=>{


    if(btn.innerText === 'Follow'){
        btn.innerHTML = 'UnFollow';
    }else{
        btn.innerHTML = 'Follow'
    }
})

img.addEventListener('dblclick',()=>{
    love.style.opacity = 1
    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
   
    like.style.color = 'red'
    console.log(like);
    
   
    

    
    setTimeout(()=>{
        love.style.opacity = 0
         love.style.transform = 'translate(-50%, -300%) scale(1) rotate(60deg)';
    },600)
    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)';
    }, 1000);
    // setTimeout(() => {
    //     love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
    // }, 1000);
    
})

