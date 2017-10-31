const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plugins = require('gulp-load-plugins')();

const pugFiles = ['./src/templates/*.pug'];
const jsFiles = ['./src/javascript/*.js'];
const styleFiles = ['./src/styles/*.scss'];

gulp.task('pug', () => {
  return gulp.src(pugFiles)
    .pipe(plugins.pug())
    .pipe(gulp.dest('./'))
});

gulp.task('scripts', () => {
  return gulp.src(jsFiles)
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./dist/javascript'));
})

gulp.task('styles', () => {
  return gulp.src(styleFiles)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(plugins.cleanCss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['pug', 'styles', 'scripts'], () => {
  browserSync.init({
    server: './'
  });

  gulp.watch(pugFiles, ['pug']);
  gulp.watch(styleFiles, ['styles']);
  gulp.watch(jsFiles, ['scripts']);
  gulp.watch(pugFiles).on('change', browserSync.reload);
})
