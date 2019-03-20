'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitialiseActions = require('./flux/actions/initializeActions');

var printSomething = console.log(
	'Hello, I am browserify annd I work: I bundle things!'
);

//Initialise the app with the saved author list
InitialiseActions.initApp();

//Add parameter "Router.HistoryLocation" to use HTML5 history state to change URLs
// Router.run(routes, Router.HistoryLocation, function(Handler) {
// 	React.render(<Handler />, document.getElementById('app'));
// });

//Without the "Router.HistoryLocation", we use # to determine URLs
Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('app'));
});
//var Child;

//Temporary switch statements for the 'fake' router
// switch (this.props.route) {
// 	case 'about':
// 		Child = About;
// 		break;

// 	case 'authors':
// 		Child = AuthorPage;
// 		break;

// 	default:
// 		Child = Home;
// }

// React.render(<Home />, document.getElementById('app'));

//module.exports = App;

//An IIFI = Immediately invoked function item
//Allows for using 'use strict' in function context
// (function(win) {
// 	'use strict';

// 	//New render function
// 	//get a part of the hash string.
// 	function render() {
// 		//Just checking for what is stored in substrings
// 		console.log('Susbtring 0::', window.location.hash.substr(0));
// 		console.log('Susbtring 1::', window.location.hash.substr(1));

// 		var route = window.location.hash.substr(1);
// 		React.render(<App route={route} />, document.getElementById('app'));
// 	}

// 	//Call the window, listen to the url hash chnage after creating an event listeneer on the window
// 	window.addEventListener('hashchange', render);
// 	render();
// })(window);
