const fs = require("fs");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");
const hasConfigFile = require("@/utils/hasConfigFile");
const { LOCAL_CONFIG, PROJECT_CONFIG } = require("@/configs/runtime.config");

module.exports = async function () {
  if (await hasConfigFile()) {
    toast.warn("deploy.config.js文件已经存在!");
  } else {
    try {
      toast.start("正在初始化项目部署配置... ...");
      await promisify(fs.copyFile)(LOCAL_CONFIG, PROJECT_CONFIG);
      toast.succeed("初始化完成!");
    } catch (error) {
      toast.fail("初始化失败!");
      throw error;
    };
  };
};