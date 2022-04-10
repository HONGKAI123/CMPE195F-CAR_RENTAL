const express = require("express");
const router = express.Router();
const carlist = require("../models/CarModel")


router.get("/Cartlist", async(req, res) => {

   

    try {
        const cars = await carlist.find({})
        if(cars) {
            res.send(cars)
        }
        else{
            return res.status(400).json(error);
        }
    } catch (error) {
      return res.status(400).json(error);
    }

});
module.exports = router