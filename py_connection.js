const net = require("net");

var client = new net.Socket();
client.connect(60000, "10.26.250.224", function(err, results) {
  if (err) throw err;
  console.log("Connected");
  client.on("data", function(data) {
    console.log("Received: " + data);
    client.write("back-end");
  });
});
