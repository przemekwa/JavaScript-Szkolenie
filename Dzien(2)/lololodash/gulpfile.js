var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
 return gulp.src('./*.pug')
     .pipe(pug({locals: {name: "Timothy"} }
         ))
     .pipe(gulp.dest("./html"));
});


gulp.task('styles', function () {

 gulp.src("./main.scss").pipe(sass()).pipe(gulp.dest("./dist"));

});

gulp.task('default',["styles", "views"], function () {

 gulp.watch('./*.scss', ['styles'])
})

gulp.task('hello', function () {
 console.log("Hello World!")

});


