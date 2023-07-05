const express = require('express')
const app = express()
require('dotenv').config()

//allowing express to take JSON objects(middleware)
app.use(express.json()) 

//reading all our SQL models that we created
const db = require("./models")

//------------Routes----------------
//Riddle Router
const riddleRouter = require("./routes/Riddles")
app.use("/riddles", riddleRouter)

//calling the models when the API is activated(server is started)
db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening...`)
    })
})



