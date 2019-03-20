'use strict';

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
	//Proptypes declaration
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	//Render function for the Author form
	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>

				<Input
					//Set an input feild
					//set the value as the prop value,
					//On feild change, use the method from the props
					name="firstName"
					label="First Name"
					value={this.props.author.firstName}
					onChange={this.props.onChange}
					error={this.props.errors.firstName}
				/>

				<Input
					name="lastName"
					label="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange}
					error={this.props.errors.lastName}
				/>

				<input
					//Save the author
					type="submit"
					value="Save"
					className="btn btn-default"
					onClick={this.props.onSave}
				/>
			</form>
		);
	}
});

module.exports = AuthorForm;

//New text inputs
// {
// 	/* <Input name="firstName" label="First Name" />
// 				{/* // value={this.props.author.firstName}
// 					// onChange={this.props.onChange}
//           // error={this.props.errors.firstName}

// 				<Input name="lastName" label="Last Name" />
// 				{/* // value={this.props.author.lastName}
// 					// onChange={this.props.onChange}
// 					// error={this.props.errors.lastName}

// 				<input type="submit" value="Save" className="btn btn-default" />
//         //onClick={this.props.onSave }
// */
// }

//Old Text inputs
/**
 * <label htmlFor="firstName">First Name</label>

				<input
					//Set an input feild
					//set the value as the prop value,
					//On feild change, use the method from the props

					name="firstName"
					type="text"
					className="form-control"
					placeholder="First Name"
					ref="firstName"
					onChange={this.props.onChange}
					value={this.props.author.firstName}
				/>

				<br />

				<label htmlFor="lastName">Last Name</label>

				<input
					name="lastName"
					type="text"
					className="form-control"
					placeholder="Last Name"
					ref="lastName"
					onChange={this.props.onChange}
					value={this.props.author.lastName}
				/>

				<br />
 */
