/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'mongodb-dev',
    migrate: 'safe'
  },

  connections: {
    'mongodb-dev': {
      adapter: 'sails-mongo',
      url: 'mongodb://172.17.0.1:27017/users',
      // host: 'localhost',
      // port: 27017,

      // user: 'username', //optional
      // password: 'password', //optional
      // database: 'users', //optional
      timezone: 'America/Bogota'
    }
  },

  port: 8005,

  session: {
    secret: 'd47097896e48a771c710757e9a8c1616'
  }

};
