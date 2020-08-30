const router = require("express").Router();
const db = require("../models");
const { Player } = require("../models");
const rand = Math.random();

router.get("/api/player", (req, res) => {
    db.Player.findOne({
        where: {
            id: rand
        }
    }).then(data => {
        res.json({
            playerName: data.playerName,
            war_total = data.war_total,
            raptor_total = data.raptor_total,
            raptor_offense = data.raptor_offense,
            raptor_defense = data.raptor_defense
        })
    })

});

router.get("/api/players", (req, res) => {
    db.Player.findAll()
    .then(data => {
        res.json({
            playerName: data.playerName,
            war_total = data.war_total,
            raptor_total = data.raptor_total,
            raptor_offense = data.raptor_offense,
            raptor_defense = data.raptor_defense
        })
    })

});

module.exports = router;