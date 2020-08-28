const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeamSchema = new Schema({

    name:{
        type: String,
        trim: true
    },
    season:{
        type: Number
    },
    war_total:{
        type: Number
    },
    raptor_total:{
        type: Number
    },
    raptor_offense:{
        type: Number
    },
    raptor_defense:{
        type: Number
    }

});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;