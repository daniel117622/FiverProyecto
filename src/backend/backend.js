const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const filestore = require("session-file-store")(session);
const port = 5000;
const db = require("./MongoClient");
const exec = require("child_process").exec;
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(
  session({
    name: "session-id",
    secret: "GFGEnter",
    saveUninitialized: false,
    resave: false,
    store: new filestore(),
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  var MYUser = req.headers.username;
  var MyPass = req.headers.password;
  // db.collection("usuario").findOne({"nombre":MYUser}).then((doc) => {
  //   console.log("USUARIO encontrado:" + doc);
  // }).catch((er) => {console.log("CODIGO DE ERROR:"+ er)})
  //var authHeader = req.headers.authorization;
  db.collection("usuario").findOne({"nombre":MYUser},function(err,document){
    console.log(document);
    console.log(err);
    res.json({ msg: "Aceptado" });
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  db.collection("eventos")
    .find()
    .toArray()
    .then((res) => {
      console.log(res);
    });
});
