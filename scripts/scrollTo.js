const menu = document.querySelectorAll('.menu');
const sections = document.querySelectorAll('.scrollTo');

menu.forEach((header, i) => {
    menu[i].addEventListener('click', () => {
        sections[i].scrollIntoView({
            behavior: "smooth",
        });
    })
})

