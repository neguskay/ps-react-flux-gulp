'use strict';

var React = require('react');
var Router = require('react-router');

//Used for notifications
var toastr = require('toastr');

var AuthorActions = require('../../flux/actions/authorActions');

var Link = Router.Link;

//New author list class
//Author List Comnponent
var AuthorList = React.createClass({
	//Declare some prop types
	//Require an array of authors propType
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	deleteAuthor: function(id, event) {
		// prevent the defaults
		event.preventDefault();

		// Call the action to dispatch the delete function
		AuthorActions.deleteAuthor(id);

		//give a 'toastr' alert for successful deletion
		toastr.success('Author Successfully Deleted');
	},

	//Render function
	render: function() {
		//function for creating each row within the table
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td>
						{/*<a href={'/#authors/' + author.id}>{author.id}</a>*/}
						<Link to="manageAuthor" params={{ id: author.id }}>
							{author.id}
						</Link>
					</td>
					<td>
						{author.firstName} {author.lastName}
					</td>
					<td>
						<a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>
							Delete
						</a>
					</td>
				</tr>
			);
		};

		//Overall render return function
		return (
			<div>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>{this.props.authors.map(createAuthorRow, this)}</tbody>
				</table>
			</div>
		);
	}
});

//Export for the module
module.exports = AuthorList;
