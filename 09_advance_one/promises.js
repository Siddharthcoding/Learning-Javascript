// creating a promise

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, network, cryptography

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()    // when it executes get connnected to .then
    }, 1000)
})

// consuming promise

// resolve is linked to .then (gives a callback)
promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){     // since promise is not stored in varaible directly execute
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Siddharth", email: "sid@google.com"}) // passing these to then
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Siddharth", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username        // to next chain
}).then( (username) => {        // chaining
    console.log(username);
}).catch(function(error){       // catch error from reject
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))  // always executed


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://randomuser.me/api/') // returns a promise
//         // console.log(response);
//         const data = await response.json()   // this also takes time
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://randomuser.me/api/')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))