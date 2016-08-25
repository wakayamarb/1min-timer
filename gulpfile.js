var gulp     = require('gulp');
var sketch   = require('gulp-sketch');
var iconutil = require('gulp-iconutil');

gulp.task('icons', () => {
  gulp.src('images/icon.sketch')
    .pipe(sketch({
      export: 'artboards',
      formats: 'png',
      scales: '1.0,2.0'
    }))
    .pipe(iconutil('icon.icns'))
    .pipe(gulp.dest('./images'));
});
