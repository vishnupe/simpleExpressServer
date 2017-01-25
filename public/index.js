console.log('index loaded');
var submit=function(evt){
	var url = document.getElementById('url').value;
	var filename = document.getElementById('filename').value;

	var details = {
		url:url,
		filename:filename
	};

	var formBody = [];
	for (var property in details) {
		var encodedKey = encodeURIComponent(property);
		var encodedValue = encodeURIComponent(details[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");

	fetch('http://localhost:8080/send', {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: formBody
	}).then(function(res){ return res.json(); })
	.then(function(data){ alert( JSON.stringify( data ) ) })
	evt.preventDefault();
}
window.onload = function() {
	var f = document.getElementById('form');
	f.addEventListener("submit",submit);
}

