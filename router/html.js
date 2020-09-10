const express = require('express');
const html = express.Router();

var path = __dirname.replace('router', 'html');

html.get('/index.html', function(req, res) {
    res.sendFile(path + "/index.html");
})

html.get('/dhzs.html', function(req, res) {
    res.sendFile(path + "/dhzs.html");
})

html.get('/dzyl.html', function(req, res) {
    res.sendFile(path + "/dzyl.html");
})

html.get('/footer.html', function(req, res) {
    res.sendFile(path + "/footer.html");
})

html.get('/gszh.html', function(req, res) {
    res.sendFile(path + "/gszh.html");
})

html.get('/header.html', function(req, res) {
    res.sendFile(path + "/header.html");
})

html.get('/login.html', function(req, res) {
    res.sendFile(path + "/login.html");
})

module.exports = html;