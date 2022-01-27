const fs = require("fs");
const del = require("del");
const gulp = require("gulp");
const gulpRename = require("gulp-rename");
const gulpFileInclude = require("gulp-file-include");
const gulpTokenReplace = require("gulp-token-replace");
const gulpSass = require('gulp-sass')(require('sass'));
const gulpAutoPrefixer = require('gulp-autoprefixer');
const gulpCSSMinify = require('gulp-minify-css');
const gulpBabel = require("gulp-babel");
const gulpBabelMinify = require("gulp-babel-minify");

gulp.task("styles", function () {
    return gulp.src([
        "./src/assets/styles/*.scss",
        "./src/assets/styles/libraries/*.css",
        "./src/assets/styles/libraries/*.scss"
    ])
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

gulp.task("scripts", function () {
    return gulp.src(["./src/assets/scripts/libraries/*.js", "./src/assets/scripts/*.js"])
        .pipe(gulpBabel())
        .pipe(gulp.dest("./build/scripts"))
});

gulp.task("scripts:minify", function () {
    return gulp.src("./build/scripts/*.js")
        .pipe(gulpBabelMinify({
            mangle: {
                keepClassName: true
            },
            evaluate: false,
            builtIns: false
        }))
        .pipe(gulp.dest("./build/scripts"))
});

gulp.task("start", function () {
    delete require.cache[require.resolve("./config.json")];
    var config = require("./config.json");

    return gulp.src("./src/base.html")
        .pipe(gulpTokenReplace({
            global: config
        }))
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

gulp.task("build", gulp.series("styles", "styles:autoprefix", "styles:minify", "scripts", "scripts:minify", "start"))