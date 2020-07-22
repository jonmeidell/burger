require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, function () {
    console.log("Grilling burgers on localhost:" + PORT);
});