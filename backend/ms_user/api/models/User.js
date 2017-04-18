  /**
 * User.js
 *
 * @description :: Model of the entity User, password should be encrypted
 *
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.99.101:27017/usersDB');
var Schema = mongoose.Schema;
var UserSchema = Schema({
    id:[{type: Number, required : true, unique : true}],
    name:[{type : String, required : true}],
    email:[{type : String, required : true}],
    encryptedPassword:[{type : String, required : true}]
    //Method to avoid passing all the information from the model
    // toJSON: function() {
    //           var obj = this.toObject();
    //           delete obj.password;
    //           delete obj.confirmation;
    //           delete obj._encryptedPassword;
    //           delete obj._csrf;
    //           return obj;
    //         }
});
var User = mongoose.model('User',UserSchema);
module.exports = User;
