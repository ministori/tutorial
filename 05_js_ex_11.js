/**
 * Created by Administrator on 2017-06-29.
 */

// 주석 종류

/**
 *
 *
 * */

/*

 */

// 매개변수를 사용하는 함수 연습


/*

  매개 변수 함수를 사용하는 경우

  1. 전역변수, 지역변수의 적용 범위를 개선하기 위해 사용

  2. 함수의 재사용성을 높이기 위해 사용

 */

// 두 수의 합을 계산하는 코딩

// 1) 매개변수를 사용하지 않는 경우
(function(){

  // 변수 선언
  var a = 10;
  var b = 20;
  var c = 40;
  var d = 50;

  // 함수 선언
  function sum1(){
    console.log( a + b );
  }
  function sum2(){
    console.log( b + c );
  }
  function sum3(){
    console.log( (a + b) + d );
  }

  // 함수 실행
  sum1();
  sum2();
  sum3();

})();

// 2) 매개변수를 사용하는 경우
(function(){

  // 매개변수는 var을 사용해서 변수 선언을 할 필요가 없음
  // 함수 선언
  function sumArg(arg1, arg2){
    console.log( arg1 + arg2 );
  }

  // 함수 실행
  sumArg( 10, 20 );
  sumArg( 20, 40 );
  sumArg( 30, 50 );

})();

// 문제 1
(function(){

  function hello(name){
    console.log('안녕하세요~ ' + name + ' 님!');
  }

  hello('영희');
  hello('영수');
  hello('창석');
  hello('재원');
  hello('경종');

})();

// 문제 2
(function(){

  function info(name, age, gender, tall, city){
    console.log( '이름 : ' + name );
    console.log( '나이 : ' + age );
    console.log( '성별 : ' + gender );
    console.log( '신장 : ' + tall );
    console.log( '지역 : ' + city );
  }

  info('영희', 32, '여', '170cm', '서울');
  info('영수', 24, '남', '165cm', '전남');
  info('창석', 38, '남', '180cm', '경기');

})();



















