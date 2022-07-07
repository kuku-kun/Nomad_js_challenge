const title = document.querySelector('.quiz h1');
function EnterTitle(){
    title.innerText = "The mouse is here!";
    title.style.color = "aqua";
}

function LeaveTitle(){
    title.innerText = "The mouse is gone!";
    title.style.color = "aquamarine";
}

function Clickon(){
    title.innerText = "That was a right click!";
    title.style.color = "red";
}
function ResizeBody(){
    title.innerText = "You just resized!";
    title.style.color = "brown";
}
title.addEventListener('mouseenter', EnterTitle);
title.addEventListener("mouseleave", LeaveTitle);
window.addEventListener('mousedown', Clickon);
window.addEventListener('resize', ResizeBody);