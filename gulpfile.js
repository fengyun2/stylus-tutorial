/*
 * @Author: fengyun2
 * @Date:   2016-07-26 09:38:36
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-26 09:58:16
 */

'use strict';

const gulp = require('gulp');

const stylus = require('gulp-stylus');
const minifyCSS = require('gulp-minify-css');
const nib = require('nib');
const clean = require('gulp-clean');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
// const jshint = require('gulp-jshint');
const path = require('path');

const buildSrc = path.join(__dirname, 'dist'),
  staticSrc = path.join(__dirname, 'src/**/*.*');

// 目标目录清理
gulp.task('clean', function() {
  return gulp.src([buildSrc], { read: false })
    .pipe(clean());
});

// stylus
gulp.task('stylus', function() {
  gulp.src([staticSrc])
    .pipe(stylus({ error: true, use: [nib()] }))
    // .pipe(minifyCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer({
      browsers: ['>0.001%', 'last 10 versions'],
      flexbox: true
    }))
    .pipe(gulp.dest(buildSrc));
});

gulp.task('default', ['stylus', 'watch']);

//监听任务
gulp.task('watch', function() {
  // 监听images
  gulp.watch(staticSrc, ['stylus']);
});
