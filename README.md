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

部署到测试环境的方式:
```bash
ssh-deploy test
```

部署到跳板机的方式:
```bash
ssh-deploy proxy
```


以下是在跳板机上运行的命令:
```bash
ssh-deploy prod
```