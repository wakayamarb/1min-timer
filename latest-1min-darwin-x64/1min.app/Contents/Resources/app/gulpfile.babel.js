/**
 * icns type icon file generation
 */

import gulp     from 'gulp'
import sketch   from 'gulp-sketch'
import iconutil from 'gulp-iconutil'
const IMAGE = './images/'

gulp.task('icons', () => {
  gulp.src(`${IMAGE}/icon.sketch`)
    .pipe(sketch({
      export: 'artboards',
      formats: 'png',
      scales: '1.0,2.0'
    }))
    .pipe(iconutil('icon.icns'))
    .pipe(gulp.dest(IMAGE))
})
