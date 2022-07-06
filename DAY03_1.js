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
const title = document.getElementById('title');
// console.dir(title);
title.innerText = "Got you!"; // 표면적으로 html에 변화없이 js로 변화일으킴
console.log(title.id); // title
console.log(title.className); // hello

// 3. element찾기(id, className)
// getElementById() 안에 들어가는 건 html에서 id와 같은 이름이여야한다!
// 보통은 id보다 className을 자주 사용하며, 동시 사용도 빈번
// const bye = document.getElementById('bye');
// bye.innerText = "Bye~";
/* error: Cannot set properties of null (setting 'innerText')
=> "'bye'라는 건 존재하지 않으니 bye 내부의 innerText를 호출하지 마십시오"
*/
const bye = document.getElementsByClassName('bye');
console.log(bye);
bye.innerText = "Bye~";

// html 태그 자체를 가져오기
const tag = document.getElementsByTagName("h3");
console.log(tag);

// 이상적인 Element 가져오기
const query1 = document.querySelector('.hellp h2');
// querySelector - element를 CSS방식으로 검색가능
// => class 내부의 것들을 가져올 수 있다!
// => 이를 통해 class를 먼저 찾안 뒤에 그 안의 것을 찾을 수 있다!
console.log(query1); // 결과 : 첫번째 <h2>태그

// div 안의 모든 태그를 가지고 오고 싶다면? -> querySelectorAll()
const query2 = document.querySelectorAll('.hellp h2');
console.log(query2); // List형식으로 json해서 가지고 온다

// 참고
const query3 = document.querySelector('#title');
const query4 = document.getElementById('title');
// 위는 동일하게 id로 설정한 태그를 부른다. 
// 여기서 차이는 querySelector인 경우 CSS로 접근되어 아래의 태그를 접근가능하나,
// getElementById는 아래 태그로 접근 불가능 
console.log(query3);