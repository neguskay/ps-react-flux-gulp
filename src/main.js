$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var AuthorPage = require('./components/authors/authorPage');

var printSomething = console.log(
	'Hello, I am browserify annd I work: I bundle things!'
);

// React.render(<Home />, document.getElementById('app'));

//module.exports = App;

//An IIFI = Immediately invoked function item
//Allows for using 'use strict' in function context
(function(win) {
	'use strict';
	var App = React.createClass({
		render: function() {
			var Child;

			//Temporary switch statements for the 'fake' router
			switch (this.props.route) {
				case 'about':
					Child = About;
					break;

				case 'authors':
					Child = AuthorPage;
					break;

				default:
					Child = Home;
			}

			return (
				<div>
					<Header />
					<Child />
				</div>
			);
		}
	});

	//New render function
	//get a part of the hash string.
	function render() {
		//Just checking for what is stored in substrings
		console.log('Susbtring 0::', window.location.hash.substr(0));
		console.log('Susbtring 1::', window.location.hash.substr(1));

		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	//Call the window, listen to the url hash chnage after creating an event listeneer on the window
	window.addEventListener('hashchange', render);
	render();
})(window);
