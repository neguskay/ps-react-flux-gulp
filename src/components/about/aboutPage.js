'use strict';

var React = require('react');

//About Page
//Has some transitons in the statics to check for some things either before the about page or leaving it
var About = React.createClass({
	statics: {
		//Could use to validate the authorisation and login before rendering
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm("You want to read a page that's this boring?")) {
				transition.about();
			} else {
				callback();
			}
		},

		//Could use to validate and check forms before leaving to another page
		//i.e. prevent people from loosing work or forms
		willTransitionFrom: function(transition, component) {
			if (!confirm("You want to leave a page that's this exciting?")) {
				transition.about();
			}
		}
	},

	//Render method fo the component
	render: function() {
		return (
			<div className="jumbotron">
				<h1>About: This APP</h1>
				<h6>Created by Sid</h6>
				<br />
				<p>This app uses the following:</p>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Gulp</li>
					<li>Bootstrap</li>
					<li>Browserify</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;
