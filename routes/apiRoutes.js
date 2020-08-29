const router = require("express").Router();
const Player = require("../models/player.js");

router.get("/api/player", (req, res) => {
    Player.find()
        .then(dbPlayers => {
            res.json(dbPlayers);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;