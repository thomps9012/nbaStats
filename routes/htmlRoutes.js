var path = require("path");

module.exports = function (app) {
    
    app.get("/player", function(req, res){
        res.sendFile(path.join(__dirname, "../public/player.html"));
    });

    app.get("/allPlayers", function(req, res){
        res.sendFile(path.join(__dirname, "../public/allPlayers.html"));
    });

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}