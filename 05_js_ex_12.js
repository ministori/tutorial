/**
 * Created by Administrator on 2017-06-29.
 */
/*

  배열 변수
  var 변수이름 = [];
  var 변수이름 = [1,2,3];
  변수이름[index] => 변수이름[0], 변수이름[1] ...

  Ex) var a = [1,2,3];
      ==> a[0] = 1, a[1] = 2, a[2] = 3

*/

// 배열 사용 기초
(function(){

  var a = [1,2,3];

  // 배열 변수를 사용할 때, 반복문과 같이 사용하는 경우가 일반적임
  for(var i=0; i<3 ;i++){
    console.log( a[i] + 10 );
  }

})();

// A반 학생 10명의 국어, 영어, 수학의 평균 점수를 각각 구하시오
(function(){

  var student = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  var kor = [80, 70, 90, 90, 85, 100, 50, 75, 60, 90];
  var eng = [90, 70, 70, 65, 85, 100, 50, 84, 70, 85];
  var math = [70, 90, 88, 78, 85, 100, 50, 90, 80, 76];
  var avg = [];

  for(var i=0; i<10; i++){
    avg[i] = ( kor[i] + eng[i] + math[i] ) / 3;
  }

  for(var j=0; j<10; j++){
    // 출력 형태 : A학생의 평균 점수는 80점 입니다.
    console.log( student[j] + '학생의 평균 점수는 ' + Math.round( avg[j] ) + '점 입니다.' );
  }

})();


























