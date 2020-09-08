const path = require("path");

module.exports = {
  local: path.resolve(__dirname, "./dist/"),
  remote: "/home/admin/jsProject/",
  client: {
    host: "",
    port: 22,
    username: "",
    password: ""
  },
  beforeDeploy: async (client) => {
    // 部署之前运行的方法
    // console.log("beforeDeploy=>");
  },
  afterDeploy: async (client) => {
    // 部署之后运行的方法
    // console.log(afterDeploy);
  }
};