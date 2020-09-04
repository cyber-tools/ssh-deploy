const { NodeSSH } = require("node-ssh");
const toast = require("@/utils/toast");


module.exports = async (configs) => {
  try {
    const ssh = new NodeSSH();
    toast.start(["正在连接远程主机", configs.host].join(""));
    await ssh.connect(configs);
    toast.succeed("连接成功!");
    return ssh;
  } catch (error) {
    toast.fail("连接失败!");
    throw error;
  };
};
