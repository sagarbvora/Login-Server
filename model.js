const mongoose = require( "mongoose" );
const md5 = require( "md5" );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    name: { type: String, required: true },
    email:{type:String,required:true},
    password: { type: String, required: true },
    role: { type: String, required: true },
    isActive: { type: Boolean, required: true },
}, {
    timestamps: true,
} );

userSchema.methods.setPass = function( password ) {
    this.password = md5( password );
};

userSchema.methods.checkPass = function( password ) {
    return this.password === md5( password );
};

module.exports = mongoose.model( "User", userSchema );
