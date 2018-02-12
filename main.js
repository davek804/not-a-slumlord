var fs = require('fs');
var prompt = require('prompt');

function loadInputData() {
	fs.readFile('variables.json', "utf8", function read(err, data) {
	if (err) {
		throw err;
	}
	var content = data;
	return content;
});
}


var inputData = loadInputData();
console.log(inputData);


prompt.start();
prompt.get(['listprice']), function (err, result) {
    console.log('Command-line input received:');
    console.log('  listprice: ' + result.listprice);
}
