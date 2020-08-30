const Sequelize = require('sequelize');
const Sequelize = require('sequelize');
const Player = require('../models/player.js');

let playerSeed = [
    {
        name: "LeBron James",
        season: 2014,
        raptor_offense: 6.05,
        raptor_defense: -.87,
        raptor_total: 5.18,
        war_total: 15.10    
    }
];

const seed = () => {
  return Player.bulkCreate(playerSeed)
}

seed()
.then(() => {
  process.exit();
});