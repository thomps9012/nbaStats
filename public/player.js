const router = import("../routes/apiRoutes")

router.get("/api/player", (req, res) => {
    Player.find()
        .then(dbPlayers => {
            res.json(dbPlayers);
        })
        .catch(err => {
            res.json(err);
        });
});

function createPlayerCard(res) {
    var playerName = res.playerName;
    var war_total = res.war_total;
    var raptor_total = res.raptor_total;
    var raptor_offense = res.raptor_offense;
    var raptor_defense = res.raptor_defense;

    // create html content for card
    var card = $("<div class='card'>");
    var cardBody = $("<div class='card-body'>");
    var title = $("<h3-class='card-title'>").text(playerName);
    var raptorWar = $("<p class='card-text'>").text("RAPTOR WAR: " + war_total);
    var raptorTotal = $("<p class='card-text'>").text("RAPTOR TOTAL: " + raptor_total);
    var raptorOffense = $("<p class='card-text'>").text("RAPTOR OFFENSE: " + raptor_offense);
    var raptorDefense = $("<p class='card-text'>").text("RAPTOR DEFENSE: " + raptor_defense);

    // merge card res and add to page
    cardBody.append(title, raptorWar, raptorTotal, raptorOffense, raptorDefense);
    card.append(cardBody);
    $(".player-stats-card").append(card);
}

