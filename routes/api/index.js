const Player = require("./player");
const Team = require("./team");
const router = require("express").Router();


router.use(Player);
router.use(Team);

module.exports = router;