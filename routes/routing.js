var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.render("index");
});

router.get("/theme", function(req, res){
	res.render("delante_de_la_cruz");
});

module.exports = router;