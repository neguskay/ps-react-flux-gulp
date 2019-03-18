'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

//Author Page Component
var AuthorPage = React.createClass({
	//set/Get the initial state of teh authors
	getInitialState: function() {
		return {
			authors: []
		};
	},

	//Fetch some data if component actually mounted
	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });
		}
	},

	//The render method to be returned
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

//Module export
module.exports = AuthorPage;
