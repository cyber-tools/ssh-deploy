const createClient = require("@/utils/createClient");
const getConfigInfo = require("@/utils/getConfigInfo");
const deployDirectory = require("@/scripts/deploy-directory");

module.exports = async function (option) {
  try {
    const { config } = option;
    const { local, remote, client } = await getConfigInfo(config);
    const ssh_client = await createClient(client);
    await deployDirectory(ssh_client, local, remote);
    process.exit(0);
  } catch (error) {
    throw error;
  };
};