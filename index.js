#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");

program
  .usage("@tianque/ssh-deploy")
  .version(json.version);

program
  .command("deploy")
  .option("-c,--config <config>")
  .description("部署至测试环境")
  .action(require("@/actions/deploy-deploy"));

program
  .command("config")
  .description("写入登录信息")
  .action(require("@/actions/deploy-config"));

program.parse(process.argv);
