var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
var inject = require('gulp-inject');

gulp.task('cleanBuiltDir', function() {
    return gulp.src('built').pipe(rimraf());
});

gulp.task('buildBackEnd', ['cleanBuiltDir'], function() {
    var tsProject = ts.createProject(path.resolve('./src/server/tsconfig.json'));
    return gulp.src(path.resolve('./src/server/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./built/server')));
});

gulp.task('copySrc', ['cleanBuiltDir'], function() {
    var css_target = gulp.src([path.resolve('./src/client/**/*.css'),path.resolve('./src/client/**/*.html')]);
    var css_dest = gulp.dest(path.resolve('./built/client'));
    css_target.pipe(css_dest);

    //var partials_target = gulp.src(path.resolve('./src/client/**/*.html'));
    //var partials_dest = gulp.dest(path.resolve('./built/client/partials'));
    //partials_target.pipe(partials_dest);
});

gulp.task('buildFrontEnd', ['cleanBuiltDir', 'copySrc'], function() {
    var tsProject = ts.createProject(path.resolve('./src/client/tsconfig.json'));
    return gulp.src(path.resolve('./src/client/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./built/client')));
});

gulp.task('injectDep', ['buildFrontEnd'], function() {


    var wiredep = require('wiredep').stream;
    var options = {
        "overrides": {
            "bootstrap": {
                "main": [
                    "less/bootstrap.less",
                    "dist/css/bootstrap.css",
                    "dist/js/bootstrap.js"
                ]
            }
        },
        ignorePath: '../../public'
    };

    var target = gulp.src(path.resolve('./src/client/**/*.ejs'));
    var dest = gulp.dest(path.resolve('./built/client'));
    var angular2_sources = gulp.src([
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/angular2/bundles/http.dev.js',
        'built/client/style.css'
    ], {
        read: false
    });

    return target
        .pipe(wiredep(options))
        .pipe(inject(angular2_sources, {
            ignorePath: 'built/'
        }))
        .pipe(dest);
});

gulp.task('watch', function() {
    gulp.watch(
        [
            'src/**/*.ts',
            'src/**/*.ejs',
            'src/**/*.html'
        ],
        [
        //    'buildBackEnd',
            'injectDep'
        ]
    );
});

gulp.task('serve', ['buildBackEnd', 'injectDep', 'watch'], function() {
    nodemon({
        script: './built/server/server.js'
    }).on('restart', function() {
        console.log('nodemon restarted server.js');
    })
});

gulp.task('default', ['buildBackEnd', 'injectDep']);