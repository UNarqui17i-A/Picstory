/**
 * Created by rodesv on 18/04/17.
 */
var ldap = require('ldapjs');
var fs = require('fs');
var server = ldap.createServer();
var spawn = require('child_process').spawn;

server.listen(1389, function() {
  console.log('LDAP server up at: %s', server.url);
});


// ROOT
server.bind('cn=root', function(req, res, next) {
  if (req.dn.toString() !== 'cn=root' || req.credentials !== 'secret')
    return next(new ldap.InvalidCredentialsError());

  res.end();
  return next();
});

function authorize(req, res, next) {
  if (!req.connection.ldap.bindDN.equals('cn=root'))
    return next(new ldap.InsufficientAccessRightsError());

  return next();
}

function loadPasswdFile(req, res, next) {
  fs.readFile('./ldapRegister', 'utf8', function(err, data) {
    if (err)
      return next(new ldap.OperationsError(err.message));

    req.users = {};

    var lines = data.split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (!lines[i] || /^#/.test(lines[i]))
        continue;

      var record = lines[i].split(':');
      if (!record || !record.length)
        continue;

      req.users[record[0]] = {
        dn: 'cn=' + record[0] + ', ou=users, o=picstory',
        attributes: {
          cn: record[0],
          uid: record[2],
          gid: record[3],
          description: record[4],
          homedirectory: record[5],
          shell: record[6] || '',
          objectclass: 'unixUser'
        }
      };
    }

    return next();
  });
}



// ADD
function addLDAP() {

}

/*
server.add('ou=users, o=picstory', pre, function(req, res, next) {
  if (!req.dn.rdns[0].cn)
    return next(new ldap.ConstraintViolationError('cn required'));

  if (req.users[req.dn.rdns[0].cn])
    return next(new ldap.EntryAlreadyExistsError(req.dn.toString()));

  var entry = req.toObject().attributes;

  if (entry.objectclass.indexOf('unixUser') === -1)
    return next(new ldap.ConstraintViolation('entry must be a unixUser'));

  var opts = ['-m'];
  if (entry.description) {
    opts.push('-c');
    opts.push(entry.description[0]);
  }
  if (entry.homedirectory) {
    opts.push('-d');
    opts.push(entry.homedirectory[0]);
  }
  if (entry.gid) {
    opts.push('-g');
    opts.push(entry.gid[0]);
  }
  if (entry.shell) {
    opts.push('-s');
    opts.push(entry.shell[0]);
  }
  if (entry.uid) {
    opts.push('-u');
    opts.push(entry.uid[0]);
  }
  opts.push(entry.cn[0]);
  var useradd = spawn('useradd', opts);

  var messages = [];

  useradd.stdout.on('data', function(data) {
    messages.push(data.toString());
  });
  useradd.stderr.on('data', function(data) {
    messages.push(data.toString());
  });

  useradd.on('exit', function(code) {
    if (code !== 0) {
      var msg = '' + code;
      if (messages.length)
        msg += ': ' + messages.join();
      return next(new ldap.OperationsError(msg));
    }

    res.end();
    return next();
  });
});

/*
* Request to add file user.ldif
* dn: cn=ldapjs, ou=users, o=myhost
 objectClass: unixUser
 cn: ldapjs
 shell: /bin/bash
 description: Created via ldapadd
* */
