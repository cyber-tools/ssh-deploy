const createClient = require("@/utils/createClient");
const getConfigInfo = require("@/utils/getConfigInfo");
const removeDirectory = require("@/scripts/remove-directory");
const deployDirectory = require("@/scripts/deploy-directory");

module.exports = async function (option) {
  try {
    const { config } = option;
    const { local, remote, client, beforeDeploy, afterDeploy } = await getConfigInfo(config);
    const ssh_client = await createClient(client);
    await removeDirectory(ssh_client, remote);
    if (beforeDeploy) {
      await beforeDeploy(ssh_client);
    };
    await deployDirectory(ssh_client, local, remote);
    if (afterDeploy) {
      await afterDeploy(ssh_client);
    };
    process.exit(0);
  } catch (error) {
    throw error;
  };
};