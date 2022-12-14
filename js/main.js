// Start Loader & Dark Mode
const darkMode = $(`.darkmode-toggle`);
$(window).on(`load`, function () {
  // Start Loader
  $(`.loader-container`).addClass(`loading`);
  // End Loader
  // Start Dark Mode
  if (
    localStorage.getItem(`theme`) === `dark` &&
    localStorage.getItem(`check`) === `true`
  ) {
    darkMode.attr(`checked`, true);
    darkMode.removeClass(`light`);
    darkMode.addClass(localStorage.getItem(`theme`));
  } else {
    darkMode.removeAttr(`checked`);
    darkMode.removeClass(`dark`);
    darkMode.addClass(localStorage.getItem(`theme`));
  }
});
$(`.darkmode-label`).on(`click`, function () {
  localStorage.setItem(`check`, `true`);
  localStorage.setItem(`theme`, `dark`);
  darkMode.removeClass(`light`);
  darkMode.addClass(localStorage.getItem(`theme`));
  if (darkMode.prop(`checked`) === true) {
    localStorage.setItem(`check`, `false`);
    localStorage.setItem(`theme`, `light`);
    darkMode.removeClass(`dark`);
    darkMode.addClass(localStorage.getItem(`theme`));
  }
});
// End Dark Mode
// End Loader & Dark Mode

$(() => {
  `use strict`;
  // Start Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(`header`).addClass(`header-sticky`);
    } else {
      $(`header`).removeClass(`header-sticky`);
    }
  });
  // End Sticky Header
  //   Start Side Bar
  $(window).on(`click`, function (event) {
    if ($(event.target).hasClass(`fa-bars`)) {
      $(`.menu-btn`).toggleClass(`active`);
      $(`.side-bar`).toggleClass(`active`);
    } else if (
      $(event.target).hasClass(`drop`) ||
      $(event.target).hasClass(`sun`) ||
      $(event.target).hasClass(`moon`)
    ) {
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
  const checkTerm = $(`.create-account-form #term[type='checkbox']`);
  $(`.create-account-form #term`).on(`click`, function () {
    if (checkTerm.attr(`checked`)) {
      checkTerm.removeAttr(`checked`);
      checkTerm.removeClass(`checked`);
    } else {
      checkTerm.attr(`checked`, true);
      checkTerm.addClass(`checked`);
    }
  });
  // End Create Account
  // Start Side Filter
  $(`.filter-btn`).on(`click`, function () {
    $(`.filter`).addClass(`active`);
  });
  $(`.back`).on(`click`, function () {
    $(`.filter`).removeClass(`active`);
  });
  // End Side Filter
  // Start Add Work
  $(`.work-warning-btn`).on(`click`, function () {
    $(`.popup-overlay`).addClass(`active`);
    $(`.container-video`).addClass(`active`);
    $(`.container-video iframe`).attr({
      src: `https://www.youtube.com/embed/YMzSi5ugXUE`,
      title: `صلاة الفجر |الشيخ عبد الرشيد صوفي | سورة الحديد برواية السوسي عن أبي عمرو HD`,
      frameborder: `0`,
      allow: `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,
      allowfullscreen: true,
    });
  });
  $(`.popup-overlay`).on(`click`, function () {
    $(`.popup-overlay`).removeClass(`active`);
    $(`.container-video`).removeClass(`active`);
    $(`.container-video iframe`).removeAttr(
      `src title frameborder allow allowfullscreen`
    );
  });
  // End Add Work
});
