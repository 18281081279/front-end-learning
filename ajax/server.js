//1:引入express

const {
    response,
    json
} = require('express');
const express = require('express');

//2:创建应用对象

const app = express();

//3:创建路由规则


// get
app.get('/getServer', (require, response) => {
    //1.设置响应头允许跨域
    response.setHeader('Access-control-allow-origin', '*')
    //2.设置响应体
    response.send("hello ajax-get");
})


//post,all
app.all('/postServer', (require, response) => {
    //1.设置响应头允许跨域
    response.setHeader('Access-control-allow-origin', '*');
    //设置响应头
    response.setHeader('Access-control-allow-headers', '*');
    //设置响应体
    response.send("helle ajax-post")
})

//json
app.get('/getJson', (require, response) => {
    response.setHeader('Access-control-allow-origin', '*');
    let data = {
        name: "lly"
    }
    response.send(JSON.stringify(data));
})

//timeOver
app.get('/timeOver', (require, response) => {
    response.setHeader('Access-control-allow-origin', '*');
    setTimeout(() => {
        response.send('hhh')
    }, 3000);
})

//jQuery
app.all('/jQuery', (require, response) => {
    response.setHeader('Access-control-allow-origin', '*');
    let data = {
        name: 'jpx'
    }
    response.send(JSON.stringify(data));
})

//axios
app.all('/axios',(require,response)=>{
    response.setHeader('Access-control-allow-origin', '*');
    response.setHeader('Access-control-allow-headers', '*');
    let data = {
        name:'nb'
    }
    response.send(data);
})
//4:监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中");
})