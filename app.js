const Logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const http = require("http");
const _ = require("underscore");
const logger = new Logger();

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

// working with node events

// Listening an event
//emitter.addListener()
logger.on("messageLogged", function (arg) {
  console.log("listening to messageLogged event", arg);
});

logger.log("Hi dude");

//--------Http Module-------

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hey Hi.. How you doing...?");
    res.end();
  }

  if (req.url === "/api/courses") {
    let courses = [1, 3, 2, 5];
    let doesContains = _.contains(courses, 4);
    console.log("Does courses contain id with 4? ", doesContains);

    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening on port 3000...");
