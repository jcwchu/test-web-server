let logger = require('../logger'),
	express = require('express'),
	router = express.Router();

let config = {
  "schemas": ["urn:scim:schemas:core:1.0"],
  "documentationUrl":"http://example.com/help/scim.html",
  "patch": {
    "supported":true
  },
  "bulk": {
    "supported":true,
    "maxOperations":1000,
    "maxPayloadSize":1048576
  },
  "filter": {
    "supported":true,
    "maxResults": 200
  },
  "changePassword" : {
    "supported":true
  },
  "sort": {
    "supported":true
  },
  "etag": {
    "supported":true
  },
  "xmlDataFormat": {
    "supported":true
  },
  "authenticationSchemes": [
    {
      "name": "OAuth Bearer Token",
      "description": "Authentication Scheme using the OAuth Bearer Token Standard",
      "specUrl":"http://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-01",
      "documentationUrl":"http://example.com/help/oauth.html",
      "type":"oauthbearertoken",
      "primary": true
    },
    {
      "name": "HTTP Basic",
      "description": "Authentication Scheme using the Http Basic Standard",
      "specUrl":"http://www.ietf.org/rfc/rfc2617.txt",
      "documentationUrl":"http://example.com/help/httpBasic.html",
      "type":"httpbasic"
     }
  ]
};

router.route('')
	.get((req, res) => {
		res.json(config);
	});

router.route('/:id')
	.get((req, res) => {
		res.status(401).send(`${req.params.id} not found`);
	});

module.exports = router;