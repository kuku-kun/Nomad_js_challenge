const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 숫자 추출 - Math module사용
/*
Math.random() - 무작위 숫자 추출
Math.round(a) - 수 a에 대해서 반올림
Math.ceil(a) - 소수 a에 대해서 정수부분만 뽑는다
Math.floor(a) - 소수 a에 대해서 올림
*/
const array_length = quotes.length; // 배열의 길이 측정
const num = Math.floor(Math.random()*array_length); // 랜덤 숫자 추출
const TodayQuote = quotes[num];
console.log(quotes[num]);

quote.innerText = TodayQuote.quote;
quote.innerText = TodayQuote.author;

