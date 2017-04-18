/**
 * UserController def
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  find: function(req, res) {
    User.find().exec((err, users) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      users = users.map((x) => x.toJSON());

      return res.status(200).json({ users: users });
    });
  },

  findById: function(req, res) {
    User.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      if (user) {
        return res.status(200).json({ user: user });
      } else {
        return res.status(200).json({ message: 'User not Found with ID ' + req.params.id });
      }
    });
  },

  findByUsername: function(req, res) {
    User.findOne({ username: req.params.username }).exec((err, user) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      if (user) {
        return res.status(200).json({ user: user });
      } else {
        return res.status(200).json({ message: 'User not Found with USERNAME ' + req.params.username });
      }
    });
  },

  create: function(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, { err: 'Password doesn\'t match.' });
    }

    User.create(req.body).exec((err, newUser) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      return res.status(200).json({ newUser: newUser });
    });
  },

  update: function(req, res) {
    data = req.body;

    User.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      if (! user) {
        return res.status(200).json({ message: 'User not Found with ID ' + req.params.id });
      }

      let data = req.body;

      User.update({ id: req.params.id }, data).exec((err, userUpdated) => {
        if (err) {
          return res.status(500).json({ err: err });
        }

        return res.status(200).json({ userUpdated: userUpdated });
      });
    });
  },

  destroy: function(req, res) {

    User.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        return res.status(500).json({ err: err });
      }

      if (! user) {
        return res.status(200).json({ message: 'User not Found with ID ' + req.params.id });
      }

      User.destroy({ id: req.params.id }).exec((err, userDeleted) => {
        if (err) {
          return res.status(500).json({ err: err });
        }

        return res.status(200).json({ userDeleted: userDeleted });
      });
    });
  }

};
