var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');


gulp.task('minify-html', function () {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('minify-css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('concat-js', function () {
    return gulp.src(['./src/lib/jquery.min.js', './src/lib/bootstrap.min.js', './src/lib/moment.min.js', './src/lib/locale-es.js', './src/js/script.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify-js', function () {
    return gulp.src('./dist/js/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('minify-img', function () {
    return gulp.src(['./src/img/*.jpg', './src/img/*.png', './src/img/*.svg'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['minify-html', 'minify-css', 'concat-js', 'minify-js', 'minify-img'], function () {
    gulp.watch('./src/html/index.html', ['minify-html']);
    gulp.watch('./src/css/styles.css', ['minify-css']);
    gulp.watch('./src/js/script.js', ['concat-js']);
    gulp.watch('./src/js/script.js', ['minify-js']);
    gulp.watch(['./src/img/*.jpg', './src/img/*.svg'], ['minify-img']);
})