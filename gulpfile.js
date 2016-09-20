var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');


// gulp.task('concat-js', function() {
//     return gulp.src('./src/js/script.js')
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('./dist/js'));
// });

gulp.task('uglify', function() {
    return gulp.src('./src/js/script.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('minify-css', function() {
    return gulp.src('./src/css/styles.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-img', function() {
    return gulp.src(['./src/img/meetup-aerolab.jpg', './src/img/logo.svg'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['uglify', 'minify-css', 'minify-img']);