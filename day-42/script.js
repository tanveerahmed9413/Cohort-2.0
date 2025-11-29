let data = [
  {
    "img": "https://images.unsplash.com/photo-1762954419322-f4fe43ece823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Aarav Sharma",
    "role": "Frontend Developer",
    "description": "Builds crisp UIs with clean code and timeless design vibes."
  },
  {
    "img": "https://plus.unsplash.com/premium_photo-1763265290072-6e127ae83e46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Zara Khan",
    "role": "Backend Developer",
    "description": "Keeps servers running smoother than old-school radio classics."
  },
  {
    "img": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    "name": "Kabir Mehta",
    "role": "UI/UX Designer",
    "description": "Believes good design never goes out of style."
  },
  {
    "img": "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    "name": "Riya Patel",
    "role": "Full Stack Developer",
    "description": "Balances frontend sparkle with backend stability like a pro."
  },
  {
    "img": "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
    "name": "Aditya Verma",
    "role": "DevOps Engineer",
    "description": "Loves automation and that classic ‘if it works, don’t touch it’ mindset."
  },
  {
    "img": "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww",
    "name": "Mehak Singh",
    "role": "QA Engineer",
    "description": "Breaks things gracefully so the final product stays solid."
  },
  {
  "img": "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",
  "name": "Neil Thomas",
  "role": "Product Manager",
  "description": "Keeps the team aligned and the vision rooted in tried-and-true principles."
},
{
  "img": "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
  "name": "Sana Iqbal",
  "role": "Content Strategist",
  "description": "Crafts stories that hit hard while respecting classic communication values."
}

]


let cardItems = document.querySelector('.card-items')




data.forEach((elm)=>{
    let div = document.createElement('div')
    div.innerHTML = `
       <div class="card">
        <div class="image">
            <img src="${elm.img}" alt="">
        </div>
        <h1>${elm.name}</h1>
        <h3>${elm.role}</h3>
        <p>${elm.description}</p>
    </div>
    `
    cardItems.appendChild(div)

})
