var express = require('express')
var path = require("path");
var mysql = require('mysql')
var router = express.Router()
 
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',//修改为自己的密码
    database:'my_db_01'//修改为自己的数据库
})
connection.connect()
router.get('/',function(req,res){
    res.render('login.ejs', { title: 'Sheraton泳池监控系统' });
    //_dirname:当前文件的路径，path.join():合并路径
})
/**
*登录验证功能
*/
router.get('/login',function(req,res){
    var name = req.query.name
    var pwd = req.query.pwd
    var query1 = "select * from login where name='"+name+"' and pwd='"+pwd+"'"
    connection.query(query1,function(err,result){
        if (err) throw err;
        console.log("!!!",result)
        if(result.length==0){
            res.send("用户名或密码错误")
        }else{
                res.render('index1.ejs', { title: 'Sheraton泳池监控系统' });
           
        }
    })
})

/***
 * 注册功能
 */
 router.get('/register',function(req,res){
    res.render('register.ejs', { title: 'Sheraton泳池监控系统' });
    //_dirname:当前文件的路径，path.join():合并路径
})
router.get('/register1',function(req,res){
    var name = req.query.name
    var pwd = req.query.pwd
    var user = [name,pwd];
    var query1 = 'insert into login(name,pwd) values(?,?)';
    connection.query(query1,user,function(err,result){
    if(err) throw err;
    console.log("!!!",result)
    if(result.length==0){
        res.send("用户名或密码错误")
    }else{
    res.render('login.ejs', { title: 'Sheraton泳池监控系统' });
    }
    })
})
module.exports = router;