const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




//Server static assets if in production for front-end

  //set static folder
  app.use(express.static("public"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
  app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "about.html"));
  });
  app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "contactus.html"));
  });


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));