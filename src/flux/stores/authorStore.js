'use strict';

//Need dispatcher, types, and node emitter
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

//Required installed packages
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _loader = require('lodash');

//Change event constant
var CHANGE_EVENT = 'change';

//Private data authors
//Stored by the store, and changed when actiosnarer dispatched
var _authors = [];

//Take a new object
//Extend the object to use the Event emitter prototype
//Defines the core of the store
//- define the rest of the store
//- meaning everythin in there will also have the event emitter prototype
var AuthorStore = assign({}, EventEmitter.prototype, {
	//Adds a change listenner
	//accepts a call back
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	//Removes the listener on change
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	//broadcast the change
	//All uses the event emitter prototype
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	//Returns all authors data
	getAllAuthors: function() {
		return _authors;
	},

	//USES THE LOADASH'S FIND FUNCTION
	getAuthorById: function(id) {
		return _loader.find(_authors, { id: id });
	}
});

//Dispatch Register,needed by store to knwo how to distribute dispatches
//this tells the store how to dispatch actions
//this has logic to dispatch to specfic cations based on action types
Dispatcher.register(function(action) {
	//dispatch depends on the action's type
	switch (action.actionType) {
		//if type is initialise
		case ActionTypes.INITIALIZE:
			_authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;

		//if type is create author
		case ActionTypes.CREATE_AUTHOR:
			//from the action payload
			//the action given's author data
			//Store the data
			_authors.push(action.author);

			//Emit a change
			//Very important after the state of store is changed
			AuthorStore.emitChange();
			break;

		//if type is update author
		//get existing author by id
		//get index
		//find the existing author's index
		//replace the authors details with the new details
		case ActionTypes.UPDATE_AUTHOR:
			var existingAuthor = _loader.find(_authors, { id: action.author.id });
			var existingAuthorIndex = _loader.indexOf(_authors, existingAuthor);
			_authors.splice(existingAuthorIndex, 1, action.author);
			AuthorStore.emitChange();
			break;

		// //if type is delete author
		case ActionTypes.DELETE_AUTHOR:
			_loader.remove(_authors, function(author) {
				return action.id === author.id;
			});
			AuthorStore.emitChange();
			break;

		default:
		// no op == nothing to do here
	}
});

//Export the author store module
//only export the store
//no need to export the
module.exports = AuthorStore;
