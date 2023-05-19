const fs = require("fs");
const data = fs.readFileSync("src/config/Database.json");
module.exports = data;
