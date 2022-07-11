const Login = document.querySelector("#login");
const LoginInput = Login.querySelector("input");
const greeting = document.querySelector("#greeting");

//String만 포함된 변수는 대문자로 보통 표기하며, String만 저장하고 싶을 때 사용!
const HIDDEN_CLASSNAME = "hidden";
const NAME_KEY = "name";

function onLoginSubmit(argument){ 
    argument.preventDefault(); 
    Login.classList.add(HIDDEN_CLASSNAME); // 현 html의 class에 'hidden'이라는 value를 넣는다
    const name = LoginInput.value;
    //console.log(name); 
    localStorage.setItem(NAME_KEY,name); // 이렇게 작성하면 
    //Application-Local Storage-file에서 'name'이라는 property로 확인가능하다
    greeting.innerText = `Hello ${name}`;// "Hello" + name; 
    // 이것만 작성되어 있으면 hidden에서 주어진 속성에 처리되어 class에서 제거해야 함
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// String 과 변수를 한꺼번에 적고 싶다면 ${}을 활용해 `~ ${}`로 작성한다

//Login.addEventListener("submit",onLoginSubmit);

// 4.6 Loading Name
// 유저 정보 존재유무 확인
function paintGreeting(name){
    greeting.innerText = `Hello ${savedName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedName = localStorage.getItem(NAME_KEY);
if(savedName === null){
    // show the forms
    Login.classList.remove(HIDDEN_CLASSNAME);
    Login.addEventListener("submit",onLoginSubmit);
} else {
    // show the greetings
    paintGreeting(savedName);
}