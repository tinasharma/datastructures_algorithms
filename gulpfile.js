var gulp = require('gulp');
var mocha = require('gulp-mocha');
var testFiles = ['./test/**/*.js'];

gulp.task('mocha:test', function(){
  return gulp.src(testFiles)
    .pipe(mocha({
      node: true,
      globals: {
        describe: true,
        it: true
      }
    }))
    .pipe(mocha({reporter:'spec'}));
});

gulp.task('mocha', ['mocha:test']);
