import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("transpile", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("dist"));

});
