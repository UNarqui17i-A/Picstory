/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'mongodb-prod',
    migrate: 'safe'
  },

  connections: {
    'mongodb-prod': {
      adapter: 'sails-mongo',
      // url: 'mongodb://172.17.0.1:27017/users',
      url: 'mongodb://userdb:27017/users',
      // host: '192.168.99.101',
      // port: 27017,
      // user: 'username', //optional
      // password: 'password', //optional
      // database: 'users', //optional
      timezone: 'America/Bogota'
    }
  },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: 8005,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

  session: {
    secret: 'd47097896e48a771c710757e9a8c1616'
  }

};
