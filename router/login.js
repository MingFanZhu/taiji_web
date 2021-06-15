const express = require('express');
const login = express.Router();
var bodyParser = require("body-parser");
var connection = require('./mysql');
var mail = require('nodemailer');

login.use(bodyParser.urlencoded({ extended: false }));

login.post('/login', function (req, res) {
    var sql = 'select email,username,convert(aes_decrypt(password,email) using utf8) as password from user where email=?';
    var sql_params = [req.body.email];
    connection.query(sql, sql_params, function (err, result) {
        if (err) {
            res.end('-1')
        } else {
            if (result.length == 0) {
                res.end('2');
                return;
            }
            if (req.body.password != result[0].password) {
                res.send('0');
            } else {
                res.cookie('user', req.body.email);
                res.cookie('password', req.body.password);
                res.cookie('username', result[0].username);
                res.cookie('login', 'true');
                res.send('1');
            }
        }
    })
});

login.get('/logout', function (req, res) {
    res.cookie('login', 'false');
    res.send('change cookie');
});

login.post('/register', function (req, res) {
    var sql = "insert into user (email,password,username) values (?,aes_encrypt(?,?),?)";
    var sql_params = [req.body.email, req.body.password, req.body.email, req.body.username];
    connection.query(sql, sql_params, function (err, result) {
        if (err) {
            res.end('-1');
        } else {
            res.send('0');
        }
    })
});

var transport = mail.createTransport({
    host: 'smtp.163.com',
    secureConnection: true,
    port: 465,
    auth: {
        user: 'S70_59_130@163.com',
        pass: 'QXGYNTSYAYGUSMNL'
    }
});

function get_code() {
    var code = Math.random().toString().slice(-5, -1);
    return code;
}

login.post('/sendcode', function (req, res) {
    var sql = 'select email from user where email=?';
    var sql_params = [req.body.email];
    connection.query(sql, sql_params, function (err, result) {
        if (err) {
            res.end('数据库出错');
            return;
        } else {
            if (result.length == 0) {
                res.end('邮箱未注册！');
                return;
            }
        }
        var code = get_code();
        sql = 'update user set code=? where email=?';
        sql_params = [code, req.body.email];
        connection.query(sql, sql_params);
        var mailOptions = {
            from: '"太极项目" S70_59_130@163.com',
            to: req.body.email,
            // 邮件主题
            subject: "太极验证码",
            html: '<h4>您的验证码是：<b>' + code + '</b></h4>'
        };
        transport.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                res.send('验证码已发送至邮箱');
            }
        });
    });
});

login.post('/changepassword', function (req, res) {
    var sql = 'select code from user where email=?';
    sql_params = [req.body.email];
    connection.query(sql, sql_params, function (err, result) {
        if (err) {
            res.end('数据库出错');
            return;
        } else {
            if (result.length == 0) {
                res.end('邮箱未注册！');
                return;
            } else {
                if (result[0].code == req.body.code) {
                    sql = 'update user set password=aes_encrypt(?,?),code="" where email=?';
                    sql_params = [req.body.password, req.body.email, req.body.email];
                    connection.query(sql, sql_params, function (err) {
                        if (err) {
                            res.send('修改密码出错');
                        } else {
                            res.send('已修改密码');
                        }
                    })
                } else {
                    res.send('验证码错误');
                    return
                }
            }
        }
    })
})

module.exports = login;