const express = require("express");
const router = express.Router();
const {Riddles} = require("../models");


router.get("/", async (req, res) => {
    const listofRiddles = await Riddles.findAll()
    res.json(listofRiddles) 
});

router.post("/", async (req, res) => {
    const riddle = req.body
    //creates the riddle 
    await Riddles.create(riddle)
    res.json(riddle) 
})

module.exports = router;