/*eslint-disable strict */ //disable the 'use strict' on this page

//Libraries
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

$ = jQuery = require('jquery');
//Components
var Header = require('./common/header');

//Top level component
var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<RouteHandler />
				</div>
			</div>
		);
	}
});

module.exports = App;
