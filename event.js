// https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064750?start=19#notes

const EventEmitter = require("events");

// inherited the class EventEmitter
// https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064750?start=441#notes
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Observer
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// create event (click button)
myEmitter.emit("newSale", 9);
