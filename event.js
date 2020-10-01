// https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064750?start=19#notes

const EventEmitter = require("events");
const http = require("http");

// inherited the class EventEmitter
// https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064750?start=441#notes
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Observers
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

// Obervers
// meaning the server emit the request twice, and the listener received twice
// https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064750?start=746#notes
server.on('request', (req, res) => {
  console.log("Request received!");
  // console.log(req.url);
  res.end("Request received");
});

server.on('request', (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  console.log("Server Closed");
});

// event loop waiting for I/O (Event Emitter)
// https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064750?start=657#notes
server.listen(8000, "127.0.0.1", ()=>{
  console.log("Waiting for requests...");
});
