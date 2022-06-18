const express = require('express')
const router = express.Router()

router.get('/login',function(req,res){
	let data = {
		resultMsg: '成功',
		resultCode:200,
		data:{
			token: 123456
		}
	}
	res.send(data)
})
module.exports = router