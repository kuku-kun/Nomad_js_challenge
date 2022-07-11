const loginForm = document.querySelector("#login-form");
/*
querySelector - id[#]인지 class[.]인지 element받을 때 구분해줘야 함
getElementBy~ - JS가 이미 id or class를 찾고 있다는 걸 알고 있기 때문에 구분하지 않아도 됌
*/
const loginInput = loginForm.querySelector("input"); // document.querySelector("#login-form input");
// document가 아닌 위에 작성한 loginForm에서 element를 찾기 위해 검색한다
const loginButton = loginForm.querySelector("button"); // document.querySelector("#login-form button");
// --> 즉, 우리는 HTML element 안으로 바로 검색이 가능하다는 의미다!
// 오직 하나의 element에서만 찾을 수 있다!

// input하고 값 console에 보내기
/*
function LoginOnClick(){
    // console.dir(loginInput); // input의 property보여줌
    console.log(loginInput.value); // value가 console에 출력
    console.log("hello",loginInput.value); // hello 입력된 값
    // console.log("click");
}
*/
//loginButton.addEventListener("click",LoginOnClick);


// input값의 유효성 - 존재여부 확인
function LoginOnClick2(){
    const username = loginInput.value;
    const username2 = LoginInput.value;
    /*
    if(username == ""){
        alert("Empty! Please write your name");
    } else if(username.length > 15){ // .length: 입력값의 길이을 알려ㅜ는 메소드
        alert("Your name is long");
    } else {
        alert(username);
    }
    */
    console.log(username2);
    console.log(username);
}
loginButton.addEventListener("click",LoginOnClick2);

const Login = document.querySelector("#login");
const LoginInput = Login.querySelector("input");
/*
input 의 유효성 검사를 작동시키기 위해, input은 form태그 안에 반드시 있어야 한다.

input 안의 button 클릭 or 'type= submit'인 input 클릭하면
form이 자동으로 submit 된다! form이 자동으로 submit된다!
엔터를 눌러도 submit되고! 어떻게든 submit되기 때문에 click은 더 이상 신경 쓰지 않아도 된다.

"form 안에서 엔터를 누르고 더 이상 input이 없다면 자동으로 submit된다"

자동으로 submit 되길 원하면 form태그 안에 input을 넣으면 된다.(이때, input 안에 있는 버튼 or type이 submit인 input이기만 하면 된다.) 이렇게 되면 계속 페이지가 새로고침 되면서 사용자가 input에 넣은 정보들이 증발해버린다는 !!!단점!!!이 있다.
이 단점을 보완해, input의 정보를 submit되지 않게 잡아주려면 어떻게 할까?
답: event.preventDefault를 사용
preventDefault메소드: 브라우저가 기본적으로 수행하는 동작을 막는 메소드
*/

// 2. Submit
function onLoginSubmit(argument){
    const username2 = LoginInput.value;
    argument.preventDefault(); // 이 경우에만 새로고침을 안한다
    console.log(username2);
    console.log(argument);
    /*
    이때 매개변수(parameter) 에 'event' 라고 넣고 함수 내용에 event에 대한 preventDefault 를 해주면 
    해당하는 event에 대하여 submit의 기본동작을 멈추게 된다.
    그 내용 아래 console.log(loginInput.value); 를 작성하면 
    input에 적었던 value(이름) 이 나온다.
    이렇게, 버튼을 클릭하는 즉시 submit 되어 새로고침 (정보 증발)되는 것을 막고 
    유저의 이름을 저장(?)하기 위해서 preventDefault 가 사용된다.
    */
}
Login.addEventListener("submit", onLoginSubmit); // form에서 submit할 때 입력된다
// submit할 때 새로고침을 못 막는다 이유:브라워가 submit할 때 새로고침하도록 프로그래밍되어 있어서
// 'function()'으로 ()을 추가하는 건 function을 즉시 실행한다는 의미!
// 그래서 function()라고 적힌 이벤트만 브라우저가 함수를 읽고 실행시킨다
// 숙제 - js 4.2 Events영상 자주 보기

