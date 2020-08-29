const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({

    name:{
        type: String,
        trim: true
    },
    season:{
        type: Number
    },
    raptor_offense:{
        type: Number
    },
    raptor_defense:{
        type: Number
    },
    raptor_total:{
        type: Number
    },
    war_total:{
        type: Number
    }   

});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;