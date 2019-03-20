/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 * - A singleton means only one dispatcher instance per application is required
 */

//require the flux dispatcher
var Dispatcher = require('flux').Dispatcher;

//Export the dispatcher as a module
module.exports = new Dispatcher();
