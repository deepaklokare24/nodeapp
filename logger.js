const EventEmitter = require("events");
const url = "http://mylogger.com/myapp";

class Logger extends EventEmitter {
  log(message) {
    console.log("message: ", message);
    // Emitting an event
    this.emit("messageLogged", { id: 1, url: url });
  }
}

module.exports = Logger;
