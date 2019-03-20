'use strict';

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

//var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var AuthorActions = require('../../flux/actions/authorActions');
var AuthorStore = require('../../flux/stores/authorStore');

//Author Page Component
var AuthorPage = React.createClass({
	//set/Get the initial state of teh authors
	getInitialState: function() {
		//console.log(AuthorStore.getAllAuthors());
		return {
			//old
			//authors: []
			authors: AuthorStore.getAllAuthors()
		};
	},

	//Add the listener for changes
	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	//Remove the listener when not needed
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	//Render and re-render the page when there's a change within the "db"
	//for example if there's a delete
	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	},

	// Fetch some data if component actually mounted
	// Not needed after flux implementations
	// componentDidMount: function() {
	// 	if (this.isMounted()) {
	// 		this.setState({ authors:  });
	// 	}
	// },

	//The render method to be returned
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">
					Add Author
				</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

//Module export
module.exports = AuthorPage;
