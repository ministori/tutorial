/**
 * Created by Administrator on 2017-06-30.
 */

// gulp 초기화 : gulp module 불러옴
var gulp = require('gulp');

// hello world 라고 콘솔에 찍는 task
gulp.task('hello', function () {
  return console.log('Hello World!');
});