const express = require("express");
const app = express();
const html = require('./router/html');
const dhzs = require('./router/dhzs');
const login = require("./router/login");

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
})

app.use('/html', html);
app.use('/dhzs', dhzs);
app.use('/login', login);

var server = app.listen(8086, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})