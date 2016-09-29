var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');


var path = {
    dest: '/.dist'
};


gulp.task('views', function buildHTML() {
 return gulp.src('./*.pug')
     .pipe(pug({locals: {name: "Przemek"} }
         ))
     .pipe(gulp.dest("./html"));
});


gulp.task('styles', function () {

 gulp.src("./main.scss").pipe(sass()).pipe(gulp.dest(path.dest));

});

gulp.task('default',["styles", "views"], function () {

 gulp.watch('./*.scss', ['styles'])
 gulp.watch('./*.pug', ['views'])
})

gulp.task('hello', function () {
 console.log("Hello World!")

});


