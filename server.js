var express = require("express");  //lib-----Node Module
var app = express();  // will create app object from express package

var onAboutUs = function(req, res){
    res.send("Chief Mentor :Yoges Chauriwar");
};

var onDefault = function(req, res){
    res.send("<h1>Fabrikam Multi-National Company</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>We have 24 Offices all over the world</li>"+
                    " <li>intranet for Human Resources</li>"+
                    " <li>intranet for Accounting</li>"+
                    " <li>intranet for Project Management</li>"+
             "</ol>");
};

app.get("/", onDefault);  // Request handler functions are registered
app.get("/aboutus", onAboutUs);  // Request handler functions are registered
var server = app.listen(8081);
console.log("Server is running on port 8081");
