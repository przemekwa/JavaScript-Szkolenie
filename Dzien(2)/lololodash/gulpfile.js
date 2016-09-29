var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {

 gulp.src("./main.scss").pipe(sass()).pipe(gulp.dest("./dist"));

});

gulp.task('hello', function () {
 console.log("Hello World!")

});


