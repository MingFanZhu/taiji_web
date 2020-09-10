const express = require('express');
const fs = require('fs');
const dhzs = express.Router();

dhzs.get('/pics', function(req, res) {
    var files = null;
    fs.readdir(__dirname + '/../public/imgs/轮播图', function(err, files) {
        if (err) {
            res.send('error');
        } else {
            var data = {};
            data.src = '../public/imgs/轮播图/';
            data.files = files;
            res.send(data);
        }
    });
});

dhzs.get('/taiji', function(req, res) {
    var files = null;
    fs.readdir(__dirname + '/../public/fbxs/taiji', function(err, files) {
        if (err) {
            res.send('error');
        } else {
            var data = {};
            data.src = '../public/fbxs/taiji/';
            data.files = files;
            res.send(data);
        }
    });
});

dhzs.get('/wudao', function(req, res) {
    var files = null;
    fs.readdir(__dirname + '/../public/fbxs/wudao', function(err, files) {
        if (err) {
            res.send('error');
        } else {
            var data = {};
            data.src = '../public/fbxs/wudao/';
            data.files = files;
            res.send(data);
        }
    });
});

dhzs.get('/qita', function(req, res) {
    var files = null;
    fs.readdir(__dirname + '/../public/fbxs/qita', function(err, files) {
        if (err) {
            res.send('error');
        } else {
            var data = {};
            data.src = '../public/fbxs/qita/';
            data.files = files;
            res.send(data);
        }
    });
});

module.exports = dhzs;