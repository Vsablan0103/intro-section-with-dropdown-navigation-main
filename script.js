const toggles = document.querySelectorAll('#menu-button,#features,#company,#close-button');

console.log(toggles);

function openDiv() {
    const div = document.querySelector(this.dataset.toggle);

    div.classList.toggle('opened');

    if (this.dataset.toggle === "#feature-list" || this.dataset.toggle === "#company-list") {
        const icon = this.firstElementChild;
        const featurelist = this.nextElementSibling;

        if (featurelist.classList.contains('opened')) {
            icon.setAttribute('src', 'images/icon-arrow-up.svg');
        } else {
            icon.setAttribute('src', 'images/icon-arrow-down.svg');
        }

    } else if (this.dataset.toggle === ".nav-container") {
        const icon = this.firstElementChild;
        const navContainer = this.previousElementSibling;

        if (navContainer.classList.contains('opened')) {
            icon.setAttribute('src', 'images/icon-close-menu.svg');
        } else {
            icon.setAttribute('src', 'images/icon-menu.svg');
        }

    }

}

toggles.forEach(toggler => {
    toggler.addEventListener('click', openDiv);
})