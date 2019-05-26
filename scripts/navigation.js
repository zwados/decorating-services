const navigation = document.querySelector('.navigation');
let lastScrollTop = 0;

const animateNav = () => {
    let currentPosition = window.pageYOffset;
    isBurgerActive = false;
    toggleNavList();
    if (currentPosition > lastScrollTop) {
        navigation.style.transform = `translateY(-${navigation.clientHeight}px)`;
    } else {
        navigation.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;
}

window.addEventListener('scroll', animateNav, false);

//hamburger nav
const navigationList = document.querySelector('.navigation__list');
const navigationItems = document.querySelectorAll('.navigation__item');
const navigationBurger = document.querySelector('.navigation__burger');
let isBurgerActive = false;


const toggleNavList = () => {
    if (window.innerWidth <= 992) {
        isBurgerActive = !isBurgerActive;
        console.log(isBurgerActive);
        if (isBurgerActive) {
            navigationList.style.transform = `translateY(${-1.2 * (navigationList.offsetHeight + navigation.offsetHeight)}px)`;
            navigationItems.forEach((item) => {
                item.style.opacity = 0;
            })
        } else {
            navigationList.style.transform = `translateY(0px)`;
            navigationItems.forEach((item) => {
                item.style.opacity = 1;
            })
        }
    }
}


toggleNavList();


navigationBurger.addEventListener('click', () => {
    toggleNavList();
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        isBurgerActive = true;
        navigationList.style.transform = `translateY(0px)`;
        navigationItems.forEach((item) => {
            item.style.opacity = 1;
        })
    } else {
        isBurgerActive = true;
        navigation.style.overflow = 'visible';
        navigationList.style.transform = `translateY(${-1.2 * (navigationList.offsetHeight + navigation.offsetHeight)}px)`;
        navigationItems.forEach((item) => {
            item.style.opacity = 0;
        })
    }
})