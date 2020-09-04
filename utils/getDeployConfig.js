

module.exports = function () {
  const deployConfigResolve = require.resolve("./deploy.config.js", {
    paths: [process.cwd()]
  });
  const config = require(deployConfigResolve);
  return config;
};