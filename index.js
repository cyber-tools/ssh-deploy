#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");

program
  .usage("@tianque/ssh-deploy")
  .version(json.version);

program
  .command("test")
  .description("部署至测试环境")
  .action(require("@/actions/deploy-test"));

program
  .command("proxy")
  .description("部署至跳板机")
  .action(require("@/actions/deploy-proxy"));

program
  .command("prod")
  .description("部署至生产环境")
  .action(require("@/actions/deploy-prod"));

program.parse(process.argv);


