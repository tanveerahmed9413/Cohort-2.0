
 let arr = [
   
      'https://images.unsplash.com/photo-1762325658409-5d8aa0e43261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
      'https://plus.unsplash.com/premium_photo-1763369800370-a89b6fb2a3d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1763063556535-5f6174a5c5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1763226903034-e2f60d2a5164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1762325658226-3a8bc64a6fd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1763034282940-97ab0a6a24e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1762957044542-583a86b753a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1762767527282-76e8a5d326e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1761839258623-e232e15f7ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1762810502196-640a42cfb402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1762793193633-c26f3d34e710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D',
      
   
  ]



let main = document.querySelector('main')
let x = Math.floor(Math.random()*100)
let y = Math.floor(Math.random()*100)

let random = Math.floor(Math.random()*arr.length)

main.addEventListener('mousemove',(e)=>{
    let rendamImage = arr[random]

   let div =  document.createElement('div')
   div.style.height = '300px'
   div.style.width =  '250px'

   div.style.backgroundSize = 'cover'
   div.style.backgrountRepeat = 'no-repeat'
   div.style.position = 'absolute'
   div.style.backgroundPosition = 'center'

   div.style.left = e.x + 'px'
   div.style.top = e.y + 'px'

   main.appendChild(div)

setTimeout(() => {
       div.style.backgroundImage  = `url(${rendamImage})`
       div.style.opacity = '1'
       div.style.transition = '0.9s'
}, 1000);
console.log(div);


setTimeout(()=>{
 div.remove()
},2000)


})



