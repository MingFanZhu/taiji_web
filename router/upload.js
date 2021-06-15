const express = require('express');
const upload = express.Router();
var connection = require('./mysql');
const multiparty = require('multiparty');
const fs = require('fs');
const path=require('path');

upload.post('/file',function(req,res){
    let form = new multiparty.Form();
    form.uploadDir = path.resolve( __dirname,'../uploads');
    form.parse(req,function(err,fields,files){
        if(err){
            console.log(new Date().toLocaleString()+":"+err)
        }else{
            var file_dir=path.resolve( __dirname,'../public/fbxs'+'/'+fields.path[0]);
            fs.rename(files.file[0].path,file_dir+'/'+files.file[0].originalFilename,function(err){
                if(err){
                    console.log(err);
                }
            });
            fs.rename(files.img[0].path,file_dir+'/'+files.img[0].originalFilename,function(err){
                if(err){
                    console.log(err);
                }
            });

            var sql="INSERT INTO `taiji_web`.`fbxs` (`path`, `file_name`, `img_src`) VALUES (?,?,?)";
            var sql_params=[fields.path[0],files.file[0].originalFilename,files.img[0].originalFilename]
            connection.query(sql,sql_params,function(err,result){
                if(err){
                    console.log(err);
                }else{
                    res.send('上传成功!');
                }
            })
        }
    })
})

module.exports = upload;