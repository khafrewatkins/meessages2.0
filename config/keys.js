// edit
// keys.js - figure out what set of credentials to return
// production environment keys
if (process.env.NODE_ENV === 'production') {
// return production keys
  module.exports = require('./prod');
} else {
  // return development keys
  module.exports = require('./dev');
}
