// 조건문1 - 자료형 변환
const age = prompt("How old are you");
console.log(age); // cancel시 null이며 입력시 모든 값이 string으로 처리된다
// typeof 변수: 변수의 type
// prompt방식으로 이루어짐. 이건 css도 먹히지 않아서 사용X

// 변수 자료형 변환
// '15' -> 15 : parseInt("15");
console.log(parseInt(age), age, typeof age); // int형 String형
// NaN - Not a Number => 타입이 String을 보여줌

// 조건문2 - isNaN 
// => 변수가 number인지 아닌지 판단하여 boolean형으로 결과를 줌
/*
*무언가가 NaN인지를 판별하는 방법
=> isNaN()함수
: 인수가 NaN이면 true 아니면 false
*/
const year = parseInt(prompt("How old are you?")); // string이 존재하면 number로
console.log(isNaN(year)); // String[NaN]이면 true
if(isNaN(year)){ // year이 NaN이면 True
    // 조건의 값이 true가 되면 출력
    console.log("Please write a number");
} else {
    // 조건의 값이 false가 되면 출력
    console.log("Thank you");
}
// 조건문3 - if/else
if(isNaN(year)){
    console.log("Please write a number");
} else if(year < 19){
    console.log("You're not adult");
} else if(year >=19 && year <= 50){
    // 위의 조건들이 false이면서 현 조건에 true이면 실행
    console.log("you can work!");
} else {
    // 모든 조건에서 false인 경우 출력
    console.log("You're adult");
}
/* && - AND, || - OR 
true && true 제외 모두 === false
false || false 제외 모두 === true
*/
/* Recap
- 조건문은 서로 연관된 조건끼리 if,else if,else로 묶음
- 조건이 복잡하다면 
if((a && b)||(c && d)) {
    이런 식으로 묶인다.
}
*/

// Practice
const old = parseInt(prompt("How old are you?"));
if(isNaN(old) || old < 0){
    console.log("Please write a real positive number");
} else if(old < 19){
    console.log("You're too young");
} else if((old >= 19) && (old < 50)){
    console.log("You can work");
} else if((old > 50) && (old <80)){
    console.log("You should exercise");
} else if (old >= 80){
    console.log("Your Life is nice");
}