// Dependencies //
// =============================================

var express = require("express");
var path = require("path");

const { json } = require("body-parser");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes //
//==============================================


// Starts our server
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });