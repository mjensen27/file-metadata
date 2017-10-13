var express     = require("express");
var app         = express();
var upload      = require("multer")();
var bodyParser  = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("index");
});

app.post("/file-size", upload.any(), function(req,res){
  var size = req.files[0].size;
  var name = req.files[0].originalname;
  res.render("file-size", {size: size, name: name});
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server Online...");
});