#! /usr/bin/env node

const verify = require("./verify");
console.log(verify.verify(verify.deleteHyphen(process.argv[2]))?"isbn码正确":"isbn码错误");