$(document).ready(function () {
  $(window).scroll(function () {
    // console.log(this.scrollY);
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // menu navbarscript
  $(".menu-btn").click(function () {
    $(".navbar.menu").toggleClass("active");
  });
});
