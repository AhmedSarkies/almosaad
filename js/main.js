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
    } else if (event.target.classList.contains("drop")) {
      return;
    } else if (!event.target.classList.contains("drop")) {
      $(".menu-btn").removeClass("active");
      $(".side-bar").removeClass("active");
    }
  });
  //   End Menu
  // Start Dropdown Menu In Sidebar
  $(".dropdown-menu-sidebar").on("click", function () {
    $("li.dropdown-menu-sidebar").next().slideToggle(200);
    $("li.dropdown-menu-sidebar .fa-angle-left").toggleClass("active");
  });
  $(".dropdown-menu-follow").on("click", function () {
    $("li.dropdown-menu-follow").next().slideToggle(200);
    $("li.dropdown-menu-follow .fa-angle-left").toggleClass("active");
  });
  // End Dropdown Menu In Sidebar
  // Start Question
  $(`.question`).click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass(`active`);
  });
  // End Question
});
