$(document).ready(function () {
    
     getSinglePlayer()
     


function getSinglePlayer(){
    $.get("/api/singlePlayer", function(player){
        console.log(player)
 
    var playerName = player[0].name;
    console.log(playerName);
    var war_total = player[0].war_total;
    var raptor_total = player[0].raptor_total;
    var raptor_offense = player[0].raptor_offense;
    var raptor_defense = player[0].raptor_defense;
    
    function playerImg(playerName){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=" +playerName+ "%20" +playerName+ "&safeSearch=false",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                "x-rapidapi-key": "dc8216029fmshb1c7f22de839b04p1bb28djsne869df648633"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            let src = response.value[0].url;
            console.log(src);
            localStorage.setItem("img-url", src);
        });
    }
    playerImg(playerName);

    
    
    // create html content for card
    var card = $("<div class='card'>");
    
    var cardBody = $("<div class='card-body'>");
    var title = $("<h3 class='card-title'>").text(playerName);
    var raptorWar = $("<p class='card-text'>").text("RAPTOR WAR: " + war_total);
    var raptorTotal = $("<p class='card-text'>").text("RAPTOR TOTAL: " + raptor_total);
    var raptorOffense = $("<p class='card-text'>").text("RAPTOR OFFENSE: " + raptor_offense);
    var raptorDefense = $("<p class='card-text'>").text("RAPTOR DEFENSE: " + raptor_defense);

    // merge card res and add to page
    cardBody.append(title, raptorWar, raptorTotal, raptorOffense, raptorDefense);
    card.append(cardBody);
    $(".player-stats-card").append(card);
})
}


})

// var delay = 1000000000;
// function addImg(){
// let src = localStorage.getItem("img-url").src
// var img = $("<img src=" +src+ "alt='player picture'")
// $(".player-stats-card").append(img);
// };
// setTimeout(addImg(), delay);