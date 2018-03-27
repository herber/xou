module.exports = typeof window !== 'undefined' ? require('xou-browser') : require('xou-server');

module.exports.update = require('nanomorph');
