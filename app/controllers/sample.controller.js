const fileHandler = require('../utilities/file.utility');

function send(req, res) {

	let responseMessage = {message:"Request recieved Download started"};;
	console.log(req.body);
	 fileHandler.downloadFile(req.body.url,req.body.filename);
	res.json(responseMessage);
}

module.exports = {
  send:send
}