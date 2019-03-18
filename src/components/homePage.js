'use strict';

var React = require('react');

//Homepage body
var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Hello world from React-Flux</h1>
				<h6>Created by Sid</h6>
				<br />
				<p>React, React-Router and Flux: Fast and Responsive!</p>
			</div>
		);
	}
});

module.exports = Home;
