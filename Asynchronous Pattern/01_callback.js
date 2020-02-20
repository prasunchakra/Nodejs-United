// // Direct Style
// function hideString(str) {
//     return str.replace(/[a-zA-Z]/g, 'X')
// }
// let hidden = hideString("Hello World")
// console.log(hidden)


// // Continuation Passing Style (CPS)
// function hideString(str, done) {
//     done(str.replace(/[a-zA-Z]/g, 'X'))
// }
// hideString("Hello World", (hidden) => {
//     console.log(hidden)
// })


// // Continuation Passing Style (CPS) as callback
// function hideString(str, done) {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'))
//     })
// }
// hideString("Hello World", (hidden) => {
//     console.log(hidden)
// })

// Another Way to introduce asynchronous behaviour 
function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000)
}
delay(2, () => {
    console.log("First Delay")
    delay(2, () => {
        console.log("Second Delay")
    })
})

console.log('End')