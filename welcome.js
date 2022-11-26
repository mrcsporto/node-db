const mysql = require('mysql')
const fs = require('fs')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: 'loja',
});

function show(res) {
    res.setHeader('Content-Type', 'text/html')
    const html = fs.readFileSync('./welcome.html')
    res.end(html)
}

module.exports = {
    show,
};