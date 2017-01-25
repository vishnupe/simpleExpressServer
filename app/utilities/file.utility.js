const https = require('https');
const http = require('http');

const fs = require('fs');


function downloadFile(url,fileName) {
	var file = fs.createWriteStream(fileName);


    if (url.indexOf("http://") == 0) {
        // do something here
        var request = http.get(url, function(response) {
		  response.pipe(file);
		});
    }else{
    	var request = https.get(url, function(response) {
		  response.pipe(file);
		});
    }

	
}

function listDirectories(folder) {
	//const testFolder = './';

	fs.readdir(folder, (err, files) => {
	  files.forEach(file => {
	    console.log(file);
	  });
	})
}

module.exports = {
  downloadFile,
  listDirectories
}