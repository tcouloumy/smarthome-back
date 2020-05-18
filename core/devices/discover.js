const fs = require('fs');

let discover = async function(req, res) {

	let result = [];
	let test = [];

	fs.readdirSync(__dirname + '/../../modules').forEach(dir => {
		const service = require(__dirname + '/../../modules/' + dir + '/' + dir + '.service.js');
		test.push(service);
	});

	for (var i = 0; i < test.length; i++) {
		if (test[i].discover) {
			await test[i].discover().then(data => {
				result = [ ...result, ...data ];			
			});
		}
	}

	setTimeout(() => {
		return res.status(200).send(result);
	}, 2000)
	
}

module.exports = discover;