const db = require("../models");
module.exports = function (app) {
    app.get("/singlePlayer/", function(req, res){
        db.Player.findOne({
            id: Math.random()
        })
        .then(console.log(res))
    })

}