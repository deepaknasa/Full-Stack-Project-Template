/// <binding BeforeBuild='clean, default' Clean='clean' />
"use strict";

var gulp    =       require("gulp"),
    rimraf  =       require("rimraf"),
    concat  =       require("gulp-concat"),
    cssmin  =       require("gulp-cssmin"),
    uglify  =       require("gulp-uglify"),
    browser =       require('browser-sync').create(),
    dotnet  =       require('gulp-dotnet'),
    server;


var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

//Remove existing concatenated js files from destination folder
gulp.task('clean:js', (callback) => {
    rimraf(paths.concatJsDest, callback);
});

//Clean up existing concatenated css files from destination folder
gulp.task('clean:css', (callback) => {
    rimraf(paths.concatCssDest, callback);
});

//Combine both js and css tasks
gulp.task('clean', ['clean:js', 'clean:css']);


//Minify js files
gulp.task('min:js', () => {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

//Minify css files
gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('serve', () => {
    browser.init({
        startPath: '.',
        server: {
            baseDir: '/wwwroot'
        }
    });
});

gulp.task('build:csharp', function (cb) {
    dotnet.build({ cwd: './' }, cb);
});

gulp.task('start:api', function (cb) {
    if (!server) server = new dotnet({ cwd: './' });
    server.start('run', cb);
});

gulp.task('dotnet:start', ['build:csharp', 'start:api']);

gulp.task('default', ['clean', 'min', 'dotnet:start']);