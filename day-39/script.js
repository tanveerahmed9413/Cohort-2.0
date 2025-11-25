let btn = document.querySelector('button')

let result = document.querySelector('.bottom p')
let progress = document.querySelector('.inner')
let grow = 0

let time = 50 + Math.floor(Math.random()*50)



btn.addEventListener('click',()=>{
    btn.style.pointerEvents = 'none'
  let setinter =  setInterval(()=>{
        grow++
        result.innerHTML = grow+'%'
        progress.style.width = grow+'%'
      

        
    },time)
    
    setTimeout(()=>{
        clearInterval(setinter)
          btn.innerHTML = 'downloaded'
    },time*100)
})
