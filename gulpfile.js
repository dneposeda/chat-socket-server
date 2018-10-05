const gulp = require('gulp');
// const gp = require('gulp-load-plugins')();
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

var SRC_DIR = './src/';
var DIST_DIR = './dist/';
var path = {
	typescript: {
		// entry: SRC_DIR + 'typescript/index.ts',
		src: SRC_DIR + 'typescript/**/*.ts',
		dist: DIST_DIR + 'js'
	}
};

gulp.task('scripts', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(path.typescript.dist));
});

gulp.task('watch', () => {
	gulp.watch(path.typescript.src, gulp.series('scripts'));
});

gulp.task('default', gulp.series(
  gulp.parallel('scripts'),
  gulp.parallel('watch')
));