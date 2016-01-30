'use strict';

var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  notify = require('gulp-notify'),
  bower = require('gulp-bower'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect'),
  rimraf = require('rimraf'),
  runSequence = require('run-sequence');

var config = {
  distDir: './dist',
  sassPath: './app/styles',
  bowerDir: './bower_components',

  htmlSources: ['./app/*.html'],
  sassSources: ['./app/styles/main.scss'],
  jsSources: ['./app/scripts/*.js'],
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(config.bowerDir));
});

gulp.task('clean', function(cb) {
  rimraf(config.distDir, cb);
});

gulp.task('copy', function() {
  gulp.src('./app/**/*.{png,jpg}', { base: './app' })
   .pipe(gulp.dest(config.distDir));
});

gulp.task('html', function() {
  gulp.src(config.htmlSources, { base: './app' })
    .pipe(gulp.dest(config.distDir))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return sass(config.sassSources, {
    style: 'compressed',
    loadPath: [
      config.sassPath,
      config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
    ]
    }).on('error', notify.onError(function(error) {
      return 'Error: ' + error.message;
    }))
    .pipe(gulp.dest(config.distDir + '/styles'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(config.jsSources, { base: './app' })
    .pipe(uglify())
    .pipe(gulp.dest(config.distDir))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(config.htmlSources, ['html']);
  gulp.watch(config.sassSources, ['sass']);
  gulp.watch(config.jsSources, ['js']);
});

gulp.task('connect', function() {
  connect.server({
    root: [ config.distDir ],
    livereload: true,
  });
});

gulp.task('build', function(cb) {
  runSequence(
    'clean',
    ['bower', 'copy', 'html', 'sass', 'js'],
    cb);
});

gulp.task('dev', ['build', 'connect', 'watch']);

gulp.task('default', ['build']);
