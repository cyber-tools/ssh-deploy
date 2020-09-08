const path = require("path");

exports.LOCAL_CONFIG = path.resolve(__dirname, "./deploy.config.template.js");

exports.PROJECT_CONFIG = path.resolve(process.cwd(), "./deploy.config.js");