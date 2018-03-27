const xouRawServer = tag => {
  const wrapper = new String(tag);
  wrapper.__encoded = true;
  return wrapper;
};

module.exports = xouRawServer;
