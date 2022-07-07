const title = document.querySelector("div.hello:first-child h1");
// html의 element을 가져오기 - querySelector()를 자주 사용
// div(.hello):first-child(h1)
//title.innerText = "hello";
// 'on~'으로 시작된 property는 event로 만질 수 있는 것

// event 
// => click등 웹브라우저에 변화를 줌
// 1.style 변경
//title.style.color = "blue";

// 2. click
function handleTitleClick(){
    title.style.color = "blue";
}
//title.addEventListener("click", handleTitleClick);
// function명만 입력해야 function이 javacript 목적대로 실행된다

// 3. event2
function handleMouseEnter(){
    console.log("mouse is here");
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}
// property가 'on~'으로 시작되는 것들을 실행시킨다
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// 3. event3 - event listening
// event사용방법
// (1) onclick등 porperty에 직접 입력
//title.onclick = handleTitleClick;
//title.onmouseenter = handleMouseEnter;

// (2) window - 전체로 먹이는 경우
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("Copier!");
}
function handleWindowOffline(){
    alert("No wifi!");
}
// window의 property를 직접 가지고 와서 발동시킨다
window.addEventListener("resize", handleWindowResize); // body의 사이즈 변화 시 발동
window.addEventListener("copy", handleWindowCopy); // 복사시 발동
window.addEventListener("offline", handleWindowOffline); // wifi 끊어지는 경우 발동

/