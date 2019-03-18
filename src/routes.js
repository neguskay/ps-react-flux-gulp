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
		<Route name="about" handler={require('./components/about/aboutPage')} />
		{/* <NotFoundRoute handler={require('./components/notFoundPage')} /> */}
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

//Export the routes module
module.exports = routes;
