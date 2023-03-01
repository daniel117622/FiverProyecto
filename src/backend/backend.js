const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const filestore = require("session-file-store")(session);
const port = 5000;
const db = require("./MongoClient");
const bodyParser = require("body-parser");

const Usuario = require('./models/user')
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

  db.collection("usuario").findOne({"nombre":MYUser},(err,document) => {
    console.log(document);
    console.log(err);
    res.json({ msg: "Aceptado" });
  }).catch( (e) => {res.json({msg: "Ocurrio un error: " + e})} )
});

app.post('/test/user',(req,res) => {
  res.json({msg:'Connected to backend'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
  let usr = new Usuario();
  usr._id = 3;
  usr.name = "Testing2";
  usr.save()
  // Usuario.fetchAll().then((doc) => {console.log(doc)})
});
