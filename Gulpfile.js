var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nib = require('nib')
var browserify = require('browserify')
var babel = require('babelify')
var source = require('vinyl-source-stream')
var rename = require('gulp-rename')

gulp.task('assets', function () {
  gulp.src('assets/*')
      .pipe(gulp.dest('public'))
})

gulp.task('styles', function () {
  gulp.src('src/index.styl')
    .pipe(stylus({
      use: [nib()]
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
})

function compile () {
  var bundle = browserify('./src/index.js', {debug: true})
  bundle.transform(babel, {presets: ["react", "es2015", "stage-1"]})
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'))
}

gulp.task('build', function () {
  return compile()
})

gulp.task('default', ['assets', 'styles', 'build'])

