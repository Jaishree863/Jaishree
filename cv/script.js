const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll", reveal);

function reveal(){

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight;

const elementTop = reveals[i].getBoundingClientRect().top;

const elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");
reveals[i].classList.add("reveal");

}

}

}

reveal();
