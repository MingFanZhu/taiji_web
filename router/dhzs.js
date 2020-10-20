const express = require('express');
const fs = require('fs');
const dhzs = express.Router();
const connection=require('./mysql')
var bodyParser = require("body-parser");

dhzs.use(bodyParser.urlencoded({ extended: false }));

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
    var sql = 'select * from fbxs where path="taiji"';
    connection.query(sql,function(err,result){
        if(err){
            res.send('error');
        }else{
            var data = {};
            data.src = '../public/fbxs/taiji/';
            data.files = result;
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


dhzs.get('/comment',function(req,res){
    var fbxid=req.url.split('?')[1];
    var sql='select * from comments where fbxid=?'
    var sql_params=[fbxid];
    connection.query(sql,sql_params,function(err,result){
        if(err){
            res.send('error');
        }else{
            var data={};
            data.comments=[];
            for(var item of result){
                if(item.commentid==-1){
                    item.reply=[];
                    data.comments.push(item);
                }else{
                    for(var com of data.comments){
                        if(com.idcomments==item.commentid){
                            com.reply.push(item);
                        }
                    }
                }
            }
            res.send(data);
        }
    })
});

dhzs.post('/up_comment',function(req,res){
    var sql = 'insert into comments (fbxid,commentid,user,user_name,time,text) values (?,?,?,?,?,?)';
    var sql_params = [req.body.fbxid,req.body.commentid,req.body.user,req.body.user_name,new Date(),req.body.text];
    connection.query(sql,sql_params,function(err){
        if(err){
            res.send('error');
        }else{
            res.send('ok');
        }
    });
})

module.exports = dhzs;