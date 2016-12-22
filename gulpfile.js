var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackDev = require('./webpack.config.js'),
    shell = require('gulp-shell');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('webpack', function(callback) {
  return webpack(webpackDev, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('start-pulsar', shell.task([
  'pulsar-1.14/bin/pulsar standalone'
]));

gulp.task('http-server', shell.task([
  'http-server -p 3000'
]));

gulp.task('development', ['webpack', 'http-server', 'start-pulsar']);
