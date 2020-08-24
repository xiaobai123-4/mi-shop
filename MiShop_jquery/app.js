const express=require('express');
const bodyParser=require('body-parser');
//引入路由器
const userRouter=require('./routes/user.js');
const ajaxRouter=require('./routes/ajax.js');
const cors=require("cors");
let app=express();
app.listen(8080);
//托管静态资源
app.use( express.static('public') );
//使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false
}) );
// 使用cors中间件
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:5500"],
  credentials:true
}))
//把用户路由器挂载到服务器，给URL添加前缀/user  /user/reg
app.use('/user',userRouter);
app.use('/ajax',ajaxRouter);