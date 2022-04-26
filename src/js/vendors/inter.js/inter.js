import { preloadFonts } from './utils.min.js';
import { Intro } from './intro.min.js';

const intro = new Intro(document.querySelector('.circles'));

// Preload images and fonts
Promise.all([preloadFonts('kxo3pgz')]).then(() => {
    // remove loader (loading class)
    document.body.classList.remove('loading');
    // start intro
    intro.start();
});


