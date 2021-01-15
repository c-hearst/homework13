require("dotenv").config();

var mysql = require("mysql2");

var connection;

if (ProcessingInstruction.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db",
    });
}

connection.connect((err) => {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

module.exports = connection;