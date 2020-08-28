//setting up our express, mongoose, and logger boilerplate functions
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting our port where our application will be locally hosted
const PORT = process.env.PORT || 3000;

//requiring our express application and linking to our different exercise javascript schema files
const Stats = require("./models/Stats.js");
const app = express();


//boilerplate express and logger code
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//ensuring that mongoose is connected to our local host
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

//creates our Workout database
Stats.create({ name: "Stats" })
  .then(dbStats => {
    console.log(dbStats);
  })
  .catch(({ message }) => {
    console.log(message);
  });
//routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"))

//setting up our port and console logging that the port is running correctly
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
