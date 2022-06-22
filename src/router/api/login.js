const express = require('express')
const router = express.Router()
let token = 123
router.post('/login',function(req,res){
	// res.sendStatus(503)
	res.header('authorization',token)
	let data = {
		resultMsg: '成功',
		resultCode:'200',
		data:{
			// token: token
		}
	}
	res.send(data)
})
module.exports = router