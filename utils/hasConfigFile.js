const path = require("path");
const pathExists = require("path-exists");


module.exports = async () => {
  try {
    const configFilePath = path.resolve(process.cwd(), "./deploy.config.js");
    const isExist = await pathExists(configFilePath);
    return isExist;
  } catch (error) {
    throw error;
  };
};