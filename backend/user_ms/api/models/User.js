/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('node-uuid');
var bcrypt = require('bcrypt');


module.exports = {

  // Configuration
  autoPK: false,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'users',
  schema: true,


  // Model Attributes
  attributes: {
    id: {
      type: 'string',
      size: 36,
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function() { return uuid.v4(); }
    },

    firstName: {
      type: 'string',
      size: 50,
      required: true
    },

    lastName: {
      type: 'string',
      size: 50,
      required: true
    },

    username: {
      type: 'string',
      size: 50,
      minLength: 5,
      unique: true,
      required: true
    },

    email: {
      type: 'string',
      size: 100,
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      size: 255,
      minLength: 8,
      required: true
    },

    birthDate: {
      type: 'date',
      required: true
    },

    bio: {
     type: 'mediumtext'
    },

    // Attribute Methods
    getFullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    // Default Methods
    toJSON: function () {
      let obj = this.toObject();
      obj.fullName = this.getFullName();
      delete obj.password;
      return obj;
    },

    comparePassword: function(password, cb) {
      bcrypt.compare(password, this.password, function (err, match) {
        if (err) {
          cb(err);
        }

        if (match) {
          cb(null, true);
        } else {
          cb(err);
        }
      });
    }

  },

  // Lifecycle Callbacks
  beforeCreate: function(values, cb) {
    bcrypt.hash(values.password, 10, function(err, hash) {
      if (err) {
        return cb(err);
      }

      values.password = hash;

      cb();
    });
  },

  beforeDestroy: function(criteria, cb) {
    cb();
  }

};

