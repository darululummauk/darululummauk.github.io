(function ($) {
  $(document).ready(function () {
    $("body").addClass("js");
    var $menu = $("#menu"),
      $menulink = $(".menu-link");

    $menulink.click(function () {
      $menulink.toggleClass("active");
      $menu.toggleClass("active");
      return false;
    });
  });

  videoPopup();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      750: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "fade",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $("div.features-post").hover(
    function () {
      $(this).find("div.content-hide").slideToggle("medium");
    },
    function () {
      $(this).find("div.content-hide").slideToggle("medium");
    }
  );

  $("#tabs").tabs();
})(jQuery);

// accordion js

// script.js

// Menangkap semua elemen accordion item
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const accImg = item.querySelector(".accordion-image");

  accImg.addEventListener("click", () => {
    // Toggle class 'active' untuk memperluas atau menutup konten
    item.classList.toggle("active");

    // Menutup semua item lain jika hanya ingin satu item yang terbuka
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

accordionItems.forEach((item) => {
  const acc = item.querySelector(".accordion-header");

  acc.addEventListener("click", () => {
    // Toggle class 'active' untuk memperluas atau menutup konten
    item.classList.toggle("active");

    // Menutup semua item lain jika hanya ingin satu item yang terbuka
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});
