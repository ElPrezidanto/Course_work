let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav a');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})

/*
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
*/
