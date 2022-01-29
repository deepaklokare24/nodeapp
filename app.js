const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

logger("Hi dude");

console.log(__dirname);
console.log(__filename);

const pathObj = path.parse(__filename);

console.log(pathObj);

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.uptime());

//const files = fs.readdirSync("./");
// console.log(files);

fs.readdir("./", function (err, files) {
  if (!err) console.log(err);
  console.log(files);
});
