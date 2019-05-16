class Popup {
    constructor(popupElement, buttonElement) {
        this.popupElement = document.getElementById(popupElement);
        this.buttonElement = document.getElementById(buttonElement);
        this.modalId = this.popupElement.parentElement;
        this.modalBox = this.modalId.parentElement;

        this.hideModalBox();

        const buttons = document.querySelectorAll('.popup__button');
        const exitBtns = document.querySelectorAll('.popup__exit-icon');


        buttons.forEach((button) => {
            if (buttonElement == button.id) {
                const targetBtn = document.getElementById(buttonElement);
                targetBtn.addEventListener('click', () => this.displayModalBox())
            }
        });

        exitBtns.forEach((exitBtn) => {
            exitBtn.addEventListener('click', () => this.hideModalBox())
        });

    }

    displayModalBox = () => {
        if (this.modalId.style.opacity == '0') {
            const popup = this.popupElement;
            const modal = this.modalId;
            this.modalBox.style.display = 'block';
            setTimeout(function () {
                modal.style.opacity = '1';
            }, 200);
            setTimeout(function () {
                popup.style.opacity = '1';
            }, 500);

        } else {
            this.hideModalBox();
        }
    }

    hideModalBox = () => {
        this.modalId.style.opacity = '0';
        this.popupElement.style.opacity = '0';
        const modalBox = this.modalBox;
        setTimeout(function () {
            modalBox.style.display = 'none';
        }, 500);
    }
}

// About Section Object Instances
const Experience = new Popup('popupExperience', 'experience');
const Offer = new Popup('popupOffer', 'offer');
const History = new Popup('popupHistory', 'history');

// Projects Section Object Instances

const Decorations = new Popup('popupDecorations', 'decorations');
const Bricks = new Popup('popupBricks', 'bricks');
const Painting = new Popup('popupPainting', 'painting');
const Renovating = new Popup('popupRenovating', 'renovating');
const Tiling = new Popup('popupTiling', 'tiling');
const Carpentry = new Popup('popupCarpentry', 'carpentry');

// Offer Section Object Instances

const SectionOffer = new Popup('popupSectionOffer', 'myOffer');