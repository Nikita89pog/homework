
// Слайдер-шапка========================

const swiper = new Swiper('.cap__slider', {

    cssMode: true,

    pagination: {
        el: '.swiper-pagination',
    },

    mousewheel: true,
    keyboard: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    

});