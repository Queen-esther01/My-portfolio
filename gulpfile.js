const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgSquash(){
    return gulp
    .src("./images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./minified/images"))
}

gulp.task("imgSquash", imgSquash)

gulp.task("watch", () => {
    gulp.watch ('./images/*', imgSquash);
})

gulp.task('default', gulp.series('imgSquash', 'watch'))
