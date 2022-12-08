$(() => {
  // Start Loader
  $(window).on(`load`, function () {
    $(`.loader-container`).addClass(`loading`);
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
  //   Start Side Bar
  $(document).on(`click`, function (event) {
    if ($(event.target).hasClass(`fa-bars`)) {
      $(`.menu-btn`).toggleClass(`active`);
      $(`.side-bar`).toggleClass(`active`);
    } else if ($(event.target).hasClass(`drop`)) {
      return;
    } else if (!$(event.target).hasClass(`drop`)) {
      $(`.menu-btn`).removeClass(`active`);
      $(`.side-bar`).removeClass(`active`);
    }
  });
  //   End Side Bar
  // Start Dropdown Menu In Sidebar
  $(`.dropdown-menu-sidebar`).on(`click`, function () {
    $(`li.dropdown-menu-sidebar`).next().slideToggle(200);
    $(`li.dropdown-menu-sidebar .fa-angle-left`).toggleClass(`active`);
  });
  $(`.dropdown-menu-follow`).on(`click`, function () {
    $(`li.dropdown-menu-follow`).next().slideToggle(200);
    $(`li.dropdown-menu-follow .fa-angle-left`).toggleClass(`active`);
  });
  // End Dropdown Menu In Sidebar
  // Start Question
  $(`.question`).click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass(`active`);
  });
  // End Question
  // Start Create Account
  $(`.create-account-form #term`).on("click", function () {
    if ($(`.create-account-form #term[type="checkbox"]`).attr(`checked`)) {
      $(`.create-account-form #term[type="checkbox"]`).removeAttr(`checked`);
      $(`.create-account-form #term[type="checkbox"]`).removeClass(`checked`);
    } else {
      $(`.create-account-form #term[type="checkbox"]`).attr(`checked`, true);
      $(`.create-account-form #term[type="checkbox"]`).addClass(`checked`);
    }
  });
  // End Create Account
  // Start Dark Mode
  const darkMode = $(`.darkmode-toggle`);
  $(window).on(`load`, function () {
    if (localStorage.getItem(`theme`) === `dark`) {
      darkMode.addClass(localStorage.getItem(`theme`));
      darkMode.removeClass(`light`);
      darkMode.attr(`checked`, true);
    } else {
      darkMode.addClass(localStorage.getItem(`theme`));
      darkMode.removeClass(`dark`);
      darkMode.removeAttr(`checked`);
    }
  });
  $(`.darkmode-label`).on(`click`, function () {
    var isChecked = darkMode.is(`:checked`);
    localStorage.setItem(`theme`, `light`);
    darkMode.addClass(localStorage.getItem(`theme`));
    darkMode.removeClass(`dark`);
    if (!isChecked == true) {
      localStorage.setItem(`theme`, `dark`);
      darkMode.addClass(localStorage.getItem(`theme`));
      darkMode.removeClass(`light`);
    }
  });
  // End Dark Mode
});
