const promiseOne = new Promise(function(resolve, reject){
    // DO Async task like DB calls, cryptoGraphy, network calls
    setTimeout(function(){
        console.log("Async task completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consume");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2")
        resolve()
    },1000)
}).then(function(){
    console.log("resolved task 2")
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "chai",
            email: "abc@example.com"
        })
    } ,1000)
})

promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Ankit", email:"abc@example.com"})
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"23355654"})
        }else{
            reject('ERROR: JS went Wrong')
        }
    }, 1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise5()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

getAllUsers()