var swiper = new Swiper(".mySwiper", {
    slidesPerView:4,
    spaceBetween: 10,
    loop: true,
    autoplay: true, 
    slidesPerGroup: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });