const ul = document.querySelector('#ul');
const hamburger = document.querySelector('.hamburger');
let ulStyle = ul.style.display;

// hamburger.addEventListener('click', () => {
//     toggleHamburger();
// });

function toggleHamburger() {
    ul.classList.toggle("display");
    ul.classList.toggle("no-display");
    if (ulStyle === 'none') {
        ulStyle = "flex"
    }
}