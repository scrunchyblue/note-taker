// Dependencies //
// =============================================

var express = require("express");
var path = require("path");
var fs = require("fs");
var http = require("http")

const { json } = require("body-parser");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/notes.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.json(data);
  });
}

// HTML Routes //
//==============================================

app.get(`/notes`, function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
  });

app.get(`*`, function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  });


// Starts our server
// =============================================
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


// app.delete('/api/notes/:id', (req, res) => {
//   console.log('api/notes/:iddelete')
//   deleteNoteFromJSON(req.params.id);
//   res.json(getJson());
// })
