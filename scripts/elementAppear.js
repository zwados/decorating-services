//To make scrollAppear function work, add class 'appear' to a chosen element and @include hideElement in your relevant sass file.


const elements = document.querySelectorAll('.appear');
const screenPosition = window.innerHeight;



const scrollAppear = (elements) => {
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < screenPosition / 1.3) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', () => scrollAppear(elements));