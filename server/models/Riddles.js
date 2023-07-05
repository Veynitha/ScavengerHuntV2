//so we are creating an anonymouse function to hold the Riddle table
//This function should take 2 parameters  (sequelize and datatypes)
module.exports = (sequelize, DataTypes) => {
    
    //This is the riddles model, we can define the variables that it stores here.
    const Riddles = sequelize.define("Riddles", {
        riddleID: {
             type: DataTypes.INTEGER,
             allowNull: false,
        },
        riddleText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        }        
    })

    return Riddles

}