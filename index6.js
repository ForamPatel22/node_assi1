var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('./pages/zipfile.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./pages/zipfile.txt','utf-8'));
console.log("File Decompressed.")