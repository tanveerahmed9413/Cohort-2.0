// let pr = new Promise(function(res,rej){
//     let success = true
//     if(success === true){
//         res('data success ho gaya hai ')
//     }
//     else{
//         rej('data fialed ho raha hai ')
//     }
// })

// pr.then(function(res){
//     console.log(res);
    
// })
// .catch(function(rej){
//     console.error(rej);
    
// })



function userLo(){
    return new Promise(res =>{
        console.log('fetching users...');
        
        setTimeout(() => {
            res('user mil gaya')
        }, 1000);
    })
}

function postLo(){
     console.log('fetching posts...');
    return new Promise(res =>{
        setTimeout(() => {
            res('post mil gai')
        }, 1500);
    })
}

async function dashboard() {
    let user = await userLo()
    console.log(user);

    let post  = await postLo()
    console.log(post);
    
    
}

dashboard()



async function dataLo() {
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/photos')
        let data =  await res.json()
        console.log(data[0]);
        
    }
    catch(error){
        console.log(error);
    }
}

dataLo()