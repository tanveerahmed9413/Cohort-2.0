// 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

let obj = {
    name: 'Tanveer',
    email: 't@t.t',
    login: function(){
     console.log('User logged in');
     
    }
}

obj.login()

// 2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class Car3{
    constructor(name,price,modle){
       this.Name  = name
        this.price = price
        this.modle = modle
    }
}

 let car1 = new Car3('swift',59000,2020)
 let car2 = new Car3('thar',220000,2025)
 let car3 = new Car3('breza',80000,2024)
 let car4 = new Car3('creata',140000,2022)
 let car5 = new Car3('scorpio',2300000,2026)



//  3.	Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    name: 'bag',
    price:  999,

    discountedPrice: function(){
        return this.price - 299
    }
}
console.log(product.discountedPrice());

 


// 4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed


class Car{
constructor(){
    this.brand = 'maruti';
    this.speed = 170;
}
drive(){
    return this.brand + ' ' + this.speed;
}
}


let newCar = new Car()
console.log(newCar);




// 5.	Create two different car objects from the same class and verify that their data is different.


// 6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?



// 7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

class Student{
    constructor(name,rollNumber){
       this.name = name
       this.rollNumber = rollNumber
    }

    std(){
        console.log(this.name + " " + this.rollNumber);
        
    }
}

let std1 = new Student("tanveer ahmed",500114)
console.log(std1);



// 9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function
// Inside both, print this and observe the difference.
// The goal is to clearly understand how this works and when it changes.


let object = {
    normanFnc: function(){
     console.log(this);
     
    },
    
    arrowFnc: ()=>{
        console.log(this);

    },
}

object.normanFnc()
object.arrowFnc()




// 10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.


function Users(name,email){
   this.name = name;
   this.email = email;

//    this.login = function(){
// console.log(`${this.email} user login`);
   

   Users.prototype.login = function(){
console.log(`${this.email} user login`);
   }
}

// 13. Create a function that prints this.name. 
function thismethod(){
    console.log(this.name);
}

thismethod()

let obj4 = {
  name: 'Tanveer',
}


thismethod.call(obj4)
thismethod.apply(obj4)
let bind = thismethod.bind(obj4)
bind()





// sheet II 


// 1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 2.	Add one more method to the same object that increases the price by 10 percent.

let laptop = {
    brand: 'HP',
    price: 8890,

    start: function(){
        console.log('laptop started');  
    },

    priceIncrease: function(){
      let incPrice = ( this.price * 10 ) / 100
      let total = this.price + incPrice;
      console.log(total);
    },
}

laptop.priceIncrease()


// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.





// 4.	Create a class named Employee that stores:
// name
// salary

class Employee{
    constructor(name,salary){
        this.name = name
        this.salary = salary
    }
}
// 5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

let employee1 = new Employee('nitesh',5599)
console.log(employee1);

let employee2 = new Employee('rajeev',2288)
console.log(employee2);

let employee3 = new Employee('anshu',9966)
console.log(employee3);



// 7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount{
    constructor(accountHolderName,balance = 0){
        this.accountHolderName = accountHolderName
        this.balance = balance
    }

    deposite(amount){
        if(amount > 0){
           this.balance += amount
           console.log(this.balance);
           
        }else{
            return 'amount must be positive'
        }
         
    }
}

let BankAccount1 = new BankAccount('chintu',100)

console.log(BankAccount1);

BankAccount1.deposite(500)
console.log(BankAccount1);



/* 	11.	Create an object named profile with a property username and a method printName that logs this.username.
	12.	Call the method normally and observe the output.
	13.	Store the method in a separate variable and call it.
Observe what happens to this and explain why.
	14.	Modify the code so that this works correctly again. */

    let userData = {
        name: 'tanveer',
        profile: 'instagram',
        usrname: 'tanveer.ahmed.9413',

        printName: function(){
            console.log(this.usrname);
        }
    }

    userData.printName()


    /* 	15.	Create a constructor function called Vehicle that accepts type and wheels.
	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
	17.	Move the same method to Vehicle.prototype and repeat the test.
	18.	Explain why the prototype approach is preferred. */

    class Vehicle{
        constructor(type,wheels){
            this.type = type
            this.wheels = wheels

            this.describe = function(){
                console.log(`${this.type} ${this.wheels}`);
                
            }
        }

    }

    let vehicle1 =  new Vehicle('bugati',4)
    let vehicle2 =  new Vehicle('auto',3)
    let vehicle3 =  new Vehicle('bike',2)

    vehicle1.describe()
    vehicle2.describe()

    console.log(vehicle1.describe == vehicle2.describe);


    // 	19.	Create a function showBrand that prints this.brand.
	// 20.	Create two different objects with brand values.
	// 21.	Use call to execute showBrand for both objects.
	// 22.	Explain what problem call is solving here.


    function showBrand(){
        console.log(this.brand);
    }

    let polo = {
      brand: 'polo'
    }
    
    let puma = {
        brand: 'puma'

    }

    showBrand.call(polo)
    showBrand.call(puma)



  /*   23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
	24.	Create an object with a name property.
	25.	Use apply to call introduce using the object and an array of arguments.
	26.	Explain in simple words how apply differs from call. */

    function user(city,role){
        console.log('Name ' , this.name);
        console.log('Role', role);
        console.log('City ', city);
        

    }
    
    let persone = {
        name: 'Tanveer'
    }

    const args = ["San Francisco", "Software Engineer"];
user.apply(persone,args)
    