//setting up our express, sequelize, and logger boilerplate functions
const express = require("express");
const logger = require("morgan");
const db = require("./models")

//setting our port where our application will be locally hosted
const PORT = process.env.PORT || 3000;

//requiring our express application and linking to our different exercise javascript schema files
const app = express();


//boilerplate express and logger code
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

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
