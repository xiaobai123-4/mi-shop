const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//创建路由器对象
let router = express.Router();
module.exports = router

// 注册用户 原生post
router.post("/reg", (req, res) => {
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var phone = req.body.phone;
  if (!uname) {
    return;
  }
  if (!upwd) {
    return;
  }
  if (!phone) {
    return;
  }
  var sql = "INSERT INTO mi_user VALUES ('',?,?,?,'','','')";
  pool.query(sql, [uname, upwd, phone], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.redirect(302, 'http://127.0.0.1:8080/index.html' + "?" + uname)
    } else {
      res.send(0)
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

// 获取主页所需信息
// top导航
router.get("/class_title", (req, res) => {
  var sql = "SELECT * FROM mi_class_title"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
router.get("/left_title", (req, res) => {
  var sql = "SELECT * FROM mi_left_f1_title"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
router.get("/list_title", (req, res) => {
  var sql = "SELECT * FROM mi_list_title"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
// 类别
router.get("/mclass", (req, res) => {
  var sql = "SELECT * FROM mi_mclass"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
// 明星单品
router.get("/star", (req, res) => {
  var sql = "SELECT * FROM mi_star"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
// 配件
router.get("/class", (req, res) => {
  var sql = "SELECT * FROM mi_class"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

// 商品列表
router.get("/product_list", (req, res) => {
  var sql = "SELECT * FROM mi_product"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

// 商品信息
router.get("/product_details", (req, res) => {
  var sql = "SELECT * FROM mi_product_details"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

// 用户中心
router.get("/user_info/:uname", (req, res) => {
  var $uname = req.params.uname;
  var sql = "SELECT * FROM mi_user where uname=?"
  pool.query(sql, $uname, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
// 改签名
router.put("/user_info/qm", (req, res) => {
  var $qianming = req.body.qianming;
  var $uname = req.body.uname;
  var sql = "UPDATE mi_user SET qianming=? where uname=?"
  pool.query(sql, [$qianming,$uname], (err, result) => {
    if (err) throw err;
    res.send("1")
  })
})

// 改爱好
router.put("/user_info/ah", (req, res) => {
  var $hobby = req.body.hobby;
  var $uname = req.body.uname;
  var sql = "UPDATE mi_user SET hobby=? where uname=?"
  pool.query(sql, [$hobby,$uname], (err, result) => {
    if (err) throw err;
    res.send("1")
  })
})
// 改地址
router.put("/user_info/dz", (req, res) => {
  var $addres = req.body.addres;
  var $uname = req.body.uname;
  var sql = "UPDATE mi_user SET addres=? where uname=?"
  pool.query(sql, [$addres,$uname], (err, result) => {
    if (err) throw err;
    res.send("1")
  })
})

// 加入购物车
router.post("/cart",(req,res)=>{
  var $pic=req.body.pic;
  var $title=req.body.title;
  var $price=req.body.price;
  var $order_time=req.body.order_time;
  var sql="INSERT INTO mi_order VALUES ('',?,?,?,?)"
  pool.query(sql,[$pic,$price,$order_time,$title],(err,result)=>{
    if(err) throw err;
    res.send("1");
  })
})

// 查询购物车商品信息
router.get("/cart_item", (req, res) => {
  var sql = "SELECT * FROM mi_order"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
// 根据商品id删除商品
router.delete("/del_cart_item/:oid",(req,res)=>{
	var $oid=req.params.oid;
	var sql="DELETE FROM mi_order WHERE oid=?";
	pool.query(sql,[$oid],(err,result)=>{
		if(err) throw err;
		res.send("1");
  });
})