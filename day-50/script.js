

    function amitSeDetailsLaao(address,cb){
        console.log('fetching details...');
        
        setTimeout(() => {
            cb({lat: 125454, long: 56455464456})
        }, 2000);
    }
   


    amitSeDetailsLaao('H-block 43, bhopal',function(amitDetails){
        console.log(amitDetails);
    });
   


  function iceCreamLaao(address,cb){
        console.log('fectching iceCream data...');
        
    setTimeout(() => {
        cb({address: 'bajhot', price: 50})
    }, 4000);
  }

    iceCreamLaao('kldkl',function(dets){
        console.log(dets);
        
    })




    // Questions Solve 


/*     ## Exercise 1 — Very Easy (Warming up)

**Task (Hindi):** Ek function banao `afterDelay`

**Requirements:**
- Ye function do cheezein lega:
  1. `time` (milliseconds)
  2. `callback` function
- Given `time` ke baad `callback` call kare
- Callback ke andar `"Callback executed"` print hona chahiye

**Use case:**
> “2 second baad ek kaam karna hai”

**Goal:**
- Samajhna ki callback delay ke baad kaise execute hota hai
- Ye `setTimeout` + callback connection hai */

  
    function afterDelay(time,callback){
        setTimeout(() => {
            callback('Callback executed')
        }, time);
    }

    afterDelay(2000,function(details){
        console.log(details);
        
    })


   /*  ## Exercise 2 — Intermediate (Data flow)

**Task (Hindi):** Ek function banao `getUser`

**Requirements:**
- `getUser` `username` lega
- 1 second ke baad `callback` ko ek object de:
  - `id`
  - `username`

**Then:**
- Callback ke andar ek aur function call karo `getUserPosts`

**`getUserPosts` requirements:**
- `userId` lega
- 1 second ke baad `callback` ko `posts` ka array de

**Final output:**
- User ka `username` print ho
- Fir uske `posts` print ho

**Goal:**
- Samajhna ki ek async ka result next async ko kaise milta hai
- Callback chaining practice */


function getUser(username, cb){
    console.log('fetching user details...');
    
    setTimeout(() => {
        cb({id: 34, username: 'Tanveer'})
    }, 2000);
}

function getUserPosts(userId,cb){
    console.log('fetching all posts...');
    
    setTimeout(() => {
        cb(['red','blue','green'])
    }, 4000);
}

getUser('tanni',function(userDetails){
    console.log(userDetails);
    getUserPosts(userDetails.id,function(allPosts){
            console.log(allPosts);
            
    })
    
})