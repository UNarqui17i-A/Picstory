/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
      return res.status(401).json({ err: 'Username and Password are required.' });
    }

    User.findOne({ username: username }).exec((err, user) => {

      if (!user) {
        return res.status(401).json({ message: 'User not found.' });
      }

      User.comparePassword(password, user, function(err, valid) {
        if (err) {
          return res.status(401).json({ err: err });
        }

        if (!valid) {
          return res.status(401).json({ message: 'Invalid Username or Password' });
        } else {
          return res.status(200).json({
            user: user,
            token: TokenAuth.issueToken({ id: user.id })
          });
        }
      });
    });

  },

  checkAuth: function(req, res) {
    let token;


  }
};

