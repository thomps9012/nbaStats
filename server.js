//setting up our express, sequelize, and logger boilerplate functions
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const db = require("./models")

//setting our port where our application will be locally hosted
const PORT = process.env.PORT || 3000;

//requiring our express application and linking to our different exercise javascript schema files
const Player = require("./models/player.js");
const app = express();


//boilerplate express and logger code
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


//routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"))
