const toast = require("@/utils/toast");

module.exports = async function (client, local, remote) {
  try {
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