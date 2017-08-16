const express = require ('express');
const router = express.Router();
const user = require ('../model/user');

router.get('/getAllUser', (req, res, next)=>{
	user.find(function (err,users){
		res.json({users});
	});
});

router.post('/addUser', (req, res, next)=>{
	console.log(req.body);
	let newUser = new user({
	username : req.body.username,
	password : req.body.password,
	email : req.body.email,
	phonenumber : req.body.phonenumber
});


	newUser.save((err,result)=>{
		if(err){
			res.send("error in adding user "+err)
		}
		else if(result){
			res.send("Successfully aaaaadded"+ result);
		}
	});
});
 
module.exports = router;
