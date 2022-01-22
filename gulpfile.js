const gulp = require("gulp");
const gulpRename = require("gulp-rename");
const gulpFileInclude = require("gulp-file-include");
const gulpSass = require('gulp-sass')(require('sass'));
const gulpAutoPrefixer = require('gulp-autoprefixer');
const gulpCSSMinify = require('gulp-minify-css');

gulp.task("styles", function () {
    return gulp.src("./src/assets/styles/*.scss")
        .pipe(gulpSass())
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("styles:autoprefix", function () {
    return gulp.src("./build/styles/*.css")
        .pipe(gulpAutoPrefixer({
            cascade: false
        }))
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("styles:minify", function () {
    return gulp.src("./build/styles/*.css")
        .pipe(gulpCSSMinify({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("start", function () {
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
});

gulp.task("build", gulp.series("styles", "styles:autoprefix", "start"))