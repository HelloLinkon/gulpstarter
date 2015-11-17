// /////////////////////////////////////////
// Required
// /////////////////////////////////////////

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload(),
	compass = require('gulp-compass'),
	rename = require('gulp-rename');

// /////////////////////////////////////////
// Scripts Task
// /////////////////////////////////////////
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

// /////////////////////////////////////////
// style Task
// /////////////////////////////////////////
gulp.task('compass',function(){
	gulp.src('app/scss/style.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'app/css',
			sass: 'app/scss',
			require: ['susy']
		}))
		.pipe(gulp.dest('app/css'));
		
});

// /////////////////////////////////////////
// html Task
// /////////////////////////////////////////
gulp.task('html', function(){
	gulp.src('app/**/*.html');
});


// /////////////////////////////////////////
// browserSync Task
// /////////////////////////////////////////
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./app/"
		}
	});

});




// /////////////////////////////////////////
// Watch Task
// /////////////////////////////////////////
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/scss/**/*.scss', ['compass']);
	gulp.watch('app/**/*.html', ['html']);
});


// /////////////////////////////////////////
// Default Task
// /////////////////////////////////////////
gulp.task('default', ['scripts', 'html', 'compass','browser-sync','watch' ]);