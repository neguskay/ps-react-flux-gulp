'use strict';

//This file is mocking a web API by hitting hard coded data.
//Fake api
var authors = require('./authorData').authors;
var loadMeSomething = require('lodash');
//var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
	//return cloned copy so that the item is passed by value instead of by reference
	return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors);
	},

	getAuthorById: function(id) {
		var author = loadMeSomething.find(authors, { id: id });
		return _clone(author);
	},

	saveAuthor: function(author) {
		//pretend an ajax call to web api is made here
		console.log(
			'Pretend this just saved the author to the DB via AJAX call...'
		);

		if (author.id) {
			var existingAuthorIndex = loadMeSomething.indexOf(
				authors,
				loadMeSomething.find(authors, { id: author.id })
			);
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			author.id = _generateId(author);
			authors.push(_clone(author));
		}

		return author;
	},

	deleteAuthor: function(id) {
		console.log(
			'Pretend this just deleted the author from the DB via an AJAX call...'
		);
		loadMeSomething.remove(authors, { id: id });
	}
};

module.exports = AuthorApi;
