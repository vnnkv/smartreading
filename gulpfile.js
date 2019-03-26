var gulp        = require('gulp')
    watch       = require('gulp-watch');
    browserSync = require('browser-sync');

gulp.task('browser-sync',function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'],function() {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});