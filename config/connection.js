const mysql = require("mysql");

if (process.env.NODE_ENV === 'production') {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(process.env.DB_URL);
};

//var config = require("./config.js");
//var connection = mysql.createConnection(config.mysql.url);
console.log("connection host is : " + connection.config.host);
connection.connect(function (error) {
    if (error) throw error;
    console.log("connected to database on " + connection.config.host + " as "
        + connection.config.user + "@" + connection.config.database);
});
module.exports = connection;