var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    port: 8080
  })
})

gulp.task('default', ['connect']);
