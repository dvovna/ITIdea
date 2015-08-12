var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('./less/style.less')  // only compile the entry file
        .pipe(plumber())
        .pipe(less({
            paths: ['./', './overrides/']
        }))
        .pipe(prefix("last 8 version", "> 1%"), {cascade:true})
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});
gulp.task('watch', ['less'], function() {
    gulp.watch('./**/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['less']); // Default will run the 'entry' watch task