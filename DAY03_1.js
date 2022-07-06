// HTML(브라우저)와 Javascript의 상호작용 
/* Javascript사용이유 : html을 읽어서 브라우저를 움직이기 위함
-HTML은 CSS와 Javascript을 불러 발동
-html은 태그를 javascript에 맞춘다
*/

//1. Document Object
// - document: 브라우저에 이미 존재하는 object, 접근가능한 HTML을 가리키는 객체 
// => HTML에서 title에 적힌 걸 가지고 정의되며, 이는 javascript가 설정한 게 아닌 
//    document가 HTML을 보여주는 거다(html 관점)
// console.dir(document)-json형식으로 보여주고 있음
//    => HTML document 객체로부터 title을 가지고 옴(javascript 관점)
// document.title
// =====> 즉, 브라우저가 우리에게 많은 것이 든 document객체로 주어지고 있다
// 브라우저에서 이미 자바스크립트와 HTML의 동기화를 제공하여 연결만 해줘도 불러오고 설정 할 수 있음
document.title = "Hello! Broswer"
// 요약하면 document는 Javascript에서 HTML로 접근가능한 방법

// 2. HTML in Javascript
const title = document.getElementById("title");
console.log(title.id); 
const hello = document.getElementsByClassName("hello");
console.log(title.className);

title.innerText = "Study";