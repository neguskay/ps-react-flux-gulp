'use strict';

//A library that simply copies the key of an object
// and saves it as the value of that object
var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
	//simply mirroring the key to the value so we don't have to type
	// saves us typing 'CREATE_AUTHOR: "CREATE_AUTHOR"'
	INITIALIZE: null,
	CREATE_AUTHOR: null,
	UPDATE_AUTHOR: null,
	DELETE_AUTHOR: null
});

//If key mirror is not used, export the following
// module.exports = {
// 	//simply mirroring the key to the value so we don't have to type
// 	// saves us typing 'CREATE_AUTHOR: "CREATE_AUTHOR"'
// 	INITIALIZE: "INITIALIZE",
// 	CREATE_AUTHOR: "CREATE_AUTHOR",
// 	UPDATE_AUTHOR: "UPDATE_AUTHOR",
// 	DELETE_AUTHOR: "DELETE_AUTHOR"
// };
