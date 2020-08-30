const router = require("express").Router();
const db = require("../models");
const Player = require("../models/Player")
const rand = Math.random();

router.get("/api/player", (req, res) => {
    Player.findOne({res},
        function(err, data){
            if (err) throw err;
            console.log(data);
        })
});

// router.get("/api/players", (req, res) => {
//     db.Player.findAll()
//     .then(data => {
//         res.json({
//             // playerName: data.playerName,
//             // war_total = data.war_total,
//             // raptor_total = data.raptor_total,
//             // raptor_offense = data.raptor_offense,
//             // raptor_defense = data.raptor_defense
//         })
//     })

// });

module.exports = router;