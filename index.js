const fs = require("node:fs");
const path = require("node:path");

const dir = fs.readdirSync(path.join(__dirname, "./source"));

dir.forEach(i => {
    let item = fs.readdir(i);
    console.log(item);
});
