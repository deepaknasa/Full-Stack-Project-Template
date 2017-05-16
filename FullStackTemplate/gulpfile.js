/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')(),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    del = require('del');

var paths = {
    scripts: ['scripts/app-link/**/*.ts', 'scripts/app-link/**/*.js', 'scripts/app-link/**/*.map', 'scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    styles: ['styles/site.scss', 'scripts/**/*.scss'],
    vendor: ['styles/vendor/*.css'],
    templates: ['templates/**/*.html'],
    libs: ['node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/rxjs/Observable.js',
        'node_modules/rxjs/operator/toPromise.js',
        'node_modules/rxjs/observable/PromiseObservable.js',
        'node_modules/rxjs/Subject.js',
        'node_modules/systemjs/dist/system.src.js']
};

gulp.task('lib', function () {
    return gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'));
});

gulp.task('app', function () {
    return gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('template', function () {
    return gulp.src(paths.templates).pipe(gulp.dest('wwwroot/templates'));
});

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*']);
});

gulp.task('sass:watch', function () {
    gulp.watch(paths.styles, ['sass']);
});

gulp.task('app:watch', function () {
    gulp.watch(paths.scripts, ['default']);
});

gulp.task('vendor:css', function () {
    return gulp.src(paths.vendor)
        .pipe(gulp.dest('wwwroot/styles/vendor'));
});

gulp.task('sass', ['vendor:css'], function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/styles/' + paths.styles))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('default', ['lib', 'app', 'sass', 'template'], function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});