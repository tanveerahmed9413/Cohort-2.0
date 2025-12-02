// // 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.


// function runTwice(fn){
//     fn()
//     fn()


// }

// function greet(){
//     console.log('welcome');
    
// }
// runTwice(greet)


// // 2. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.




// let user = {Name: 'tanver', age: 34}

// function destructuring({Name, age}){
//     console.log(`Name ${Name} age ${age}`);
    
// }

// destructuring(user)



// // 3. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// let users = {

//    fnc1: function (){
//         console.log(this);
        
//     },

//     fnc2: () =>{
//         console.log(this);
        
//     } 
// }

// users.fnc1()
// users.fnc2()






// // 4. Given an array of numbers, use `map()` to create a new array where each number is squared.


// let arr = [34,3,3,5,7,54,4,3]

// let newarr = arr.map(function(val){
//      return   val * val
// })
// let nwarr = arr.map(a => (a * a))

// console.log(nwarr);


// console.log(newarr);



// // 5. Use `filter()` to get only even numbers from an array.

// let number = [34,23,54,34,65,4,6,4,7]

// let nwn = number.filter(n => n % 2 === 0)
// console.log(nwn);




// // 6. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let salary = [ 1000, 2600,3600]
// let newsalary = salary.reduce(function(acc,val){
//     return acc + val
    
// },0)

// console.log(newsalary);





// // 7. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

// let names = ['tnaveer','ali','rajeev','jeev','kal']
// console.log(names.some(n =>  n.length > 3));
// console.log(names.every(n =>  n.length > 3));



// // 8. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

// let obj = {

//     name: 'tnveer',
//     age: 89,
//     city: 'khairthal'
// }
// Object.freeze(obj)
// obj.name = 'veer'
// // Object.seal(obj)


// // 9. Create a nested object (`user → address → city`) and access the city name inside it.

// let userdetail = {
//     name: 'veeer',
//     age:20,
//     address: {
//         city: 'khairthal',
//         pincode: 301404
//     }
// }

// console.log(userdetail.address.city);



// let names = [
//   'Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Charlotte', 'Elijah', 'Amelia', 'James', 'Sophia',
//   'William', 'Isabella', 'Benjamin', 'Ava', 'Lucas', 'Mia', 'Henry', 'Evelyn', 'Theodore', 'Luna',
//   'Charles', 'Elizabeth', 'Daniel', 'Grace', 'Matthew', 'Chloe', 'Samuel', 'Victoria', 'Joseph', 'Natalie',
//   'David', 'Sarah', 'Michael', 'Hannah', 'Thomas', 'Lily', 'Christopher', 'Addison', 'Andrew', 'Leah',
//   'Ryan', 'Zoe', 'Nathan', 'Stella', 'Caleb', 'Maya', 'Dylan', 'Aubrey', 'Isaac', 'Savannah',
//   'Luke', 'Audrey', 'Gabriel', 'Bella', 'Anthony', 'Claire', 'Joshua', 'Violet', 'Owen', 'Aurora',
//   'Adam', 'Skylar', 'Brandon', 'Lucy', 'Connor', 'Anna', 'Julian', 'Elena', 'Adrian', 'Caroline',
//   'Ethan', 'Piper', 'Austin', 'Ruby', 'Jason', 'Eva', 'Leo', 'Maria', 'Zachary', 'Jade',
//   'Alex', 'Nicole', 'Tyler', 'Allison', 'Christian', 'Ashley', 'Jeremy', 'Brooke', 'Kevin', 'Julia',
//   'Patrick', 'Taylor', 'Sean', 'Lauren', 'Brian', 'Kayla', 'Jeffrey', 'Megan', 'Keith', 'Aria'
// ];



// let input =document.querySelector('input');
// let result = document.querySelector('p')




// let product = [
//   {id: 1, name: 'laptop', qty: 1},
//   {id: 2, name: 'mobile', qty: 1},
//   {id: 3, name: 'tablate', qty: 1}
// ]


// product.forEach(val =>{
//     console.log(`your id is ${val.id} and product name in ${val.name} and quantity ${val.qty}`);
    
// })


// let str = 'SearchGoogleortypeaURL'


// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i])
// }



// function isPrime(num){
//     if(num <= 1){
//         return false
//     }

//    for(let i = 2; i <= Math.sqrt(num); i++){
//     if(num % 2 == 0){
//         return false
//     }
//    }
//    return true
// }

// console.log(isPrime(1));


// console.log(Math.floor(Math.sqrt(49)));



