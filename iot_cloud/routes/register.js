var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',//修改为自己的密码
    database:'my_db_01'//修改为自己的数据库
})
connection.connect()

 
/***
 * 注册功能
 */
 router.get('/register',function(req,res){
    var name = req.query.name
    var pwd = req.query.pwd
    var user = [name,pwd];
    var query1 = 'insert into login(name,pwd) values(?,?)';
    connection.query(query1,user,function(err,result){
    if(err) throw err;
    console.log("***")
    if(result.length==0){
        res.send("用户名或密码错误")
    }else{
            res.render('login.ejs', { title: 'Sheraton泳池监控系统' });
       
    }
})
})
module.exports = router;