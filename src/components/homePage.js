'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

//Homepage body
var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Hello world from React-Flux</h1>
				<h6>Created by Sid</h6>
				<br />
				<p>React, React-Router and Flux: Fast and Responsive!</p>
				<Link to="about" className="btn btn-primary btn-lg">
					Learn more
				</Link>
			</div>
		);
	}
});

module.exports = Home;
