'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS - A Js Bundler
var reactify = require('reactify'); // Transforms React JSX to JS - The Compiler
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

//Set some configuration variables for the Gulp Task Runne
//set a port, base URL, paths to watch, some styling sheets
//Seta dist file, and the main entry point: mainJs
var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
};

//Start a local development server
//The connect task
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

//Open task will run connect to initialise the Dev server
//Then attempt to move the html file from 'src' to the 'root'
//Then we open a localhost and port
//Then initialise the 'connect' task above
gulp.task('open', ['connect'], function() {
	gulp
		.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

//Get the html file from the 'dist' folder and and pipe it to connect
//Reload the pipe with the html file from the dist folder
gulp.task('html', function() {
	gulp
		.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

//Broserify task
//Tranforms/Compile all js and jsx, and bundle into the 'bundle.js' file
//Set some errors up should-in-case we see any
//Define the name of the bundle as 'bundle.js'
//Store the bundle file in the 'dist' under 'scripts'
//Reload the browser after any time this runs
gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

//Get the css stylesheet path
//Pipe it to concatenate - concat
//Bundle it in the bundle file
//Name the bundle as css in the css folder under bundle folder
gulp.task('css', function() {
	gulp
		.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

//Create a 'lint' task to ensure that we use the right syntax
//Lint by rules set in the eslint config file
//Pipe the lint
gulp.task('lint', function() {
	return gulp
		.src(config.paths.js)
		.pipe(lint({ config: 'es-lint.config.json' }))
		.pipe(lint.format());
});

//Simply watch for changes within files
//Refresh/Restart the front-end server when there is a change within any of the files
gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']); //, 'lint'
});

// Migrates images to dist folder
// Note that I could even optimize my images here
gulp.task('images', function() {
	gulp
		.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());

	//publish favicon
	gulp.src('./src/favicon.ico').pipe(gulp.dest(config.paths.dist));
});

//Run the 'default' task
//Gulp's entry to run any of the configured tasks
//Default task will run the 'html', 'js', 'css', 'lint', 'open', 'watch'
gulp.task('default', ['html', 'js', 'css', 'lint', 'images', 'open', 'watch']);

//Test Task for debugging:
//Execute only html, open and watch tasks.
//gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);
