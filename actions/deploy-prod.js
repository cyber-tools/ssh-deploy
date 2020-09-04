const createClient = require("@/utils/createClient");

// 真实的线上环境
module.exports = async () => {
  const client = await createClient({
    port: 22,
    host: "10.145.108.161",
    username: "admin",
    password: "Tianquekeji"
  });
  console.log((await client.execCommand("ls")).stdout);
  process.exit(0);
};