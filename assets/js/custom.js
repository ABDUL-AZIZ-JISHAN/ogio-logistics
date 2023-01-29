let menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".topbar").classList.add("active");
})

document.querySelector("#menu-cancel").addEventListener("click", () => {
    document.querySelector(".topbar").classList.remove("active");
})

$(document).ready(function () {
    // ready function start

    // counter up js
    $('.counter').counterUp({
        time: 800
    });
    // swipper js
    new Swiper(".swiper-container", {
        spaceBetween: 80,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        // loopAdditionalSlides: 10,
        speed: 1000,
        center: true,
        pauseOnMouseEnter: true,
        autoplay: {
            delay: 3500,
        },
        // breakpoints: {
        //     100: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         // spaceBetween: 40,
        //     },
        // }
    });
    new Swiper(".swiper-rating", {
        spaceBetween: 500,
        slidesPerView: 1,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        // loopAdditionalSlides: 10,
        speed: 1000,
        center: true,
        pauseOnMouseEnter: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 3500,
        // },
        // breakpoints: {
        //     100: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         // spaceBetween: 40,
        //     },
        // }
    });
})