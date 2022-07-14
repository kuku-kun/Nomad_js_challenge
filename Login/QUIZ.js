// 1.input에서 숫자 꺼내기
// 2.html에 숫자 보여주기
// 3.조건에 따른 결과 보여주기
const Chosen = document.querySelector(".chose");
const range = Chosen.querySelector("input");

const Play = document.querySelector(".play");
const inputNum = Play.querySelector(".guess");

const Result = document.querySelector(".hidden");
const chosen = document.querySelector(".chosen");
const mChosen = document.querySelector(".m_chosen");

function RandomGame(argument){
    argument.preventDefault();
    const get = range.value;
    const play = inputNum.value;
    console.log(get, play);
    Result.classList.remove("hidden");
    chosen.innerText = `You chose: ${get}`;
    mChosen.innerText = `the machine chose: ${play}`;
}

Play.addEventListener("submit",RandomGame);
