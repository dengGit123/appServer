const express = require('express')
const app = express()
const port = 3000
const router = require('./router/index.js')

// require('./mock/index.js')
app.use('/',router)

app.listen(port,function(){
	console.log('服务启动成功')
})