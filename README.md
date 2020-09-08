<h2 align="center">Introduction</h2>
<div align="center">
  针对h5的部署写了一个ssh客户端的部署脚本
  目前测试环境和跳板机上均没有安装node.js
  所以还是需要使用ssh-deploy test命令
</div>
<h2 align="center">Install</h2>

```bash
npm install @tianque/ssh-deploy  -g
```

<h2 align="center">Usage</h2>

生成deploy.config.js文件模板:
```bash
ssh-deploy config
```

部署命令:
```bash
ssh-deploy deploy
```



<h2 align="center">deploy.config.js</h2>

一下是公司测试环境的样例

```bash
const path=require("path");

module.exports={
  local: path.resolve(__dirname, "./dingNew/"),
  remote: "/home/admin/jsProject/dingNew",
  client: {
 	 	port: 11,
    host: "192.168.1.XXX",
    username: "XXXXX",
    password: "XXXXX"
  }
};
```