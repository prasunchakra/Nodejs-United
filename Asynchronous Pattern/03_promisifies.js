// Now, if our callback functions are all structured like this, 
// where they pass the error as the first argument to the callback,
// and they pass any additional values as second, or third, or fourth arguments to the callback,
//  then we can quickly convert these functions into promises using a utility that ships with Node JS.

let { promisify } = require('util')
var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() =>
            callback(null, `the ${seconds} second delay is over.`),
            seconds
        );
    }
}

delay(2, (error, message) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(message);
    }
});

let promiseDelay = promisify(delay)

promiseDelay(2)
    .then(console.log)
    .catch((err) => console.log(err.message))