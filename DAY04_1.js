// *CSS in Javascript
const title = document.querySelector('.hello h1');
// 1. javascript로 디자인 변화
/*
function handleTitleClick(){
    if(title.style.color === "blue"){
        title.style.color = "tomato";
    } else {
        title.style.color = "blue";
    }
}
*/
/*
***javascript로 CSS변화일으키기
1. HTML의 element를 찾아라
2. event를 listen해라
3. 그 event에 맞춰 웹브라우저는 반응한다
function handleTitleClick(){
    const currentColor = title.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    title.style.color = newColor;
}
*/
// 2. js로 css을 다가가 css를 통해 변환 발동
/*
function handleTitleClick(){
    //title.className = "active"; // javascript에서 class의 name을 변경
    if(title.className === "active"){
        title.className = "";
    } else {
        title.className = "active";
        // 이렇게 하면 css에 변화시 하나하나 바꿔야 하기에 에러 발생 빈도가 올라감
    }
}
*/
// Error 발생빈도 줄이는 방법
/*
function handleTitleClick(){
    const clickedClass = "active sexy-font";
    if(title.className === clickedClass){
        title.className = "";
    } else  {
        title.className = clickedClass;
    }
}
*/
// javascript는 현재 적용된 결과만 본다.
// 그래서 변화를 주는 영역에 동시에 적용시키고 싶다면 
// javascript에서 변화를 줄 때 원래 적힌 클래스명을 쓴다! 

// 3. 
function handleTitleClick(){
    // 1. classList
    //const clickedClass = "active";
    // if(title.classList.contains(clickedClass)){ // classlist에 clickedClass가 있는가 확인
    //     // classList- class의 목록으로 일부만 작업할 수 있게 허용
    //     // className - 이전 class에 상관없이 이전의 모든 class들을 허용함 
    //     title.classList.remove(clickedClass); //title.className = ""
    // } else {
    //     title.classList.add(clickedClass);// title.className = clickedClass;
    // }

    // 2. toggle - 위와 같은 효과
    title.classList.toggle("active");
}
title.addEventListener("click", handleTitleClick);
