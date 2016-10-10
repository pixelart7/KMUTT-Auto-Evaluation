var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function() {
    gulp.src('*.js')
    .pipe(minify({
        ext: {
            min:'.min.js'
        },
        ignoreFiles: ['gulpfile.js', 'index.js', '*.min.js']
    }))
    .pipe(gulp.dest(''));
});