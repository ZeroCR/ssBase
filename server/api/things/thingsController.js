'use strict';

const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;

router.route('/')
	.get((req, res) => {
    res.send({test: 'test'});
		// userService.getUsers()
		// .then( (results) => {
		// 	res.set('Content-Type','application/json');
		// 	res.send(results);
		// })
		// .catch( err => res.status(500).send({error: err}));
	})
	.post((req, res) => {
    res.send({test: 'test'});
		// userService.saveUser()
		// .then((results) => {
		// 	res.set('Content-Type','application/json');
		// 	res.send(results);
		// })
		// .catch( err => res.status(500).send({error: err}));
	});

module.exports = router;