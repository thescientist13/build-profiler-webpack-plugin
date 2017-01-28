import gulp from 'gulp';
import validateJsPipeline from 'pipeline-validate-js';

gulp.task('lint', () => {
  gulp.src('./**/**/.js')
    .pipe(validateJsPipeline.validateJS());
});

gulp.task('build', ['lint']);