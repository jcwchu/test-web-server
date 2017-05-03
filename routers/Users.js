let logger = require('../logger'),
	express = require('express'),
	router = express.Router();

router.route('')
	.get((req, res) => {
		res.status(500).send('not implemented');
	});

router.route('/:id')
	.get((req, res) => {
		if (req.params && req.params.id) {
			// find and return the user
		}
		res.status(500).send('not implemented');
	})
	.post((req, res) => {
		res.status(500).send('not implemented');
	})
	.put((req, res) => {
		res.status(500).send('not implemented');
	})
	.patch((req, res) => {
		res.status(500).send('not implemented');
	})
	.delete((req, res) => {
		res.status(500).send('not implemented');
	});

module.exports = router;