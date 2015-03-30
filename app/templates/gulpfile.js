var gulp = require('gulp');
var bower = require('gulp-bower');
var del = require('del');

gulp.task('clean', function(cb) {
  del([
    'bower_components'
  ], cb);
});

gulp.task('bower:install', ['clean'], function() {
  return bower();
});

gulp.task('bower', ['bower:install'], function() {
  // install require.js, jquery, and underscore
  gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/jquery/dist/jquery.min.map',
    './bower_components/requirejs/require.js',
    './bower_components/underscore-amd/underscore-min.js',
    './bower_components/underscore-amd/underscore-min.map'
  ]).pipe(gulp.dest('./public/js/lib'));
});

gulp.task('default', ['bower']);
