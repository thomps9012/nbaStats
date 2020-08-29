let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/player", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let playerSeed = [
    {
        name: "LeBron James",
        season: 2014,
        war_total: 15.10,
        raptor_total: 5.18,
        raptor_offense: 6.05,
        raptor_defense: -.87
        
    }
];

db.Workout.deleteMany({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
