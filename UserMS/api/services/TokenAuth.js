/**
 * Created by eccarrilloe on 28/03/17.
 */

let jwt = require('jsonwebtoken');

module.exports = {
  issueToken: function(payload,options) {
    let token = jwt.sign(payload, sails.config.jwt.token_secret, options);
    return token;
  },

  verifyToken: function(token, callback) {
    return jwt.verify(token, sails.config.jwt.token_secret, {}, callback);
  }
}
