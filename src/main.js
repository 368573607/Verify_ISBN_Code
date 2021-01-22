const verify = require("./verify");

//console.log(verify.weight(process.argv[2]));
console.log(verify.verify(verify.deleteHyphen(process.argv[2])));