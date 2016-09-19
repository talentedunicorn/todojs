var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {
  var server = gls.static('./', 3000);
  server.start();

  // Watch for changes
  gulp.watch(['index.html', 'js/*.js', 'css/*.css'], function(file) {
    server.notify.apply(server, [file]);
  });
});


gulp.task('default', ['serve'], function() {
});

