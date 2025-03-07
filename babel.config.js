module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Remove or leave an empty plugins array if needed
    // plugins: []
  };
};
