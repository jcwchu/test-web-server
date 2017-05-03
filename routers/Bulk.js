let logger = require('../logger'),
	express = require('express'),
	router = express.Router();

router.route('')
	.post((req, res) => {
		res.status(501).send('not implemented');
	});

router.route('/:id')
	.post((req, res) => {
		res.status(501).send('not implemented');
	});

module.exports = router;