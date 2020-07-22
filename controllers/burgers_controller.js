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
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});
// not working properly, only changes devoured status one way
router.put("/api/burger/:burgerId", function (req, res) {
    let id = "id=" + "'" + req.params.burgerId + "'";
    burger.updateOne(
        { "devoured": req.body.devoured},
        id,
        function (result) {
            console.log(result)
            res.json({ id: result.changedRows });
        });
});

router.delete("/api/burger/:burgerId", function (req, res) {
    let id = "id=" + "'" + req.params.burgerId + "'";
    burger.deleteOne(
        id,
        function (result) {
            console.log(result)
            res.json({ id: result.deletedRows });
        });
});

module.exports = router;