/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var User = require('../models/User');

module.exports = {
	/**
	* @GET
	* Get all users method
	*/
	find : function(req,res){
		User.find().exec(function(err, users){
			if(err) return res.json({err:err},500);
			else res.json(users)
		});
	},
	/**
	*@GET by id
	*Get a user by giving an id
	*/
	findOne : function(req,res){
		User.findOne({id : req.params.id }).exec(function(err, user){
			if(err) return res.json({err:err},500);
			if(user) res.json(user);
			else res.send("No user found with that ID");
		 });
	 },
	/**
	*@POST
	*create a user
	*Assumes that the User to create comes from an .json file
	*/
	create : function(req,res){
		var user = new User({id : req.body.id,name:req.body.name,email:req.body.email,encryptedPassword :req.body.encryptedPassword});
		user.save( function (err, user){
				if(err) return res.json({err:err},500);
				else res.json(user);
			});
	},
	/**
	*@UPDATE
	*Changes the fields of a certain existing user
	*/
	update : function(req,res){

		User.findOne({id : req.params.id}).exec(function(err, 	user){
			if(err){
				 return res.json({err:err},500);
			}
			else{
				user.id = req.body.id || user.id;
				user.name = req.body.name || user.name;
	      user.email = req.body.email || user.email;
				user.encryptedPassword = req.body.encryptedPassword || user.encryptedPassword;
				res.json(user);
			}
		});
	},
	/**
	*@DELETE
	*Deletes a user by a given id
	*/
	destroy : function(req,res){
		User.remove({id : req.params.id}).exec(function(err,user){
			if(err) return res.json({ err: err }, 500);
      else res.ok();
		});
	}
}
