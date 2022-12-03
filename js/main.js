$(() => {
  // Start Fixed Header
  $(this).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(`header`).addClass(`header-fixed`);
    } else {
      $(`header`).removeClass(`header-fixed`);
    }
  });
  // End Fixed Header
  //   Start Menu
  $(".menu-btn").on("click", function () {
    $(".side-bar").toggleClass("active");
    $(".menu-btn").toggleClass("active");
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
