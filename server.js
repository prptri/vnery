const express = require("express");
const path = require("path");
const app = express();
const connection = require("./db_connection");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const net = require("net");

// Body Parser Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.on("listening", function(req, res) {
  res.render("/");
});

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
  console.log("-------------------------------------------");
  console.log(req.body.div1);
  console.log(req.body.div2);
  console.log("req received");
  console.log("-------------------------------------------");
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
