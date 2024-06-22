const os = require('os');

// console.log('CPU Architecture ' , os.arch());
// console.log('Free Memory ' ,os.freemem());
// console.log('Total Memory ' ,os.totalmem());
// console.log('Network Interfaces ',JSON.stringify(os.networkInterfaces()));
// console.log('OS Default tempt directory' , os.tmpdir());

console.log('Endianess ' , os.endianness());
console.log('Hostname : ' ,os.hostname());
console.log('Type of OS : ' ,os.type());
console.log('OS release : ' ,os.release());