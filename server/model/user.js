const mongoose = require ('mongoose');
var bcrypt   = require('bcrypt-nodejs');
const userSchema = mongoose.Schema({
	local:{
		username : String,
		password:String,
		email:String,
		phonenumber:Number,
	}
	
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

 
const User = module.exports = mongoose.model('users',userSchema);