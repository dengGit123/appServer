const express = require('express')
const router = express.Router()
let token = 123
router.post('/login',function(req,res){
	// res.sendStatus(503)
	let data = {
		resultMsg: '成功',
		resultCode:'200',
		data:{
			token: 123456
		}
	}
	res.header('authorization',token)
	res.send(data)
})
module.exports = router