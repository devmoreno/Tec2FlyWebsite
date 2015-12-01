/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request-promise');

module.exports = {
	
	test:function(req,res){
		
		res.json({Success:'yesddd'});
		
	},
	testpost:function(req,res){
		var body = req.body;
		console.log(req.body);
		res.json(body);
	},
	
	tec2send:function(req,res){
		//Lets create our settings
		var options = {
				method: 'POST',
				uri: 'https://tec2api.azure-api.net/v1/Customer/Create',
				body: {
						"FirstName": req.body.FirstName,
						"LastName": req.body.LastName,
						"Email": req.body.Email,
						"Phone": req.body.Phone
				 },
				json: true,
				headers:{
				"Content-Type" : "application/json",
                "ocp-apim-subscription-key" : "c45b00b771244a07a59d56f5e01ede96"
				}
		};
	
		//Issue the request
		request(options)
			.then(function (parsedBody) {
				console.log(parsedBody);
				res.json(parsedBody)
			})
			.catch(function (err) {
				// POST failed... 
				console.log(parsedBody);
				res.json(parsedBody)
			});
				
	}
	
};

