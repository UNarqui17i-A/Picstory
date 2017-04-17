/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	login: function(req, res) {
    let username;
    let password;

    if (req.body) {
      username = req.body.username;
      password = req.body.password;
    }

    if (!username || !password) {
      return res.status(401).json({ err: 'Username and Password are required.' });
    }

    User.findOne({ username: username }).exec((err, user) => {

      if (!user) {
        return res.status(401).json({ message: 'User not found.' });
      }

      user.comparePassword(password, function(err, valid) {
        if (err) {
          return res.status(401).json({ err: err });
        }

        if (! valid) {
          return res.status(401).json({ message: 'Invalid Username or Password' });
        } else {

          let security = Math.random().toString(36).slice(2);
          let payload = user.id + '_' + security;
          sails.log(payload);

          token = TokenAuth.generateToken({ id: payload });
          let expired = new Date();
          expired.setHours(expired.getHours() + 1);

          Auth.create({
            userId: user.id,
            token: token,
            expiredAt: expired
          }).exec((err, newAuth) => {
            sails.log(newAuth);

            return res.status(200).json({
              user: user.id, //changed to fit post_ms service
              token: token
            });
          });
        }
      });
    });

  },

  check: function(req, res) {
    let token;

    if (req.body) {
      token = req.body.token;
    }

    if (!token) {
      return res.status(401).json({ err: 'Token is required' });
    }


    Auth.findOne({ token: token }).exec((err, auth) => {

      if (err) {
        return res.status(401).json({ err: err });
      }

      if (! auth) {
        return res.status(401).json({ err: 'Token is not valid.' });
      }

      let expired = new Date();
      expired.setHours(expired.getHours() + 1);

      auth.expiredAt = expired;

      return res.status(200).json({ message: 'Valid Token'});
    });

  },

  logout: function(req, res) {
    let token;

    if (req.body) {
      token = req.body.token;
    }

    if (!token) {
      return res.status(401).json({ err: 'Token is required' });
    }

    Auth.findOne({ token: token }).exec((err, auth) => {
      if (err) {
        return res.status(401).json({ err: err });
      }

      if (! auth) {
        return res.status(401).json({ err: 'Token is not valid.' });
      }

      Auth.destroy({ token: token }).exec((err, deletedAuth) => {
        if (err) {
          return res.status(401).json({ err : err });
        }

        return res.status(200).json({ message: 'Auth removed' });

      });
    });

  }

};
