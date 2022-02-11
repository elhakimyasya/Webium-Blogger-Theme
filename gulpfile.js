const del = require("del");
const gulp = require("gulp");
const gulpSass = require('gulp-sass')(require('sass'));
const gulpRename = require("gulp-rename");
const gulpMinifyCSS = require("gulp-minify-css");
const gulpFileInclude = require("gulp-file-include");
const gulpAutoprefixer = require("gulp-autoprefixer")
const gulpTokenReplace = require("gulp-token-replace");

const paths = {
    styles: {
        src: [
            "../src/assets/styles/*.css",
            "./src/assets/styles/*.scss",
            "./src/assets/styles/libraries/*.css",
            "./src/assets/styles/libraries*.scss",
        ],
        build: [
            "./build/styles/*.css"
        ]
    },
    scripts: {
        src: [
            "./src/assets/scripts/*.js",
            "./src/assets/scripts/partial/*.js",
            "./src/assets/scripts/libraries/*.js",
        ],
        build: [
            "./build/scripts/*.js"
        ]
    },
    json: {
        src: [
            "./src/assets/schema/*.json"
        ]
    }
};

gulp.task("clean", function () {
    return del(["dist/**", "build/**"], {
        force: true
    });
});

gulp.task("styles", function () {
    return gulp.src(paths.styles.src)
        .pipe(gulpSass())
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("styles:autoprefixed", function () {
    return gulp.src(paths.styles.build)
        .pipe(gulpAutoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("styles:minify", function () {
    return gulp.src("./build/styles/*.css")
        .pipe(gulpMinifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("start", function () {
    delete require.cache[require.resolve("./config.json")];
    var config = require("./config.json");

    return gulp.src("./src/*.xml")
        .pipe(gulpTokenReplace({
            global: config
        }))
        .pipe(gulpFileInclude({
            indent: true,
            basepath: "@file",
            prefix: "@@"
        }))
        .pipe(gulpRename({
            basename: "theme",
            extname: ".xml"
        }))
        .pipe(gulp.dest("./dist"))
});

gulp.task("build:development", gulp.series(
    "clean",
    "styles",
    "start"
));

gulp.task("build:production", gulp.series(
    "clean",
    "styles",
    "styles:autoprefixed",
    "styles:minify",
    "start"
));