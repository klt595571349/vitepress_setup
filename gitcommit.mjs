#! /usr/bin/env zx
// @ts-nocheck

$.verbose = false; //关闭详情展示

chalk.level = 1;
const redlog = chalk.red.bold;
const branch = await $`git branch --show-current`;
// console.log(`当前分支：${branch}`);
// let newbranch = JSON.stringify(branch);
// console.log("newbranch: ", newbranch);
// // let branch = 1;
// let taretbranch = `master`;
// // console.log(`当前分支：${redlog(branch)}`);
// console.log("taretbranch: ", taretbranch);
// console.log("branch: ", branch.stdout);
// if (branch != taretbranch) {
//   console.log(`当前分支不是${taretbranch}，退出`);
//   process.exit(1);
// }
// console.log(`已经在${taretbranch},继续执行`);

await $`git add .`;
await $`git commit -m "commit by zx"`;
await $`git push`;
console.log(`已经推送到${branch}分支`);
