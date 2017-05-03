let logger = require('../logger'),
	express = require('express'),
	router = express.Router();

router.route('')
	.get((req, res) => {
		res.status(501).send('not implemented');
	});

router.route('/:id')
	.get((req, res) => {
		if (req.params && req.params.id) {
			// find and return the user
		}
		res.status(501).send('not implemented');
	});

module.exports = router;