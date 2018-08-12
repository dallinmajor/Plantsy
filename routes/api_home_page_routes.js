var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("home");
	});
	
	app.get("/plant/:id", function(req, res) {
		var id = parseInt(req.params.id);

		db.Plant.findById(id).then(project => {
			console.log(project.dataValues);
			res.render("plant", project.dataValues);
		})

	});
};
	