// Variable declarations
const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-toggle-close');

const mobileMenu = document.getElementById('mobile-menu');

const headerOverlay = document.getElementById('header');

// Variables for images
const uniImage = document.getElementById('sky-view');
const dcImage = document.getElementById('DC');
const csImage = document.getElementById('coder');
const heroData = document.getElementById('hero-data');


// Open menu & add overlay
openMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('menu-opened');

    headerOverlay.classList.add('menu-opened');
})
/* How does this work
    - We're listening (waiting) for an event surrounding openMenuIcon which is an element we've defined up top
    - Upon a click, we run a function that takes the MobileMenu- and headerOverlay-linked elements and adds 'menu-opened' to their class lists
    - Our view on the site will be changed to menu-opened's view
*/

// Close menu & remove overlay
closeMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-opened');

    headerOverlay.classList.remove('menu-opened');
});
// See description above

/* NOT USING THIS--PLS REMOVE
// Add parallax scrolling effect
// To do this, we add an event listener to the window, which watches for a SCROLL event

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    uniImage.style.transform = "translateY(" + (-scrollPosition*0.01) + "%)"; // we multiply by a small number to scroll at a reasonable rate
    dcImage.style.transform = "translateY(" + (-scrollPosition*0.01) + "%)";
    csImage.style.transform = "translateY(" + (-scrollPosition*0.01) + "%)";
    heroData.style.transform = "translateY(" + (scrollPosition*0.03) + "%)";
    heroData.style.opacity = 1 - (scrollPosition * 0.002);
})
*/