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
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-bars")) {
      $(".menu-btn").toggleClass("active");
      $(".side-bar").toggleClass("active");
    } else if (
      event.target.classList.contains("side-bar") ||
      event.target.classList.contains("search-btn")
    ) {
      return;
    } else if (!event.target.classList.contains("fa-bars")) {
      $(".menu-btn").removeClass("active");
      $(".side-bar").removeClass("active");
    }
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
