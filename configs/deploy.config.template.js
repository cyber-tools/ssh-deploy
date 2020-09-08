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
  afterDeploy: async (client) => {
    const display = (await client.execCommand("ls")).stdout;
    console.log(display);
  }
};