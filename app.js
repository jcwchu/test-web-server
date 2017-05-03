let config = require('./config'),
	logger = require('./logger'),
	promise = require('bluebird'),
	fs = require('fs'),
	path = require('path'),
	express = require('express'),
	app = express();

promise.promisifyAll(fs);

// Setup routers
app.use((req, res, next) => {
	let timestamp = (new Date()).toISOString();
	logger.debug(`${timestamp} ${req.method} ${req.originalUrl}`);
	next();
});

LoadRouters('', path.join(__dirname, 'routers'));

// Start the server
app.locals.port = config.port || 8080;
app.listen(app.locals.port, () => logger.debug(`listening on port ${app.locals.port}`));

async function LoadRouters(uri_path, file_path) {
	let routers = [{
		uri: uri_path,
		file: file_path
	}];

	let router;
	while (router = routers.pop()) {
		let stat = await fs.statAsync(router.file);
		if (stat.isDirectory()) {
			let sub_routers = await fs.readdirAsync(router.file)
				.map(file => ({
					file: path.join(router.file, file),
					uri: router.uri + '/' + path.parse(file).name
				}));
			routers.push(... sub_routers);
		} else {
			logger.debug(`loading router ${router.uri}`);
			app.use(router.uri, require(router.file));
		}
	}
}
