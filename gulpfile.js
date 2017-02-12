/* globals require, exports */

'use strict';

// gulp plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    es = require('event-stream'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    path = require('path'),
    // browserify = require('gulp-browserify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    rename = require('gulp-rename');


// Connect Task
gulp.task('connect', connect.server({
    root: ['./app'],
    port: 1337,
    livereload: true
}));

// Html reload
gulp.task('html', function() {
    return gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

//Less
gulp.task('buildLess', function() {
    return gulp.src('./app/styles/**/*.less')
        .pipe(less({
            paths: [path.join('../', 'less', 'includes')]
        }))
        .pipe(gulp.dest('./app/styles/'))
        .pipe(connect.reload());

});



// Minify images
gulp.task('imagemin', function() {
    return es.concat(
        gulp.src('./app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
    );
});

// Script task
gulp.task('scripts', function() {
    return gulp.src('app/scripts/app.js')
        .pipe(rename(function(path) {
            path.basename = 'bundle';
        }))
        .pipe(gulp.dest('app/scripts'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['app/styles' + '/**/*.less'], ['buildLess']);
    // gulp.watch(['app/styles' + '/**/*.css'], ['buildCssPlugin']);
    gulp.watch(['app/scripts' + '/**/*.js'], ['scripts']);
    gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'buildLess', 'scripts', 'watch']);

gulp.task('clean', function() {
    gutil.log('Clean task goes here...');
});

gulp.task('usemin', function() {
    gulp.src('./app/**/*.html')
        .pipe(usemin())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean-build', function() {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});

gulp.task('build', ['clean-build', 'buildLess', 'scripts', 'imagemin', 'usemin'], function() {});

gulp.task('default', function() {
    gutil.log('Default task goes here...');
});