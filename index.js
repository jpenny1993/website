const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
		//console.log('Looking for file: ' + filePath);

        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
					console.log('Missing file: ' + filePath);
                    filePath = path.resolve('./public/404.html');
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else if (fileExt == '.css') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.js') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/javascript');
            fs.createReadStream(filePath).pipe(res);
        }
        else if (fileExt == '.jpg') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
					console.log('Missing file: ' + filePath);
                    filePath = path.resolve('./public/404.html');
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                    return;
                }
				res.statusCode = 200;
				res.setHeader('Content-Type', 'image/jpeg');
				fs.createReadStream(filePath).pipe(res);
            });
        }
        else if (fileExt == '.png') {
			fs.exists(filePath, (exists) => {
                if (!exists) {
					console.log('Missing file: ' + filePath);
                    filePath = path.resolve('./public/404.html');
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                    return;
                }
				res.statusCode = 200;
				res.setHeader('Content-Type', 'image/png');
				fs.createReadStream(filePath).pipe(res);
            });
        }
		else if (fileExt == '' && fs.lstatSync(filePath).isDirectory()) {
			filePath = filePath + '/index.html'
			// console.log('Looking for file: ' + filePath);
			fs.exists(filePath, (exists) => {
				if (!exists) {
					console.log('Missing file: ' + filePath);
					filePath = path.resolve('./public/404.html');
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/html');
					fs.createReadStream(filePath).pipe(res);
					return;
				}
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				fs.createReadStream(filePath).pipe(res);
			});
		}
        else {
			console.log('Missing file: ' + filePath);
            filePath = path.resolve('./public/404.html');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
        }
    }
    else {
		console.log('Missing file: ' + filePath);
        filePath = path.resolve('./public/404.html');
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});