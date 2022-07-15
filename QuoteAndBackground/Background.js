const images = ["coffee.jpg","OIP.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// javascript로 html에 img추가
const bgImage = document.querySelector("img");
bgImage.src= `img/${chosenImage}`;
console.log(bgImage);

// document.body.appendChild(bgImage); - html의 body에 넣고 싶다면 사용