
const amIFat = true;
let something;
console.log(something); // defined - 변수는 존재하지만 선언X(텅빈 값)으로 할당
                        //    메모리 안에는 존재하지만 그 공간 안은 텅 빈 상황 
console.log(amIFat); // null - 변수는 존재하지만 할당 자체가 안된 상황
/*
true: 켜져 있음
false: 꺼져 있음
null: 변수 선언은 되었으나 아무것도 할당하지 않은 상태
undefined: 변수 선언은 되었으나 비어있는 값을 할당한 상태
*/

//Array
//목적: 하나의 변수에 많은 값을 선언하기 위해 
//const dayofWeek = ['mon','tue','wed','thu','fri','sat','sun',7,4];
//console.log(dayofWeek);
//console.log(dayofWeek[0], dayofWeek[6]);
//만약 Array에 무언가 추가하고 싶을 경우
//dayofWeek.push(12,51); // [9],[10]으로 들어간다
//console.log(dayofWeek);

//Object
// 하나의 변수 안에 여러 개의 변수를 만들어 분류시켜서 데이터 저장[json방식]
const player = {
    name:"nico", 
    age:25,
    points:10
};
console.log(player.age);
console.log(player.name);
console.log(player.points);
console.log(player); // json방식

// object 수정
player.lastName = "Kim"; // 새 property 추가
player.age=26; // 수정 - object를 const으로 선언하였으므로 수정 불가라고 볼 수 있으나
// object 전체를 하나의 값으로 수정하는 경우에만 에러 발생.
// object안의 무언가를 수정하는 경우 에러 발생X
console.log(player);

//function(함수)
function cooking(name){
    console.log(name);
}
cooking(); // undefined로 결과로서 좋지는 않음
cooking("md");
cooking("es");

function plus(a,b){
    console.log(a+b);
}
function divide(c,d){
    console.log(c/d);
}
plus(4,7);
divide(4,7);

//함수 object
const player2={
    name:"KIM",
    sayHello: function(){
        console.log("hello world!");
    }
};
player2.sayHello();
console.log(player2.name);
