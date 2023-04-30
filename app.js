var koa=require('koa')
var app = new koa()

//session
const session = require('koa-session')
app.keys=['zfcwebwithkoa']//设置签名的Cookie密钥
const CONFIG={
    key:'myAppSessKey',//Cookie中的Key,默认是koa:sess
    maxAge:86400000,//失效时间，默认单位是ms
    overwrite:true,//能否被覆盖
    httpOnly:true,//是否禁止客户端修改Cookie,默认为true
    signed:true//签名是否开启，与keys相对于，默认为true
}
app.use(session(CONFIG,app))
//本文件仅用于启动Server,路由定义由router.js来做
const router = require('./router/router')
router(app)


const port = process.env.port || 3000
const hostname = '127.0.0.1'
var server = app.listen(port,
    ()=>console.log('server with koa starts----'))