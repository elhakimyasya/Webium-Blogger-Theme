const gulpAutoprefixer = require("gulp-autoprefixer");
const gulpTokenReplace = require("gulp-token-replace");
const gulpBabelMinify = require("gulp-babel-minify");
const gulpFileInclude = require("gulp-file-include");
const gulpCleanCSS = require("gulp-clean-css");
const gulpReplace = require("gulp-replace");
const gulpRename = require("gulp-rename");
const gulpBabel = require("gulp-babel");
const gulp = require("gulp");
const del = require("del");
const fs = require("fs");

gulp.task("clean", function () {
    return del(["build/**"], {
        force: true
    });
});

gulp.task("styles", function () {
    return gulp.src("./src/assets/styles/*.css")
        // .pipe(gulpSass())
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("styles:autoprefixed", function () {
    return gulp.src("./build/styles/*.css")
        .pipe(gulpAutoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("styles:minify", function () {
    return gulp.src("./build/styles/*.css")
        .pipe(gulpCleanCSS({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(gulp.dest("./build/styles"))
});

gulp.task("scripts", function () {
    return gulp.src(["./src/assets/scripts/*.js", "./src/assets/scripts/libraries/*.js"])
        .pipe(gulpBabel())
        .pipe(gulp.dest("./build/scripts"))
});

gulp.task("scripts:minify", function () {
    return gulp.src("./build/scripts/*.js")
        .pipe(gulpBabelMinify({
            mangle: {
                keepClassName: false
            },
            evaluate: false,
            builtIns: false,
            removeDebugger: true,
            removeConsole: true
        }))
        .pipe(gulp.dest("./build/scripts"))
});

gulp.task("timestamp", function (done) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var releasedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;

    function jsonReader(filePath, cb) {
        fs.readFile(filePath, (error, fileData) => {
            if (error) {
                return cb && cb(error);
            };

            try {
                const object = JSON.parse(fileData);
                return cb && cb(null, object);
            } catch (error) {
                return cb && cb(error);
            }
        });
    };

    jsonReader("./package.json", function (error, object) {
        if (error) {
            console.log("Error reading file:", error);
            return;
        };

        object.releasedDate = releasedDate;
        fs.writeFile("./package.json", JSON.stringify(object, null, '\t'), {
            flag: "w",
        }, function (error) {
            if (error) {
                console.log("Error writing file:", error)
            }
        });
    });

    done();
});

gulp.task("start", function () {
    delete require.cache[require.resolve("./package.json")];
    var package = require("./package.json");

    return gulp.src("./src/main.xml")
        .pipe(gulpTokenReplace({
            global: package
        }))
        .pipe(gulpFileInclude({
            indent: true,
            basepath: "@file",
            prefix: "@@"
        }))
        .pipe(gulpReplace("-tw", "-elcreative"))
        .pipe(gulpReplace(/<b:comment>.*?<\/b:comment>(\n|\r|\n\r)/gm, "\r"))
        .pipe(gulpRename({
            basename: "theme",
            extname: ".xml"
        }))
        .pipe(gulp.dest("./dist"))
});

gulp.task("build:production", gulp.series(
    "clean",
    "timestamp",
    "styles",
    "styles:autoprefixed",
    "styles:minify",
    "scripts",
    "scripts:minify",
    "start"
))