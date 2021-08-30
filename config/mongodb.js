const mongoose = require("mongoose");
require("dotenv").config();

// const server = 'mongodb://localhost:27017'
const server = process.env.MONGOURI;
console.log(server);
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(server, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Mongo connection successful");
      })
      .catch((err) => {
        console.log("Database connection error", err);
      });
  }
}
module.exports = new Database();
