var gulp = require("gulp"),
 imagemin = require("gulp-imagemin"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();

  gulp.task('pre', function() {
    browserSync.init({
      notify: false,
      server: {
        // Modify the path in order to publish on Github
        // baseDir: "dist"
        baseDir: "docs"   //set build folder name to doc
      }
    });
  });


 gulp.task("deletDistFolder",function(){

    return del("./docs");
 });

 gulp.task('copyGeneralFiles', ['deletDistFolder'], function() {
    var pathsToCopy = [
      './app/**/*',
      '!./app/index.html',
      '!./app/assets/images/**',
      '!./app/assets/style/**',
      '!./app/assets/scripts/**',
      '!./app/temp',
      '!./app/temp/**'
    ];
    return gulp.src(pathsToCopy)
      .pipe(gulp.dest("./docs"));
      // .pipe(gulp.dest("./dist"));
  });

gulp.task("optimizeImage",["deletDistFolder"],function(){
    return gulp.src(['./app/assets/images/**/*'      // ,'!./app/assets/images/icons','!./app/assets/images/icons/**/*'    add to exclude icon and its subdir
    ])
     .pipe(imagemin({

        progressive:true,
        interlaced:true,
        multipass:true

     }))
     .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deletDistFolder'], function() {
    gulp.start("usemin");
  });
  

gulp.task("usemin",["styles", "scripts"],function(){
   return gulp.src("./app/index.html")
   .pipe(usemin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
   }))
   .pipe(gulp.dest("./docs"));
});

gulp.task("build",["deletDistFolder","copyGeneralFiles","optimizeImage","useminTrigger"]);