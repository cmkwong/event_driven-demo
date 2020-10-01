const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Oberserver
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
