'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../../api/authorApi');

//Called in main.js to get the initial list of author
//This is where some initialisation for teh app should go
var InitializeActions = {
	//Initialise the app
	initApp: function() {
		//set the type to "iniialise"
		//dispatch the initial author list as a data
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;
