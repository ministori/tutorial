/**
 * Created by Administrator on 2017-07-03.
 */

// 변수선언 = require('모듈이름');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');

/*

gulp.task( task이름, 함수/익명함수 );

 */

gulp.task('hello1', function () {
  return console.log('Hello World1!');
});

gulp.task('hello2', function () {
  return console.log('Hello World2!');
});

gulp.task('hello3', function () {
  return console.log('Hello World3!');
});

// pipe()는 모듈의 기능을 실행해주는 함수

// 새로 고침
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*', '*'])
      .pipe( livereload() );
});

// header, footer, 공통영역 분리
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));
});


gulp.task('default', ['livereload', 'include']);

