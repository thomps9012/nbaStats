var path = require("path");

module.exports = function (app) {
    
    app.get("/player", function(req, res){
        res.sendFile(path.join(__dirname, "../public/player.html"));
    });

    app.get("/team", function(req, res){
        res.sendFile(path.join(__dirname, "../public/team.html"));
    });

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}