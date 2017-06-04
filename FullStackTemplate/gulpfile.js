/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')(),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    del = require('del');

const vendorPath = 'styles/vendor/';

var paths = {
    appScripts: ['scripts/app-link/**/*.ts',
        'scripts/app-link/**/*.js',
        'scripts/app-link/**/*.map'
    ],
    appStyles: ['scripts/app-link/**/*.scss'],
    scripts: [
        'scripts/main.js',
        'scripts/main.ts',
        'scripts/systemjs.config.js',
        'scripts/systemjs-angular-loader.js'
    ],
    styles: ['styles/site.scss'],
    vendor: [vendorPath + '*.css'],
    fa_css: [vendorPath + 'css/font-awesome.min.css'],
    fa_font: [vendorPath + 'fonts/FontAwesome.otf', vendorPath + 'fonts/fontawesome-webfont.eot', vendorPath + 'fonts/fontawesome-webfont.svg', vendorPath + 'fonts/fontawesome-webfont.ttf', vendorPath + 'fonts/fontawesome-webfont.woff', vendorPath + 'fonts/fontawesome-webfont.woff2'],
    templates: ['templates/**/*.html'],
    images: ['styles/images/*.gif', 'styles/images/*.jpg', 'styles/images/*.png'],
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
    return gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'))
        .on('end', function () { gutil.log('lib: end'); });
});

gulp.task('app:main', function () {
    return gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
        .on('end', function () { gutil.log('app:main: end'); });
});

gulp.task('app', ['app:main'], function () {
    return gulp.src(paths.appScripts).pipe(gulp.dest('wwwroot/scripts/app'))
        .on('end', function () { gutil.log('app: end'); });
});

gulp.task('template', function () {
    return gulp.src(paths.templates).pipe(gulp.dest('wwwroot/templates'))
        .on('end', function () { gutil.log('template: end'); });
});

gulp.task('clean', function () {
    return del(['wwwroot/**/*']);
        //.on('end', function () { gutil.log('clean: end'); });
});

gulp.task('template:watch', function () {
    return gulp.watch(paths.templates, ['template']).on('end', function () { gutil.log('template:watch: end'); });
});

gulp.task('sass:watch', function () {
    return gulp.watch(paths.styles.concat(paths.appStyles), ['sass'])
        .on('end', function () { gutil.log('sass:watch: end'); });
});

gulp.task('script:watch', function () {
    return gulp.watch(paths.appScripts, ['app'])
        .on('end', function () { gutil.log('script:watch: end'); });
});

gulp.task('watch', function () {
    return gulp.start('default', 'sass:watch', 'template:watch', 'script:watch')
        .on('end', function () { gutil.log('watch: end'); });
});

gulp.task('fa:font', function () {
    return gulp.src(paths.fa_font)
        .pipe(gulp.dest('wwwroot/styles/vendor/fonts'))
        .on('end', function () { gutil.log('fa:font: end'); });
});

gulp.task('fa:css', function () {
    return gulp.src(paths.fa_css)
        .pipe(gulp.dest('wwwroot/styles/vendor/css'))
        .on('end', function () { gutil.log('fa:css: end'); });
});

gulp.task('vendor:css', ['fa:font', 'fa:css'], function () {
    return gulp.src(paths.vendor)
        .pipe(gulp.dest('wwwroot/styles/vendor'))
        .on('end', function () { gutil.log('vendor:css: end'); });
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest('wwwroot/styles/images'))
        .on('end', function () { gutil.log('images: end'); });
});

gulp.task('sass:appStyles', function () {
    return gulp.src(paths.appStyles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/styles/app'))
        .on('end', function () { gutil.log('sass:appStyles: end'); });
});

gulp.task('sass', ['vendor:css', 'sass:appStyles'], function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/styles/'))
        .on('end', function () { gutil.log('sass: end'); });
        //.pipe(reload({
        //    stream: true
        //}));
});

gulp.task('default', ['clean'], function () {
    return gulp.start(['lib', 'app', 'sass', 'template', 'images'])
        .src(paths.scripts)
        .pipe(gulp.dest('wwwroot/scripts'))
        .on('end', function () { gutil.log('default: end'); });
});