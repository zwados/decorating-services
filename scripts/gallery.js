//IMAGE GALLERY <3

class Gallery {
    constructor(galleryId) {

        //slider
        this.galleryTopic = galleryId;
        this.slider = document.querySelector(`div${galleryId} .gallery__bottom-line .gallery__slider`);
        this.startX;
        this.scrollLeft;
        let isDown;
        this.slider.addEventListener('mousedown', (e) => this.mouseDown(e));
        this.slider.addEventListener('mouseleave', () => this.mouseLeave());
        this.slider.addEventListener('mouseup', () => this.mouseUp());
        this.slider.addEventListener('mousemove', (e) => this.mouseMove(e));

        //image width
        this.miniatures = document.querySelectorAll(`div${galleryId} .gallery__bottom-line .gallery__slider .gallery__miniature`);
        this.miniaturesWidth = this.miniatures[0].width;

        //arrows
        this.arrowLeft = document.querySelector(`div${galleryId} .gallery__bottom-line .gallery__arrow--left`);
        this.arrowRight = document.querySelector(`div${galleryId} .gallery__bottom-line .gallery__arrow--right`);
        this.arrowLeft.addEventListener('click', () => this.prevImg());
        this.arrowRight.addEventListener('click', () => this.nextImg());

        //main image
        this.mainImage = document.querySelector(`div${galleryId} .gallery__main-img`);
        //this.miniatures.forEach((miniature), (miniature) => changeMainImg(miniature))
        this.miniatures.forEach((miniature) => {
            miniature.addEventListener('click', (e) => {
                this.mainImage.src = e.target.src;
            })
        })
    }

    //slider methods
    mouseDown = (e) => {
        this.isDown = true;
        this.slider.classList.add('active');
        this.startX = e.pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
    }

    mouseLeave = () => {
        this.isDown = false;
        this.slider.classList.remove('active');
    }

    mouseUp = () => {
        this.isDown = false;
        this.slider.classList.remove('active');
    }

    mouseMove = (e) => {
        if (!this.isDown) return;
        e.preventDefault();
        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * 0.75;
        this.slider.scrollLeft = this.scrollLeft - walk;
    }

    //arrow methods
    prevImg = () => {
        this.slider.scrollLeft -= this.miniaturesWidth;
    }

    nextImg = () => {
        this.slider.scrollLeft += this.miniaturesWidth;
    }
}

// Gallery constructor instances
const DecorationsGallery = new Gallery('#decorationsGallery');
const ConstructionsGallery = new Gallery('#constructionsGallery');
//const PaintingGallery = new Gallery('#paintingGallery');
//const RenovatingGallery = new Gallery('#renovatingGallery');
//const TilingGallery = new Gallery('#tilingGallery');
const CarpentryGallery = new Gallery('#carpentryGallery');

//Orientation icon

const rotateIcons = document.querySelectorAll('.rotate-icon__box');

window.addEventListener("orientationchange", function () {
    console.log("the orientation of the device is now " + screen.orientation.angle);
    if (this.screen.orientation.angle === 90) {
        rotateIcons.forEach(icon => icon.style.display = "none")
    } else if (this.screen.orientation.angle === 0) {
        rotateIcons.forEach(icon => icon.style.display = "flex")
    }
});