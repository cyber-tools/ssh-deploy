const createClient = require("@/utils/createClient");
const deployDirectory = require("@/scripts/deploy-directory");

module.exports = async () => {
  try {
    const client = await createClient({
      port: 22,
      host: "192.168.1.180",
      username: "admin",
      password: "Admin@123"
    });
    await deployDirectory(client);
    process.exit(0);
  } catch (error) {
    throw error;
  };
};