// <!-- Initialize Swiper -->

var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    loop: false,
    paginationClickable: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        375: {
            slidesPerView: 1,
        }

    }
});


