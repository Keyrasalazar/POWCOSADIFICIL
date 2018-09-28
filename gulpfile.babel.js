import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import del from 'del';

const paths = {
	styles: {
		src: 'develop/scss/index.scss',
		dest: 'web/assets/css',
		watch: 'develop/scss/**/*.scss'
	},
	scripts: {
		src: 'develop/js/**/*.js',
		dest: 'web/assets/js',
		watch: 'develop/js/**/*.js'
	},
	bootstrap: {
		src: 'node_modules/bootstrap/**/*',
		dest: 'develop/bootstrap',
	}
};

export const clean = () => del([ 'web/assets/css' ]);

export function styles() {
	return gulp.src(paths.styles.src)
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
	return gulp.src(paths.scripts.src)
		.pipe(babel())
		.pipe(gulp.dest(paths.scripts.dest));
}

export function bootstrap() {
	return gulp.src(paths.bootstrap.src)
		.pipe(gulp.dest(paths.bootstrap.dest));
}

function watch() {
	gulp.watch(paths.scripts.watch, scripts);
	gulp.watch(paths.styles.watch, styles);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts));
export default build;

const dev = gulp.series(build, gulp.parallel(watch));
export { dev }

