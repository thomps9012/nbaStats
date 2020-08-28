const router = require("express").Router();
const Player = require("../models/player.js");
const Team = require('../models/team.js');

router.get("/api/player", (req, res) => {
    Player.find()
        .then(dbPlayers => {
            res.json(dbPlayers);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/team", (req, res) => {
    Team.find()
        .then(dbTeams => {
            res.json(dbTeams);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;