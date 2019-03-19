'use strict';

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

//Used for notifications
var toastr = require('toastr');

//A smart component
//A controller view
//Controls the Author form component
var ManageAuthorPage = React.createClass({
	//Use to navigate the transitions
	mixins: [Router.Navigation],

	// statics: {
	// 	willTransitionFrom: function(transition, component) {
	// 		if (component.state.dirty && !confirm('Leave without saving?')) {
	// 			transition.abort();
	// 		}
	// 	}
	// },

	//Declare some initial states
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' }
			// errors: {},
			// dirty: false
		};
	},

	// componentWillMount: function() {
	// 	var authorId = this.props.params.id; //from the path '/author:id'

	// 	if (authorId) {
	// 		this.setState({author: AuthorApi.getAuthorById(authorId) });
	// 	}
	// },

	//Set and update states: called after every key press in the form
	//get event reference to the feild and value after a key press
	//update the state
	setAuthorState: function(event) {
		//this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({ author: this.state.author });
	},

	// authorFormIsValid: function() {
	// 	var formIsValid = true;
	// 	this.state.errors = {}; //clear any previous errors.

	// 	if (this.state.author.firstName.length < 3) {
	// 		this.state.errors.firstName = 'First name must be at least 3 characters.';
	// 		formIsValid = false;
	// 	}

	// 	if (this.state.author.lastName.length < 3) {
	// 		this.state.errors.lastName = 'Last name must be at least 3 characters.';
	// 		formIsValid = false;
	// 	}

	// 	this.setState({errors: this.state.errors});
	// 	return formIsValid;
	// },

	//Save the author form the form
	saveAuthor: function(event) {
		//prevent the submit button from early submition
		event.preventDefault();

		// if (!this.authorFormIsValid()) {
		// 	return;
		// }

		//Call API and save the aithor
		AuthorApi.saveAuthor(this.state.author);
		// this.setState({dirty: false});

		//Genrate some nice firendly message via toastr
		toastr.success('Author saved.');

		// Transition to 'authors' page after a save occurs successfully
		this.transitionTo('authors');
	},

	render: function() {
		return (
			// <AuthorForm
			// 	author={this.state.author}
			// 	onChange={this.setAuthorState}
			// 	onSave={this.saveAuthor}
			// 	errors={this.state.errors} />

			<AuthorForm
				//Props: current state and change handler
				author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor}
			/>
		);
	}
});

module.exports = ManageAuthorPage;
