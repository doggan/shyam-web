'use strict';

var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/,
    rename: {
      'gulp-ruby-sass': 'sass'
    }
  }),
  rimraf = require('rimraf');

var config = {
  app: './app',
  dist: './dist',
  bower: './bower_components',
};

gulp.task('clean', function(cb) {
  rimraf(config.dist, cb);
});

var copyResources = function() {
  return gulp.src(config.app + '/index.html')
    .pipe(plugins.useref())
    .pipe(plugins.if('*.js', plugins.uglify()))
    .pipe(gulp.dest(config.dist))
    .pipe(plugins.connect.reload());
};
gulp.task('copy:resources', ['clean'], copyResources);
gulp.task('copy:resources-watch', copyResources);

var copyImages = function() {
  gulp.src(config.app + '/images/**/*.{png,jpg,jpeg,gif}', { base: config.app })
   .pipe(gulp.dest(config.dist));
  gulp.src(config.app + '/favicon.png')
   .pipe(gulp.dest(config.dist));
};
gulp.task('copy:images', ['clean'], copyImages);

var sass = function() {
  return plugins.sass([config.app + '/styles/main.scss'], {
      style: 'compressed',
      loadPath: [
        config.bower + '/bootstrap-sass-official/assets/stylesheets',
      ]
      })
    .on('error', plugins.notify.onError(function(error) {
        return 'Error: ' + error.message;
      }))
    .pipe(gulp.dest(config.dist + '/styles'))
    .pipe(plugins.connect.reload());
};
gulp.task('sass', ['clean'], sass);
gulp.task('sass-watch', sass);

gulp.task('watch', function() {
  gulp.watch([config.app + '/*.html'], ['copy:resources-watch']);
  gulp.watch([config.app + '/styles/*.scss'], ['sass-watch']);
});

gulp.task('connect', function() {
  plugins.connect.server({
    root: [ config.dist ],
    livereload: true,
  });
});

gulp.task('build', ['copy:images', 'copy:resources', 'sass'], function() {
  return gulp.src(config.dist + '/**/*')
    .pipe(plugins.size({
      gzip: false,
      showFiles: true
    }));
});

gulp.task('dev', ['build', 'connect', 'watch']);

gulp.task('default', ['build']);
