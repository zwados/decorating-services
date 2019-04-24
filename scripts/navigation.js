const navigation = document.querySelector('.navigation');

/*
const animateNav = () => {
    let navigationHeight = navigation.clientHeight;
    const isScrolling = () => {

        navigation.style.transform = `translateY(-${navigation.clientHeight}px)`;
        setTimeout(() => {
            navigation.style.transform = 'translateY(0)';
        }, 1500);
    }
    window.addEventListener('scroll', isScrolling);


}

window.addEventListener('scroll', animateNav);
*/
let lastScrollTop = 0;

const animateNav = () => {
    let currentPosition = window.pageYOffset;
    if (currentPosition > lastScrollTop) {
        navigation.style.transform = `translateY(-${navigation.clientHeight}px)`;
    } else {
        navigation.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;
}

window.addEventListener('scroll', animateNav, false);