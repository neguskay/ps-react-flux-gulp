'use strict';

var React = require('react');

var About = React.createClass({
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
