
let sounds = [
    new Audio('audio/24.mp3'),
    new Audio('audio/29.mp3'),
    new Audio('audio/36.mp3'),
    new Audio('audio/41.mp3'),
    new Audio('audio/48.mp3'),
    new Audio('audio/53.mp3'),
    new Audio('audio/60.mp3'),
    new Audio('audio/64.mp3'),
    new Audio('audio/65.mp3'),
    new Audio('audio/69.mp3'),
    new Audio('audio/77.mp3'),
    new Audio('audio/72.mp3'),
    new Audio('audio/79.mp3'),
    new Audio('audio/84.mp3'),
    new Audio('audio/96.mp3'),
]

const keyMap = {
  "g": 0,
  "h": 1,
  "j": 2,
  "h": 3,
  "k": 4,
  "l": 5,
  "m": 6,
  "n": 7,
  "q": 8,
  "a": 9,
  "b": 10,
  "c": 11,
  "d": 12,
  "e": 13,
  "f": 14
};



let AllBox = document.querySelector('.harmonium-box')
AllBox.addEventListener('click',(dets)=>{
  if(dets.target.classList.contains('box')){
    dets.target.style.transform  = 'scale(0.9)'
  }
  setTimeout(()=>{
    dets.target.style.transform  = 'scale(1)'
  },400)
})

document.addEventListener('keypress',(dets)=>{
  let key = dets.key.toLowerCase()

  let index = keyMap[key]
  let audio = sounds[index]
  
  audio.currentTime = 0
  audio.play()
  
})