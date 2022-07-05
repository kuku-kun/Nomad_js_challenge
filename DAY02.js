// Recap, 요약본
const a = 5;
let inNicoFat = true;//true[1]/false[0] => boolean
// const - 수정(재선언) 불가
// +) 선언 시 문자, 정수 모두 가능
// let - 수정 가능
// var - 사용X
// ***Always const, never var, sometimes let
const name = null; // null: 변수가 비어있다고 할당되는 것
let name2; // undefined: 변수에 선언이 안되어 할당도 안된 것

// 참고: https://docu94.tistory.com/54
// Array - [], 여러 개의 값을 list로 관리하기 위해
const toBuy = ['potato','tomato','pizza'];
console.log(toBuy);
toBuy[2] = 'cola';
console.log(toBuy);
toBuy.push("meat"); // array에서 여러 기능을 사용할 수 있다
console.log(toBuy);

// Object - property으로 {}에서 생성, 
// if) player의 name property: player["name"] 
const player = {
    name:"Nico",
    age:26
};
console.log(player, console); // json으로 출력
console.log(player.name); // name, age가 player의 property
player.name = "mingi"; // property 수정
console.log(player);
player.sex="woman"; // 이미 생성된 object에 property 추가
console.log(player);

// 함수, function
function plus(a,b){
    console.log(a+b);
}
//plus(3,4); 
//alert(plus(3,3)); // undefined이 alert됌
// -> 값이 함수 안에서만 맴돌고 있기 때문에 다른 곳으로 출력시키게 만들어야 함
//const box = plus(3,3); 
//alert(box);

// 연습
const calcultor = {
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    },
    square:function(a,b){
        return a**b;
    }
};
const add = calcultor.add(1,3); console.log(add);
const minus= calcultor.minus(2,2); console.log(minus);
const multiply= calcultor.multiply(3,3); console.log(multiply);
const divide= calcultor.divide(4,1); console.log(divide);
const square= calcultor.square(5,5); console.log(square);


// return
const age = 96;
function calculatorKORAge(ageFORAge){
    return ageFORAge + 2; // 출력시 반환하는 값
}
const krAge = calculatorKORAge(age); 
// returnX시, 'undefined'출력하지만 return이 있으면 return값 출력
console.log(krAge);

/*
함수 내에 console.log 찍은건 그냥 콘솔로그에다가 함수에 저장된 argument를 임의로 찍어준거고,
return은 함수를 동작시켜서 값을 뽑아 object 내에 저장하겠다 이 뜻

return을 이용하면 변수에 값을 저장시킬 수 있음
return이 실행되면 그 자리에서function 종료
***function은 실행 후 종료하면 결과[return값]만 남긴 채 사라진다!
return 뒤의 문구는 실행되지 않음
*/
