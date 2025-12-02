function add(a,b){
    return a+b;
}
let ans = add(4,9)
console.log(ans);



function greeting(guest = 'user'){
    console.log(`hy ${guest}`);
    
}
greeting('tanveer')
greeting()


function numbers(...num){
return num
}

console.log(numbers(12,12,4,4,5,5,42,5,4,668,5,52,5,55,))




function outer(){
    let a = 12;
  function inner(){
      console.log(a);
      
  }
  inner()
}
outer()



let arr = ['apple','banana','mango','nananas','five']

arr.push('kela')
console.log(arr);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
    
}


let obj = {
    name: 'Tanveer',
    age: 32,
    city: 'alwar'
}

for (const key in obj) {
    const element = obj[key];
    console.log(element);
    
}

let time = setTimeout(function(){
    console.log('times up');
    
},5000)




