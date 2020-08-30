module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            trim: true
        },
        season: {
            type: DataTypes.FLOAT
        },
        raptor_offense: {
            type: DataTypes.FLOAT
        },
        raptor_defense: {
            type: DataTypes.FLOAT
        },
        raptor_total: {
            type: DataTypes.FLOAT
        },
        war_total: {
            type: DataTypes.FLOAT
        }
    })
    return Player;
};