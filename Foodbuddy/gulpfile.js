/// <binding Clean='clean' />
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
    del = require('del'),
    typescript = require('gulp-tsc'),
    browserSync = require('browser-sync').create();

const vendorPath = 'styles/vendor/';
const typescriptFiles = 'scripts/app-link/**/*.ts';

var paths = {
    appScripts: [typescriptFiles,
        'scripts/app-link/**/*.js',
        'scripts/app-link/**/*.map'
    ],
    appStyles: ['scripts/app-link/**/*.scss'],
    appScriptDestination: ['wwwroot/scripts/app'],
    scripts: [
        'scripts/main.js',
        'scripts/main.ts',
        'scripts/systemjs.config.js',
        'scripts/systemjs-angular-loader.js'
    ],
    styles: ['styles/site.scss'],
    vendor: [vendorPath + '*.css'],
    vendorJs: [vendorPath + 'scripts/*.js'],
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

gulp.task('ts:compile', function () {
    //return gulp.src([typescriptFiles])
    //    .pipe(typescript())
    //    .pipe(gulp.dest(paths.appScriptDestination[0]));
});

gulp.task('lib', function () {
    return gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'))
        .on('end', function () { browserSync.reload(); });
});

gulp.task('app:main', ['ts:compile'], function () {
    return gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
        .on('end', function () { gutil.log('app:main: end'); });
});

gulp.task('app', ['app:main', 'vendor:script'], function () {
    return gulp.src(paths.appScripts).pipe(gulp.dest(paths.appScriptDestination[0]))
        .on('end', function () { browserSync.reload(); });
});

gulp.task('template', function () {
    return gulp.src(paths.templates).pipe(gulp.dest('wwwroot/templates'))
        .on('end', function () { browserSync.reload(); });
});

gulp.task('clean', function () {
    return del(['wwwroot/**/*']);
        //.on('end', function () { gutil.log('clean: end'); });
});

gulp.task('template:watch', ['clean'], function () {
    return gulp.watch(paths.templates, ['template']).on('end', function () { gutil.log('template:watch: end'); });
});

gulp.task('sass:watch', ['clean'], function () {
    return gulp.watch(paths.styles.concat(paths.appStyles), ['sass'])
        .on('end', function () { browserSync.reload(); });
});

gulp.task('script:watch', ['clean'], function () {
    return gulp.watch(paths.appScripts, ['app'])
        .on('end', function () { gutil.log('script:watch: end'); });
});

gulp.task('watch', function () {
    browserSync.init({
        proxy: "http://localhost:54976/"
    });

    return gulp.start('default', 'sass:watch', 'template:watch', 'script:watch')
        .on('end', function () { browserSync.reload(); });
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

gulp.task('vendor:script', function () {
    return gulp.src(paths.vendorJs)
        .pipe(gulp.dest('wwwroot/styles/vendor/scripts'));
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
        .on('end', function () { browserSync.reload(); });
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