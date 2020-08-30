const db = require("../models");
module.exports = function (app) {
    app.get("/singlePlayer/", function(req, res){
        db.raptorseed.findAll({ })
        .then(console.log(res))
    })

}