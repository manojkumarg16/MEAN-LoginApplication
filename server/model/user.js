const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
	username :{
		type: String,
		required:true
	},
	password:{
		type: String,
		required:true
	},
	email:{
		type: String,
		required:true
	},
	phonenumber:{
		type: Number,
		required:true,
		length: 10
	}
});
 
const User = module.exports = mongoose.model('users',userSchema);