window.addEventListener("load", function () {
    function generateCard(name, imgSrc, description, price) {
        const swiperWrapper = document.getElementById("about-swiper-wrapper");
        const article = document.createElement("article");
        article.classList.add("card__article", "swiper-slide");
        article.innerHTML = `
        <article class="card__article swiper-slide">
            <div class="card__image">
                <img src="${imgSrc}" alt="image" class="card__img">
                <div class="card__shadow"></div>
            </div>
            <div class="card__data">
                <h3 class="card__name">${name}</h3>
                <p class="card__description">${description}</p>
                <div class="price"><p>${price}</p></div>
                <a href="#" class="card__button">View More</a>
                <a href="#" class="card__button"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </article>
    `;
        swiperWrapper.appendChild(article);
    }

    generateCard("Intel Core i9", "../img/Intel.png", "Мощный процессор Intel Core i7 предоставляет выдающуюся производительность, обеспечивая плавный запуск системы.", "19 990₽");
    generateCard("Asus Rog Strix", "../img/MB.png", "Надежная материнская плата Asus Rog Strix обеспечивает стабильную эффективную работу вашей системы.", "27 990₽");
    generateCard("RTX 3090", "../img/GC.png", "RTX 3090 от NVidia предоставляет выдающуюся графику и поддерживает плавный запуск современных игр с высоким разрешением.", "95 990₽");
    generateCard("Be Quiet", "../img/BQ.png", "Надежный блок питания Be Quiet обеспечивает стабильное и эффективное энергопитание для всех комплектующих вашего компьютера.", "12 990₽");
    generateCard("DeepCool", "../img/DC.png", "DeepCool AG400 эффективно снижает температуру комплектующих, обеспечивая оптимальные условия для их работы и долговечности.", "4 290₽");
});

/*document.addEventListener('DOMContentLoaded', function() {
    let marker_about = document.querySelector('#marker');
    let item_about = document.querySelectorAll('nav a');

    function indicator(e) {
        marker_about.style.left = e.offsetLeft + 'px';
        marker_about.style.width = e.offsetWidth + 'px';
    }

    item_about.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
        });
    });

    // Установите начальное положение для "About" после загрузки страницы
    let aboutLink = document.getElementById('about-link');
    if (aboutLink) {
        indicator(aboutLink);
    }
});*/
/*window.onload = function() {
    let swiperCardsAbout = new Swiper(".card__content", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
        },
    });
}*/
