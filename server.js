const express = require("express");
const path = require("path");
const app = express();
const db_connection = require("./db_connection");
//const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const net = require("net");
// TO CONNECT TO PYTHON
const client = new net.Socket();
//db_connection.connect();
//console.log("");

client.connect(60000, "192.168.43.89", function(err, results) {
  if (err) throw err;
  console.log("Connected");
  client.on("data", function(data) {
    console.log("Received: " + data);
    if (data == "who?") {
      client.write("back-end");
    }
  });
});
// Body Parser Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = (req, res, next) => {
  console.log("Hello");
  next();
};

// Handlebars Middleware
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set('view engine', 'ejs');

// Homepage Route
//app.get('/', (req, res) => res.render('home'));

// Main Route && connect to python
app.get("/main", function(req, res) {
  //connect to Python Server
  /*var client = new net.Socket();
  client.connect(60000, "10.26.250.224", function(err, results) {
    if (err) throw err;
    console.log("Connected");
    client.on("data", function(data) {
      console.log("Received: " + data);
      client.write("back-end");
    });
  });*/
  res.render("main");
});

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/save", function(req, res) {
  //connect to python

  //var screens = {};
  var screen1 = req.body.div1;
  var screen2 = req.body.div2;
  console.log(screen1);
  console.log(screen2);
  var sc1 = JSON.stringify(screen1);
  var sc2 = JSON.stringify(screen2);
  client.write(sc1);
  console.log(screen1);
  setTimeout(function() {
    console.log("delay 10 sec ...");
  }, 10000);
  client.write(sc2);
  console.log(screen2);

  //redirect to main.
  res.redirect("/main");
});

// Init Middleware
// app.use(logger);

// Starting Page
//app.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});

// Main Page

// Presets API Routes
app.use("/api/presets", require("./routes/api/presets"));

// set Static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
