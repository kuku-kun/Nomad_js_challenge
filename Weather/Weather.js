const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = '';
// `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${}`;

function onGeoOk(position){
    // position - GeolocationPosition값
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
    const url="";
    fetch(url) // url이라는 서버주소로 요청을 원한다
        .then((response) => response.json()) 
        // then이 붙는다면 API를 이용하여 백엔드 서버로부터 받아온 정보를 사용할 때 사용된다
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
        });
}
/* 참고사이트: https://www.daleseo.com/js-window-fetch/
fetch() - 브라우저가 라이브러리(request,axios,jquery등)의 도움없이 내장된 함수로,
원격 API호출할 때 사용된다. 
request,axios,jquery - 서버에서 대신 API를 호츨
fetch - 클라이언트에서 직접 API 호출(비동기 요청방식)
**Ajax - 브라우저에서 비동기로 HTTP통신읋 하는 것
참고2 - https://ljtaek2.tistory.com/130

결론 ==> fetch를 이용하면 XML보다 HTTP요청을 간편하게 보낼 수 있다
*/
function onGeoError(){
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); // 브라우저에서 현재 위치를 알려준다
// 위치 관련 api - openweathermap.org 에서 구할 수 있다! 
// -> 이를 통해 그 지역의 날씨를 api로 불러 만들 수 있다

