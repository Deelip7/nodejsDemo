const EventEmitter = require("events");

const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call Event
    this.emit(`Message`, { msg });
  }
}

module.exports = Logger;
