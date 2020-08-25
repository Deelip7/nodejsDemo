// const Person = require("./person"); //Common JS
// const person1 = new Person("Deelip", 25);
// person1.greeting();

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log(`Called Listener`, data));

logger.log("hello world");
