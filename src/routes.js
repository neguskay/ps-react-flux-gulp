'use strict';

//Routes declarative file [separate]
var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

//Declare all the routes
var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route
			name="authors"
			handler={require('./components/authors/authorPage')}
		/>
		<Route
			name="about"
			handler={require('./components/authors/manageAuthorPage')}
		/>
		<Route
			name="addAuthor"
			path="author"
			handler={require('./components/authors/manageAuthorPage')}
		/>
		<Route
			name="manageAuthor"
			path="author/:id"
			handler={require('./components/authors/manageAuthorPage')}
		/>
		<NotFoundRoute handler={require('./components/notFoundPage')} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

//Export the routes module
module.exports = routes;
