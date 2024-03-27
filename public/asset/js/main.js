$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").toggleClass("show");
    });

    // Close the responsive menu when a nav link is clicked
    $(".navbar-nav .nav-link").on("click", function () {
      $(".navbar-collapse").removeClass("show");
    });
  });
