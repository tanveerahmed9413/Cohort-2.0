

let input = document.querySelector('input')
let temp  = document.querySelector('.temp')
let description  = document.querySelector('.description')
let city  = document.querySelector('.city')
let checkWeatherbtn  = document.querySelector('button')

// input.addEventListener('input', ()=>{
//     console.log(input.value);
// })

 function getWeather(city){
    let apikey = 'b92e57938eaebc6ded1fcf3a2f5b4bc3'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`

   fetch(url).then(rowData =>{
    if(!rowData.ok){
        throw new Error('HTTP error')
    }
    
    return rowData.json()
   })

 .then(realData =>{
    console.log(realData);
    if(realData.cod  !== 200){
        temp.innerHTML = ''
        description.innerHTML = "city not found"
        city.innerHTML = ""
        return
    }
    
    temp.innerHTML = `${Math.floor(realData.main.temp)}°C`
    description.innerHTML = realData.weather[0].description
    city.innerHTML = realData.name
 })
   


}
checkWeatherbtn.addEventListener('click',()=>{
    let cityName =  input.value.trim()

        temp.innerHTML = ''
        description.innerHTML = ''
        city.innerHTML = ''

     if(input.value === ''){
        city.innerHTML = 'Please enter city'
        return
    }

    getWeather(cityName)

})