"use strict";

var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mqpacker = require("css-mqpacker");
var del = require("del");
var gulp = require("gulp");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var rename = require("gulp-rename");
var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
var uglify = require("gulp-uglify");
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]}),
      mqpacker ({
        sort: true
      })
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("symbols", function() {
  return gulp.src("img/icons/*.svg")
  .pipe(svgmin())
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("symbols.svg"))
  .pipe(gulp.dest("img"));
});
