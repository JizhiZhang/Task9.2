var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log(mongoose)

var UserSchema=new Schema({
    desc:String
});
module.exports = UserSchema;