'use strict';

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../flux/actions/authorActions');
var AuthorStore = require('../../flux/stores/authorStore');
//var AuthorApi = require('../../api/authorApi');

//Used for notifications
var toastr = require('toastr');

//A smart component
//A controller view
//Controls the Author form component
var ManageAuthorPage = React.createClass({
	//Use to navigate the transitions
	mixins: [Router.Navigation],

	//To provide some transitioning checks so we don't loose form data
	statics: {
		willTransitionFrom: function(transition, component) {
			//check if we have data entered and not saved
			//And ask the user if they want to leave without saving
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	//Declare some initial states
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
	},

	//Lifecycle method
	//for URL hydration
	//Setting states here will cause component to re-render
	componentWillMount: function() {
		var authorId = this.props.params.id; //from the path '/author:id'

		//If you don't get the "id" don't update the state
		if (authorId) {
			this.setState({ author: AuthorStore.getAuthorById(authorId) });
		}
	},

	//Set and update states: called after every key press in the form
	//get event reference to the feild and value after a key press
	//update the state
	setAuthorState: function(event) {
		//set dirty to true because the form has now being changed/ added to
		this.setState({ dirty: true });

		//Get your regular values
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;

		//Return the new state
		return this.setState({ author: this.state.author });
	},

	//Validation method
	authorFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.
		//Check first name
		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}
		//check last name
		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = 'Last name must be at least 3 characters.';
			formIsValid = false;
		}
		//set the new state's errors
		this.setState({ errors: this.state.errors });
		return formIsValid;
	},

	//Save the author form the form
	saveAuthor: function(event) {
		//prevent the submit button from early submition
		event.preventDefault();

		//Validation hceck
		if (!this.authorFormIsValid()) {
			return;
		}

		//A fork to check and update/create/save the new author
		if (this.state.author.id) {
			//check if id already exists
			AuthorActions.updateAuthor(this.state.author);
		} else {
			//Call store and save the new author
			//AuthorApi.saveAuthor(this.state.author);
			AuthorActions.createAuthor(this.state.author);
		}

		//We have saved the inputs so we can reset the dirty flag
		this.setState({ dirty: false });

		//Genrate some nice firendly message via toastr
		toastr.success('Author saved.');

		// Transition to 'authors' page after a save occurs successfully
		this.transitionTo('authors');
	},

	render: function() {
		return (
			<AuthorForm
				//Props: current state and change handler
				author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor}
				errors={this.state.errors}
			/>
		);
	}
});

module.exports = ManageAuthorPage;
