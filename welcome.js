const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: 'loja',
});

function show(res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Welcome</h1>");
}

module.exports = {
    show,
};