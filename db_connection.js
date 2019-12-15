const mysql = require("mysql");

const db = mysql.createConnection({
  host: "35.240.228.214",
  user: "vnery",
  password: "cssit17",
  database: "vnery"
});

module.exports = db;
