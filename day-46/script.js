let para = document.querySelector('p')
let text = para.innerHTML;

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoppqrstuvwxyz'
let iteratioa = 0
function randomText(){
    let str = text.split('').map((char,index)=>{
        if(index<iteratioa){
            return char
        }
    return    characters.split('')[Math.floor(Math.random() * characters.length)]
    }).join('')

    para.innerHTML = str
    iteratioa += 0.25
}

para.addEventListener('mouseenter',()=>{
 setInterval(randomText,20)

})




