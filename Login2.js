const Login = document.querySelector("#login");
const LoginInput = Login.querySelector("input"); // document.querySelector("#login input")

const link = document.querySelector("a");

function onLoginSubmit(argument){ // argument - 인자 제공
    argument.preventDefault(); // 인자 받는 공간 생성하며, 역할: 기본작동 금지
    console.log(LoginInput.value);
}

// 4.3 Event part Two
function handleLinkClick(event){ 
    event.preventDefault(); // 기본 작동을 막아서 a태그의 역할도 막는다
    alert("clicked"); 
    // alert은 모든 동작이 시행되기 전에 막아서 alert을 사용하고 나서 발동된다.(이로 인해 사용빈도 낮음)
}
Login.addEventListener("submit",onLoginSubmit); // "submit" -> SubmitEvent
link.addEventListener("click",handleLinkClick); // "click" -> MouseEvent
// function() - 함수를 한 번 시행하고 끝이다.
// function - 사용자 마음대로 제어 가능
// handleLinkClick({inform about the event that just happened})
// addEventListener()안에 있는 함수는 직접 실행하지 않는다
/* 정리
- zzz.xxx(); 로 하면 직접 그 value를 적어줘야 하는데, 
    브라우저가 하도록 하면 자동으로 value 값을 담아준다. 
    (parameter 에 자리를 마련하기만 하면!)
- addEventListener 안에 있는 함수는 직접 실행하지 않는다. 
    브라우저가 실행시켜준다.
- 브라우저는 실행만 시켜주는것이 아니라 event에 대한 정보도 담아준다.
*/
