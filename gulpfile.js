const del = require("del");
const gulp = require("gulp");
const gulpTokenReplace = require("gulp-token-replace");
const gulpFileInclude = require("gulp-file-include");
const gulpRename = require("gulp-rename");

// Clean Dist and Build Folder
gulp.task("clean", function () {
    return del(["dist/**", "build/**"], {
        force: true
    });
});

// Generate XML File
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
    "start"
));

gulp.task("build:production", gulp.series(
    "clean",
    "start"
));