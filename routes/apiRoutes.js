const db = require("../models");

module.exports = function (app) {
    // api call for retrieving all players information
    app.get("/api/allPlayers", function(req, res){
        db.Player.findAll()
        .then(allPlayers => {
            res.json(allPlayers)
        })
        .catch(err => {
            res.json(err)
        })
    })
    // api call for retrieving single player info
    app.get("/api/singlePlayer", function(req, res){
        db.Player.findAll({
            where: {
                id: Math.floor(Math.random()*Math.floor(1000)) 
            }
        }).then(singlePlayer => {
            res.json(singlePlayer)
        })
        .catch(err => {
            res.json(err)
        })
    })
}