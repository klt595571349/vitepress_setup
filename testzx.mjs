#! /usr/bin/env zx
//#! /bin/zsh zx
// @ts-nocheck

// console.log("#! /usr/bin/env node");

// #! /usr/bin/env node

// 请求github api 获取所有的仓库地址
// const netdata = await fetch("https://api.github.com/users/klt595571349/repos");
// const urls = await netdata.json();
// // console.log(urls);

// const repourls = urls
//   .filter((info) => {
//     return !info.fork;
//   })
//   .map((item) => {
//     return item.git_url;
//   });

// console.log("repourls: ", repourls);

// 创建文件夹并进入
// await $`rm -rf backups`;
// await $`mkdir backups`;
// cd("./backups");

// console.log("进入backups目录");

// await $`echo $SHELL`;
// console.log("打印当前shell");

// await $`cli`;

// await $`cli open`;
// console.log("打开Hbuildx");

// await $`cli project list`;
// console.log("列出所有项目");

// import { $ } from "zx";
// import { $ } from "zx";

// await $`ls`;

// await $`cli project list`;

// let cli = `/Applications/HBuilderX.app/Contents/MacOS/cli`;

const branch = await $`git branch --show-current`;
console.log(`当前分支：${branch}`);

$.verbose = false;
// let branch = 1;
chalk.level = 1;
console.log(`当前分支：${chalk.red.bold(branch)}`);

// console.log(`当前cli是：${cli}`);
// await $`cd ~/Applications/HBuilderX.app/Contents/MacOS/cli`;

// await $`chsh -s /bin/zsh`;
// console.log("切换zsh");

// await $`cli project list`;
