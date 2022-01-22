const gulp = require("gulp");
const gulpRename = require("gulp-rename");
const gulpFileInclude = require("gulp-file-include");

gulp.task("build", function () {
    return gulp.src("./src/base.html")
        .pipe(gulpFileInclude({
            basepath: "@file",
            indent: true,
            prefix: "@@"
        }))
        .pipe(gulpRename({
            basename: "webium-theme",
            extname: ".xml"
        }))
        .pipe(gulp.dest("./dist"))
})