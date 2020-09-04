const createClient = require("@/utils/createClient");
const deployDirectory = require("@/scripts/deploy-directory");


// 线上环境的跳板
module.exports = async () => {
  const client = await createClient({
    port: 18911,
    host: "223.4.69.11",
    username: "admin",
    password: "tianquekeji"
  });
  await deployDirectory(client);
  console.log((await client.execCommand("ssh-deploy prod")).stdout);
  process.exit(0);
};