'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

//All the author possible actions to be dispatched
//Have a 'type' and 'data' i.e. 'author' in the payload
var AuthorActions = {
	createAuthor: function(author) {
		//Call the API save author function which returns a new author
		//this will then be dispatched for rendering
		//This call, in an actual API, would be asynchronous
		//so you will need to send some promis data back
		var newAuthor = AuthorApi.saveAuthor(author);

		//Hey dispatcher, go tell all the stores that an author was just created.
		//Send the action type and the data, i.e. the 'newAuthor' new author
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

	//Update an author
	updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},

	//Delete an author
	deleteAuthor: function(id) {
		AuthorApi.deleteAuthor(id);

		//In async, can wait for the promis, then fire off a "AUTHOR DELETED" action
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

module.exports = AuthorActions;
