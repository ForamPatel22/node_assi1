var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('./pages/zipfile.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./pages/zipfile.txt.gz'));

console.log("File Compressed.");