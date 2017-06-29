/**
 * Created by Administrator on 2017-06-29.
 */

/*
  객체( Object ) : 하나의 독립된 속성( 정적인 것 ), 기능( 동적인 것 )을 할 수 있는 대상

  1. 현실에서의 객체
      객체의 종류 : 자동차, 동물, 스마트폰..
      객체의 속성(Property) : 색, 무게, 길이, 이름 ...
      객체의 기능(Method) : 전진, 후진, 정지, 출발 ...

  2. 코딩에서의 객체
      객체의 이름 정의(변수 선언의 개념과 비슷)
      객체의 Property, Method 를 가지고 있음(Method는 함수)
      객체의 Property와 Method는 해당 객체의 전용으로 사용됨

 */

// 객체 선언
// var 객체이름 = { propertyName : propertyValue, methodName : function(){} };
// 객체이름.propertyName / 객체이름.methodName() 로 구분해서 표기

// Property 로만 구성된 객체
(function(){

  var obj1 = { name : '영수', age : '24', gender : '남' };

  var obj2 = {
    name : '영희',
    age : '30',
    gender : '여'
  };

  console.log( obj1.name );
  console.log( obj1.age );
  console.log( obj1.gender );

})();

console.log('-------------------');

// Method 로만 구성된 객체
(function(){

  var obj3 = {
    sum : function(a, b){
      console.log( a+b );
    }
  };

  obj3.sum(10,20);

})();

console.log('-------------------');

/*

  Property 와 Method 모두 구성된 객체

  car.name = Fiat
  car.model = 500
  car.weight = 850kg
  car.color = white

  car.start()
  car.drive()
  car.brake()
  car.stop()

 */
(function(){

  var car = {

    name : 'Fiat',
    model : '500',
    weight : 850,
    color : 'white',

    start : function(){
      console.log('START!!!');
    },
    drive : function(){
      console.log('DRIVE!!!');
    },
    brake : function(){
      console.log('BRAKE!!!');
    },
    stop : function(){
      console.log('STOP!!!');
    }

  };

  // car 객체의 name 변수 값 출력
  console.log( car.name );

  // car 객체의 start() 메소드 함수 호출
  car.start();

  // car 객체의 weight 변수 값을 계산하고 저장한 후에 출력
  car.weight = car.weight + 50;
  console.log( car.weight );

  /*
    전역 변수 사용하는 것 처럼 사용하지 않고, 지역변수와 매개변수를 사용하는 방법으로
    사용할 수 있도록 객체를 설계해야 함.
    ( ** 여러 곳에서 객체 변수에 접근하는 것을 기술 적으로 막을 수는 없음  )
   */

})();

console.log('-------------------');

// 지역 변수와 매개변수를 사용하는 형태 설계
(function(){

  var car = {
    name : 'Fiat',
    model : '500',
    weight : 850,
    color : 'white',
    start : function(){
      console.log('START!!!');
    },
    drive : function(){
      console.log('DRIVE!!!');
    },
    brake : function(){
      console.log('BRAKE!!!');
    },
    stop : function(){
      console.log('STOP!!!');
    },
    printName : function(){
      // this : 자기 자신을 지칭하는 객체
      console.log( '자동차 브랜드 : ' + this.name );
    },
    printWeight : function(number){
      console.log( '자동차의 총 중량 : ' + ( this.weight + ( number*70 ) ) );
    }
  };

  car.printName();
  /*
    객체 Property에 객체 내부에서의 접근외에 다른 곳에서 직접 접근하는 것을
    막지는 못함. => 막기 위해서는 다른 방법을 사용해야 함
   */
  car.name = 'Hyundai';
  car.printName();
  car.printWeight(3);

})();


























