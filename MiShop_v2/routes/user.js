const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//创建路由器对象
let router = express.Router();
//挂载路由
// 注册用户 原生post
router.post("/reg", (req, res) => {
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var phone = req.body.phone;
	if (!uname){
		return;
	}
	if(!upwd){
		return;
	}
	if(!phone) {
		return;
	}
	var sql = "INSERT INTO mi_user VALUES ('',?,?,?,'','','')";
	pool.query(sql, [uname, upwd, phone], (err, result) => {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.redirect(302, 'http://127.0.0.1:8080/index.html' + "?" + uname)
		}
	});
});
//1.登录
router.post("/login", (req, res) => {
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var sql = "select * from mi_user where uname=? and upwd=?";
	pool.query(sql, [uname, upwd], (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			// res.send("1");
			res.redirect(302, 'http://127.0.0.1:8080/index.html' + "?" + uname)
		} else {
			res.redirect(302, 'http://127.0.0.1:8080/login.html')
		}
	});
});

//导出路由器对象
module.exports = router;