var os = require("os");
var fs = require("fs");
var crypto = require("crypto");
const app = {
  name: "Neha",
  age: "23",
};

function processInput(text) {
  fs.open("output.txt", "a", 666, function (e, id) {
    fs.write(id, text + os.EOL, null, "utf8", function () {
      fs.close(id, function () {
        console.log("file is updated");
      });
    });
  });
}

let keys = Object.keys(app);
keys.forEach((el) => {
  processInput(el + ":" + app[el]);
});

// the file you want to get the hash
var fd = fs.createReadStream("output.txt");
var hash = crypto.createHash("sha1");
hash.setEncoding("hex");

fd.on("end", function () {
  hash.end();
  console.log(hash.read()); // the desired sha1sum
});

// read all file and pipe it (write it) to the hash object
fd.pipe(hash);
