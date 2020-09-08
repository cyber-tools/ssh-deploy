const toast = require("@/utils/toast");


module.exports = async (client, remote) => {
  try {
    toast.start(["正在移除旧的", remote, "文件夹"].join(""));
    const rm_result = await client.exec("rm", ["-rf", remote]);
    if (rm_result.stdout) {
      toast.succeed(["旧文件夹", remote, "移除成功!"].join(""));
    };
    if (rm_result.stderr) {
      toast.fail(["旧文件夹", remote, "移除失败!"].join(""));
    };
  } catch (error) {
    throw error;
  };
};