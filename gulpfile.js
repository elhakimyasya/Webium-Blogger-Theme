const del = require('del');
const fs = require("fs");
const gulp = require('gulp');
const gulpAutoPrefixer = require('gulp-autoprefixer');
const gulpBabelMinify = require('gulp-babel-minify');
const gulpCleanCSS = require('gulp-clean-css');
const gulpFileInclude = require('gulp-file-include');
const gulpRename = require('gulp-rename');
const gulpReplace = require('gulp-replace');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpStripComments = require('gulp-strip-comments');
const gulpTokenReplace = require('gulp-token-replace');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const packages = './package.json';

// Clean everything inside ./build directory
gulp.task('clean', () => {
    const sources = [
        './build/**'
    ];

    return del(sources, {
        force: true,
    })
});

// Generate styles
gulp.task('styles', () => {
    const sources = [
        './src/assets/styles/*.{css,scss}'
    ];

    return gulp.src(sources)
        .pipe(gulpSass())
        .pipe(gulp.dest('./build/styles'))
});
// Generate prefixed styles
gulp.task('styles:autoprefixed', () => {
    const sources = [
        './build/styles/*.{css}'
    ];

    return gulp.src(sources)
        .pipe(gulpAutoPrefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./build/styles'))
});
// Generate minified styles
gulp.task('styles:minified', () => {
    const sources = [
        './build/styles/*.{css,scss}'
    ];

    return gulp.src(sources)
        .pipe(gulpCleanCSS({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(gulp.dest('./build/styles'))
});

// Generate scripts
gulp.task('scripts', () => {
    const sources = [
        './src/assets/scripts/*.js'
    ];

    return gulp.src(sources)
        .pipe(webpackStream({
            mode: 'production',
            output: {
                filename: 'scripts.js'
            },
            watch: false
        }, webpack))
        .pipe(gulp.dest('./build/scripts'))
});
// Generate minified scripts
gulp.task('scripts:minified', () => {
    const sources = [
        './build/scripts/*.js'
    ];

    return gulp.src(sources)
        .pipe(gulpBabelMinify({
            mangle: {
                keepClassName: false
            },
            evaluate: false,
            builtIns: false,
            removeDebugger: true,
            removeConsole: false
        }))
        .pipe(gulp.dest('./build/scripts'))
});

// Generate Timestamp
gulp.task('timestamp', (done) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date();
    const timestamps = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;

    !((filePath, results) => {
        fs.readFile(filePath, (error, fileData) => {
            if (error) {
                return results && results(error)
            } else {
                try {
                    const object = JSON.parse(fileData);

                    return results && results(null, object);
                } catch (errors) {
                    return results && results(errors)
                }
            }
        })
    })(packages, (error, object) => {
        if (error) {
            return console.log("Error Reading File: ", error)
        } else {
            object.releasedDate = timestamps;
            fs.writeFile(packages, JSON.stringify(object, null, '\t'), {
                flag: 'w'
            }, (errors) => {
                if (errors) {
                    console.log("Error Writting File: ", errors)
                }
            })
        }
    })

    return done()
});

// Remove all comments
gulp.task('comments', () => {
    const sources = [
        './dist/*.{xml,html}'
    ];

    return gulp.src(sources)
        .pipe(gulpStripComments({
            trim: true
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('start', () => {
    const tokenData = require(packages);
    const sources = [
        './src/index.html'
    ];

    return gulp.src(sources)
        .pipe(gulpTokenReplace({
            global: tokenData
        }))
        .pipe(gulpFileInclude({
            indent: true,
            basepath: '@@file',
            prefix: '@@'
        }))
        .pipe(gulpReplace('-tw', '-elcreative'))
        .pipe(gulpRename({
            basename: 'theme',
            extname: '.xml'
        }))
        .pipe(gulp.dest('./dist'))
})

// Final task: Production Mode
gulp.task('build:production', gulp.series(
    'clean',
    'styles',
    'styles:autoprefixed',
    'styles:minified',
    'scripts',
    'scripts:minified',
    'timestamp',
    'start',
    'comments'
));
// Final task: Development Mode
gulp.task('build:development', gulp.series(
    'clean',
    'styles',
    'scripts',
    'start'
));