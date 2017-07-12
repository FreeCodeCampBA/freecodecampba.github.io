const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')

gulp.task('minify-html', () =>
  gulp
    .src('./src/html/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest('./'))
)

gulp.task('minify-css', () =>
  gulp
    .src('./src/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./dist/css'))
)

gulp.task('concat-js', () =>
  gulp
    .src([
      './src/lib/jquery.min.js',
      './src/lib/bootstrap.min.js',
      './src/lib/moment.min.js',
      './src/lib/locale-es.js',
      './src/js/script.js',
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
}

gulp.task('minify-js', () => 
  gulp
    .src('./dist/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./dist/js'))
)

gulp.task('minify-img', () =>
 gulp
    .src(['./src/img/*.jpg', './src/img/*.png', './src/img/*.svg'])
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
)

gulp.task(
  'default',
  ['minify-html', 'minify-css', 'concat-js', 'minify-js', 'minify-img'],
  () => {
    gulp.watch('./src/html/index.html', ['minify-html'])
    gulp.watch('./src/css/styles.css', ['minify-css'])
    gulp.watch('./src/js/script.js', ['concat-js'])
    gulp.watch('./src/js/script.js', ['minify-js'])
    gulp.watch(['./src/img/*.jpg', './src/img/*.svg'], ['minify-img'])
  }
)   
