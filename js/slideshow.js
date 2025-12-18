const slides = document.getElementById("slides");
const images = slides.children;
const slideWidth = 400;
const slideCount = images.length;


const firstClone = images[0].cloneNode(true);
slides.appendChild(firstClone);

let index = 0;

function slide() {
    index++;
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${index * slideWidth}px)`;


    if (index === slideCount) {
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = "translateX(0)";
            index = 0;
        }, 500);
    }
}

setInterval(slide, 3000);