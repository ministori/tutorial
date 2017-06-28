/**
 * Created by Administrator on 2017-06-28.
 */

var gob = 0;

for( var i=2; i<10; i++ ){

  for( var j=1; j<10; j++ ){

    gob = i * j;

    // 문자 데이터와 + 연산 : 문자열 합침(concatenate : 연결) 연산
    // 변수 + 변수 => 덧셈
    // 숫자 + 숫자 => 덧셈
    // 변수 + 숫자 => 덧셈
    // 문자 + 문자 => 연결
    // 변수 + 문자 => 연결
    // 숫자 + 문자 => 연결
    // 변수 + 문자 + 변수 => 연결
    // Ex) 1, 3 => 13 ( 식 : '1' + '3' )
    // Ex) a=1, b=3 => 13 ( 식 : a+''+b )

    console.log( i + 'x' + j + '=' + gob );

  }

}

console.log(1+''+3);









