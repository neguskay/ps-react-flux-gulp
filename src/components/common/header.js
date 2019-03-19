'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

//header component with nav links
//Also added styling
//Also used links instead of basic anchor tags
var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						<img src="images/pluralsight-logo.png" />
					</a>
					<ul className="nav navbar-nav">
						<li>
							<Link to="app">Home</Link>
							{/* <a href="/">Home</a> */}
						</li>
						<li>
							<Link to="about">About</Link>
						</li>
						<li>
							<Link to="authors">Authors</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
});

//Module export
module.exports = Header;
