$(() => {
  // Start Loader
  $(this).on("load", function () {
    $(".loader-container").addClass("loading");
  });
  // End Loader
  // Start Sticky Header
  $(this).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(`header`).addClass(`header-sticky`);
    } else {
      $(`header`).removeClass(`header-sticky`);
    }
  });
  // End Sticky Header
  //   Start Menu
  $(".menu-btn").on("click", function (event) {
    $(".menu-btn").toggleClass("active");
    $(".side-bar").toggleClass("active");
  });
  //   End Menu
  // Start Question
  $(`.question`).click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass(`active`);
  });
  // End Question
  //   Start Dropdown Menu
  $(`.dropdown`).on(`mouseover`, function () {
    if ($(`.dropdown`)) {
      $(`.dropdown .profile + .dropdown-menu`).addClass(
        `d-flex justify-content-center align-content-end flex-column text-end show`
      );
    } else return;
  });
  $(`.dropdown`).on(`mouseleave`, function () {
    if ($(`.dropdown`)) {
      $(`.dropdown .profile + .dropdown-menu`).removeClass(
        `d-flex justify-content-center align-content-end flex-column text-end show`
      );
    }
  });
});
