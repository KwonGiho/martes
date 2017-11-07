/**
 * Created by kwongiho on 2017. 11. 6..
 */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "siddid",
    database: "martes"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "insert into user values('rlgh9351@gmail.com','1234')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});

