var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: "laperkendy"}, function(err, tunnel) {
    console.log('LT running')
  });