const toast = require("@/utils/toast");
const getDeployConfig = require("@/utils/getDeployConfig");

module.exports = async function (client) {
  try {
    const { local, remote } = getDeployConfig();
    toast.start(["将", local, "部署到", remote].join(""));
    const status = await client.putDirectory(local, remote, {
      recursive: true,
      concurrency: 10
    });
    if (status) {
      toast.succeed("部署成功!");
    } else {
      toast.fail("部署失败!");
    };
  } catch (error) {
    toast.fail("其他错误!");
    throw error;
  };
};