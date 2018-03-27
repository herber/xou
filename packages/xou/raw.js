module.exports =
  typeof window !== 'undefined' ? require('xou-browser/raw') : require('xou-server/raw');
