$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 700);
  });
});

$(document).ready(function () {
  let e = 0;

  function n(e) {
    e > 0
      ? $(".header").addClass("active")
      : $(".header").removeClass("active");
  }

  n(window.pageYOffset),
    $(".burger").on("click", function () {
      $(".burger,.header__nav-burger").toggleClass("active"),
        $("body").toggleClass("lock");
    }),
    function a(e) {
      $(".burger,.header__nav-burger").removeClass("active"),
        $("body").removeClass("lock");
      let n = Math.ceil($("." + e).offset().top) - 50;
      $("html, body").animate(
        {
          scrollTop: n,
        },
        500
      );
    };

  t(window.innerWidth),
    window.addEventListener("resize", function () {
      let e = window.innerWidth;
      t(e),
        e > 700 ? $("body").removeClass("lock") : $("body").addClass("lock");
    }),
    $(".header__logo").on("click", function () {
      a("page");
    }),
    $(".nav-link-about").on("click", function () {
      a("about");
    }),
    $(".nav-link-pets").on("click", function () {
      a("pets");
    }),
    $(".nav-link-helper").on("click", function () {
      a("help");
    }),
    $(".nav-link-contacts").on("click", function () {
      a("footer");
    });
});
