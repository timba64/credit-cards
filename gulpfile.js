const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');
const newer = require('gulp-newer');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();
const rev = require('gulp-rev');
const tropka = process.cwd();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
// NODE_ENV=production gulp build

gulp.task('styles', () =>
  gulp.src([
    'frontend/css/normalize.css',
    'frontend/css/main.css',
    'frontend/css/header.css',
    'frontend/css/m-menu.css',
    'frontend/css/main-page.css',
    'frontend/css/m-but.css',
    'frontend/css/halva-plus.css',
    'frontend/css/halva-plus-add.css',
    'frontend/css/foot.css',
   ])
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(concat('style.css'))
    .pipe(debug({ title: 'styles' }))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest(tropka))
);

gulp.task('assets', () =>
  gulp.src('frontend/assets/*.*', { since: gulp.lastRun('assets') })
    .pipe(newer(tropka))
    .pipe(debug({ title: 'assets' }))
    .pipe(gulp.dest(tropka))
);

gulp.task('js', () =>
  gulp.src('frontend/js/*.*', { since: gulp.lastRun('js') })
    .pipe(newer('js'))
    .pipe(debug({ title: 'js' }))
    .pipe(gulp.dest('js'))
);

gulp.task('build', gulp.series('styles', 'assets', 'js'));

gulp.task('watch', () =>
  gulp.watch('frontend/css/**/*.*', gulp.series('styles')),
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets')),
  gulp.watch('frontend/js/*.*', gulp.series('js'))
);

gulp.task('serve', function() {
  browserSync.init({
    //proxy: "bmaster.loc",
    server: tropka
  });
  browserSync.watch(['*.html', 'style.css', 'js/*.js']).on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
