import gulp     from 'gulp'
import sketch   from 'gulp-sketch'
import iconutil from 'gulp-iconutil'

gulp.task('icons', () => {
  gulp.src('images/icon.sketch')
    .pipe(sketch({
      export: 'artboards',
      formats: 'png',
      scales: '1.0,2.0'
    }))
    .pipe(iconutil('icon.icns'))
    .pipe(gulp.dest('./images'))
})
