/**
 * Created by Administrator on 2017-06-28.
 */

// 변수 선언부
var hap = 0;
var gob = 0;

// 함수 선언부
/**
 *
 * function 함수이름(){
 *
 *    실행문
 *
 * }
 *
 * */

function tenHap(){

  for( var i=0; i<=10; i++ ){
    hap = hap + i;
  }

  console.log(hap);
}

function gugudan(){

  for( var i=2; i<10; i++ ){

    for( var j=1; j<10; j++ ){

      gob = i * j;
      console.log( i + 'x' + j + '=' + gob );

    }

  }

}