var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

var PATH = {
    NODE_MODULES : 'node_modules',
    VENDOR : 'src/main/resources/static/vendor',
    JS : 'src/main/resources/static/js',
    LIB : 'src/main/resources/static/js/lib',
    MODULES : 'src/main/resources/static/js/modules',
    DIST : 'src/main/resources/static/js/dist'
}

gulp.task('copy', function() {
   return gulp.src([
       path.join(PATH.NODE_MODULES, 'jquery/dist/jquery.min.js'),
       path.join(PATH.NODE_MODULES, 'underscore/underscore-min.js'),
       path.join(PATH.NODE_MODULES, 'moment/min/moment.min.js')
   ]).pipe(gulp.dest(PATH.VENDOR));
});

gulp.task('uglify', ['copy'], function() {
    return gulp.src([path.join(PATH.VENDOR,'*.js'), path.join(PATH.LIB,'*.js')])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task('webpack', function() {
    return webpack(webpackConfig)
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task('watch', ['webpack'], function () {
    gulp.watch([
        path.join(PATH.JS,'app.js'),
        path.join(PATH.MODULES, '**/*.js')
    ], ['webpack']);
});

gulp.task('default', ['copy', 'uglify', 'webpack', 'watch']);