/**
 * Auth.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('node-uuid');

module.exports = {

  autoPK: false,
  tableName: 'sessions',
  schema: true,

  attributes: {
    sessionId: {
      type: 'string',
      required: true,
      primaryKey: true,
      unique: true,
      defaultsTo: function() { return uuid.v4(); }
    },

    userId: {
      type: 'string',
      required: true
    },

    token: {
      type: 'string',
      size: 255,
      unique: true,
      primaryKey: true,
      required: true
    },

    expiredAt: {
      type: 'datetime',
      required: true
    }
  }
};

