const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise Consume');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve({username: "Mohit", email: "Chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user);
})


const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve ({username: "mohit", password: "123"})
        } else {
            reject('ERROR : Something web')
        }
    }, 1000)
}) 
