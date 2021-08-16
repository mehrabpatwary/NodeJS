const fs = require('fs');

console.log(fs.existsSync('demo1.text'));

// fs.unlink('demo1.text', (err) => {
//     if (err) console.log(err);
//     else console.log("Successful");
// })