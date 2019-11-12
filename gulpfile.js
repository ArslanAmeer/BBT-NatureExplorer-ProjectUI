//  STEP - 1
//  Initializing And Acquiring all Required packages

const gulp = require('gulp');
const less = require('gulp-less');
const autoPrefixLess = require('less-plugin-autoprefix');
const lessGlob = require('less-plugin-glob');
const cssMin = require('gulp-clean-css');
const jsMin = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const sourceMap = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const order = require('gulp-order');
const header = require('gulp-header');

var lessPrefix = new autoPrefixLess({
	browsers: ['last 2 versions'],
});

var paths = {
	styles: {
		src: ['public/assets/src/less/lib/**/*.css', 'public/assets/src/css/*.css'],
		lessSrc: 'public/assets/src/less/',
		dest: 'public/assets/dist/css/',
	},

	scripts: {
		src: 'public/assets/src/js/**/*.js',
		skip: 'public/assets/src/js/**/!(*.min)*.js',
		sameDest: 'public/assets/src/js/',
		dest: 'public/assets/dist/js/',
	},
};

// Setting Up Banner for Style Sheets and Scripting Files

var pkg = require('./package.json');
var banner = [
	'/**',
	' * <%= pkg.name %> - @ Copyrights 2019 | All Rights Reserved By Busy Bee Technologies',
	' * @version: v<%= pkg.version %>',
	' * @link: http://bzbeetech.com/>',
	' * @license: <%= pkg.license %>',
	' * @Developed & Code by: <%= pkg.author %> | http://www.arslanameer.com/',
	' */',
	'',
	'',
].join('\n');

//  STEP - 2
//  Creating Individual Tasks

// LESS to CSS ...

function styles() {
	return gulp
		.src(paths.styles.lessSrc + 'main.less')
		.pipe(rename('styles.min.css'))
		.pipe(sourceMap.init())
		.pipe(
			less({
				plugins: [lessPrefix, lessGlob],
			})
		)
		.pipe(
			cssMin({
				level: {
					1: {
						specialComments: 0,
					},
				},
			})
		)
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(sourceMap.write('/maps'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
}

// JS Minify

function scripts() {
	return gulp
		.src(paths.scripts.src)
		.pipe(sourceMap.init())
		.pipe(order(['lib/*.js', 'scripts.js']))
		.pipe(concat('scripts.js'))
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(rename('scripts.min.js'))
		.pipe(
			jsMin({
				compress: {
					hoist_funs: false,
					hoist_vars: false,
				},
			})
		)
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(sourceMap.write('/maps'))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(browserSync.stream());
}

// Tasks: Watch, Build and Serve

function watch() {
	browserSync.init({
		server: {
			baseDir: 'public/',
		},
		port: 2712,
		// host: "192.168.27.12",
		browser: 'Firefox',
	});
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.styles.lessSrc + '**/*.less', styles);
	gulp.watch('public/index.html').on('change', browserSync.reload);
}

var build = gulp.series(gulp.parallel(styles, scripts), watch);

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = build;