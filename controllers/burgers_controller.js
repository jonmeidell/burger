// Inside the burgers_controller.js file, import the following:
// Express
// burger.js

// Create the router for the app,
// and export the router at the end of your file.

const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId});
    });
});

module.exports = router;