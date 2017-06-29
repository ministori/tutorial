/**
 * Created by Administrator on 2017-06-29.
 */

/*

  함수 정의 방법 3가지

  1. function 함수이름(){} : 기본 방법

    Ex) function foo(){
          console.log('Hello');
        }

  2. var 변수이름(함수이름) = function(){} : 함수 리터럴 방법( 변수에 함수를 저장하는 형태 )

    Ex) var myFunction = function(){
          console.log('Hello');
        }

  3. function(){} : 익명함수( 이름없는 함수 ) - 다른 함수의 매개 인자로 넣어줄 때 사용, 즉시 실행 함수에 사용

    Ex) externalFunction('name' , function(){
          console.log('Hello');
        });

 */