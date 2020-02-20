var fs = require('fs');
var { promisify } = require('util');
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
})

Promise.race([
    delay(5),
    delay(2),
    delay(3),
    beep()
]).then(() => readdir(__dirname))
    .then(console.log);

Promise.all([
    delay(5),
    delay(2),
    delay(3),
    beep()
]).then(() => readdir(__dirname))
    .then(console.log);