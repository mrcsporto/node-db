const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: 'loja',
});

function list(res) {
    //buscar os dados do banco de dados
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT id, name, price FROM product", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            res.end(JSON.stringify(result));
        });
    });
}

function show(res, req) {
    const id = req.url.split('?id=')[1]

    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM product where id = " + id, function (err, result, fields) {
            if (err) throw err;
            res.end(JSON.stringify(result[0]));
        });
    });
}

function add(res) {
    res.end("adicionando produto");
}

module.exports = {
    add,
    list,
    show,
};