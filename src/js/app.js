import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

function resetMenuOnResize() {
    const menu = document.getElementById('menu');
    const isLargeScreen = window.innerWidth >= 768; // `md` breakpoint (768px)

    if (isLargeScreen) {
        // Reset menu styles for larger screens
        menu.style.top = null; // Remove inline styles
        menu.classList.remove('hidden', 'animate-slideIn', 'animate-slideOut');
    }
}

window.addEventListener('resize', resetMenuOnResize);

const body = document.body;
const menu = document.getElementById('menu');
const toggleButton = document.getElementById('themeToggle');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('bg-zinc-900')) {
        // Switch to Light Mode
        body.classList.remove('bg-zinc-900', 'text-white');
        menu.classList.remove('bg-zinc-800')
        body.classList.add('bg-[#f4f4f4]', 'text-black');
        menu.classList.add('bg-[#ECECEC]');
        toggleButton.classList.remove('text-white');
        toggleButton.classList.add('text-black');
        toggleButton.setAttribute('name', 'moon');

    } else {
        // Switch to Dark Mode
        body.classList.remove('bg-[#f4f4f4]', 'text-black');
        menu.classList.remove('bg-[#ECECEC]')
        body.classList.add('bg-zinc-900', 'text-white');
        menu.classList.add('bg-zinc-800');
        toggleButton.classList.remove('text-black');
        toggleButton.classList.add('text-white');
        toggleButton.setAttribute('name', 'sunny');
    }
});

ScrollReveal().reveal('.headline', {
    beforeReveal: (el) => {
        el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    afterReset: (el) => {
        el.classList.remove('animate__animated', 'animate__fadeInUp');
    },
    reset: true,
    duration: 500,
});

ScrollReveal().reveal('.bar span', {
    beforeReveal: (el) => {
        if (el.classList.contains('animate-html')) {
            el.style.width = '90%'; // Trigger animation
        } else if (el.classList.contains('animate-css')) {
            el.style.width = '70%';
        } else if (el.classList.contains('animate-js')) {
            el.style.width = '40%';
        } else if (el.classList.contains('animate-tailwind')) {
            el.style.width = '30%';
        } else if (el.classList.contains('animate-laravel')) {
            el.style.width = '50%';
        } else if (el.classList.contains('animate-django')) {
            el.style.width = '20%';
        }
    },
    afterReset: (el) => {
        el.style.width = '0%'; // Reset animation if reset is enabled
    },
    reset: true, // Set to true for repeat animations
    duration: 500, // Duration of ScrollReveal reveal
});

var options = {
    strings: ['<span class="text-3xl md:text-5xl font-bold text-teal-500 my-7">Wai Yan Paing</span>', '<span class="text-3xl md:text-5xl font-bold my-7">Wai Yan Paing</span>'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing = new Typed('.name', options);