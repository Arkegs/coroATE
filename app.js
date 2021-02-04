var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	routes = require("./routes/routing.js");

//app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/", routes);


app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function(){
	console.log("Coro ATE server has started!");
});