const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [ true, 'YOu must enter username' ]
	},
	email: {
		type: String,
		required: [ true, 'YOu must enter email' ],
		unique: true,
		lowercase: true,
		validate: [ validator.isEmail, 'Provide valid email' ]
	},
	password: {
		type: String,
		required: [ true, 'YOu must enter password' ]
    },
    confirmPassword: {
        type: String
    }
},
{
	toJSON: { virtuals: true },
	toObject: { virtuals: true }
});

userSchema.pre('save', async function(next) {
	// console.log(this);
	this.password = await bcrypt.hash(this.password, 12);
	this.confirmPassword = undefined;
	next();
});

userSchema.virtual('products', {
	ref:'Product',
	foreignField: 'User',
	localField: '_id'
})

userSchema.virtual('sold', {
	ref:'Sell',
	foreignField: 'User',
	localField: '_id'
})

const User = mongoose.model('User', userSchema);

module.exports = User;