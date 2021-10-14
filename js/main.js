$(function () {
  $(".hamburger, .menu__list-link").on("click", function () {
    $(".hamburger").toggleClass("active");
    $(".menu").toggleClass("active");
  });

  $(".menu").on("click", function (e) {
    e.preventDefault();
    const id = $(e.target).attr("href");
    const top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  // Tabs
  $(".tab").on("click", function () {
    $(this)
      .addClass("tab--active")
      .siblings()
      .removeClass("tab--active")
      .closest(".tabs-wrapper")
      .find(".tab-content")
      .removeClass("tab-content--active")
      .eq($(this).index())
      .addClass("tab-content--active");
  });

  //Accordion

  $(".faq__accordion-content").hide();
  $(".faq__accordion-title").on("click", function () {
    if ($(this).hasClass("faq__accordion-title--active")) {
      $(".faq__accordion-title")
        .removeClass("faq__accordion-title--active")
        .next()
        .slideUp();
    } else {
      $(".faq__accordion-title")
        .removeClass("faq__accordion-title--active")
        .next()
        .slideUp();
      $(this).addClass("faq__accordion-title--active").next().slideDown();
    }
  });

  // Slider hit

  const swiper = new Swiper(".swiper-hit", {
    loop: true,

    navigation: {
      nextEl: ".swiper-hit-next",
      prevEl: ".swiper-hit-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 25,
      },
      544: {
        slidesPerView: 1.75,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 22,
      },
    },
  });
});
