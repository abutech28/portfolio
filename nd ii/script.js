// Mobile Menu
function toggleMenu() {
    document
        .getElementById("navLinks")
        .classList.toggle("show");
}

// Typing Animation
const words = [
    "Frontend Developer",
    "Computer Science Student",
    "HTML & CSS Developer",
    "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {

    const typing = document.getElementById("typing");

    if(charIndex < words[wordIndex].length){

        typing.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(deleteEffect,1500);
    }
}

function deleteEffect(){

    const typing =
    document.getElementById("typing");

    if(charIndex > 0){

        typing.textContent =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();

// Footer Year
document.getElementById("year").textContent =
new Date().getFullYear();

// Scroll Button
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});