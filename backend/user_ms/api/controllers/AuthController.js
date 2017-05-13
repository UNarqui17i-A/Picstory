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
        return res.status(401).json({ message: 'Username or Password invalid.' });
      }

      user.comparePassword(password, function(err, valid) {
        if (err) {
          return res.status(401).json({ err: err });
        }

        if (! valid) {
          return res.status(401).json({ message: 'Username or Password invalid.' });
        } else {

          let security = Math.random().toString(36).slice(2);
          let payload = user.id + '_' + security;

          token = TokenAuth.generateToken({ id: payload });
          let expired = new Date();
          expired.setHours(expired.getHours() + 1);

          Auth.create({
            userId: user.id,
            token: token,
            expiredAt: expired
          }).exec((err, newAuth) => {
            return res.status(200).json({
              user: user,
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

      now = new Date();
      now.setHours(now.getHours() + 2);
      if (now > auth.expiredAt) {
        Auth.destroy({ id: auth.id }).exec((err, deletedAuth) => {
          if (err) {
            return res.status(401).json({ err: err });
          }

          return res.json({ err: 'Token expired.' });
        });
      } else {
        let expired = new Date();
        expired.setHours(expired.getHours() + 1);

        auth.expiredAt = expired;

        return res.status(200).json({ message: 'Valid Token', token: auth});
      }
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
