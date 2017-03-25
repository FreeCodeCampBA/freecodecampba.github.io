const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const pugFiles = ['./src/templates/*.pug'];
const styleFiles = ['./src/styles/*.scss'];

gulp.task('pug', () => {
  return gulp.src(pugFiles)
    .pipe(plugins.pug())
    .pipe(gulp.dest('./'));
});

gulp.task('styles', () => {
  return gulp.src(styleFiles)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(plugins.cleanCss())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', ['pug', 'styles'], () => {
  gulp.watch(pugFiles, ['pug']);
  gulp.watch(styleFiles, ['styles']);
})