const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
// 	if(err) throw err;
// 	console.log('Folder created...');
// 	}
// );


// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if(err) throw err;
	console.log('Folder created...');
	}
);

