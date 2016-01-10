"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var devFolder = 'dev/';


gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "./dev",
      routes: {
        '/bower_components': 'bower_components',
        '/' : '/'
      }
    }
  });

  gulp.watch([devFolder + '**/*.html'], reload);
  gulp.watch([devFolder + 'js/**/*.js'], reload);
});

gulp.task('default', ['serve']);