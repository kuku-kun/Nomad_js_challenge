const clock = document.querySelector("#clock");

function sayHello(){
    console.log("hello");
}
setInterval(sayHello, 5000); //5초마다 출력
// date관련 함수 - date.~()로 입력하며, date는 'const date = new Date()'로 한다
// 원래 입력이라면 - new Date().~()로 입력한다
new Date().getMonth(); // f가 console에 출력


function getClock(){
    const date = new Date();
    // padStart('최대 string의 길이',부족할 경우 채워넣을 string)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; // 1의 자리 수가 '1'그대로 나온다
    clock.innerText = `${hours}:${minutes}:${seconds}`; // 1의 자리 수만 나오면 '01'로 나온다
}
getClock(); // 새로고침 하는 당시의 시간만 출력(한번만 실행하고 END)
setInterval(getClock, 1000); // 1초마다 출력


// PadStart함수
/*
padStart()를 이용하여 시계의 자리수를 2자리로 통일하였다.

0> 00 로 바꾸고 싶을 때는 padStart(x, 'y') 를 사용하면 된다.
padStart는 내가 갖고 있는 string 을 길게 만들어 주고 싶을 때 사용.
뒤에서 추가하고 싶을 때는 padEnd를 사용하면 된다.
x는 원하는 length를, y는 앞에 채워줄 내용을 입력하면 된다.

String() : number를 string으로 변환
padStart(maxLength, fillstring) : padStart가 적용되는 문자열의 길이가 maxLength보다 작다면 부족한 길이만큼 fillstring을 문자열 앞쪽에 채운다.
padEnd: 뒤쪽에 채운다.
*/





