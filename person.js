class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name}`);
  }
}

module.exports = Person;

//----RUN THIS CODE IN INDEX.JS
// const Person = require("./person"); //Common JS
// const person1 = new Person("Deelip", 25);
// person1.greeting();
