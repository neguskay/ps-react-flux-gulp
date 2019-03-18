'use strict';

var React = require('react');

//New author list class
//Author List Comnponent
var AuthorList = React.createClass({
	//Declare some prop types
	//Require an array of authors propType
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	//Render function
	render: function() {
		//function for creating each row within the table
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td>
						<a href={'/#authors/' + author.id}>{author.id}</a>
					</td>
					<td>
						{author.firstName} {author.lastName}
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
