$(document).ready(function () {
  $(".slider1").owlCarousel({
    items: 1,
    nav: true,
    navText: ["", ""],
    dots: false
  });
});

$(document).ready(function () {
  $(".slider2").owlCarousel({
    items: 4,
    nav: true,
    navText: ["", ""],
    dots: false,
    margin: 25,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      330: {
        items: 2
      },
      950: {
        items: 3,
      },
      1250: {
        items: 4,
      }
    }
  });
});

$(document).ready(function () {
  $(".slider3").owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    navText: ["", ""],
    dots: false,
    margin: 25,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      768: {
        items: 4,
      }
    }
  });
});

$(document).ready(function () {
  $(".slider4").owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    navText: ["", ""],
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 5
      }
    }
  });
});