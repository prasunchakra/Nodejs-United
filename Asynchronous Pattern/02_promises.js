let delay = (seconds) => new Promise((resolve, reject) => {
    if (seconds > 5) {
        throw new Error("Test Error")
    } else if (seconds > 3) {
        reject('The Time is too long')
    }
    setTimeout(() => {
        resolve('The Delay has finished')
    }, seconds * 1000)
})

delay(4)
    .then(message => console.log(message))
    .then(() => "Console log takes the first argument and logs it to the console")
    .then(console.log)
    .catch(error => console.log(error)) //if the error is not catched:: UnhandledPromiseRejectionWarning 

console.log("***** The End ******")
