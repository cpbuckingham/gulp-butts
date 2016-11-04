var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')

gulp.task('connect', function () {
  connect.server({
    root: 'localhost',
    port: 9999
  })
})

gulp.task('default', ['connect']);
