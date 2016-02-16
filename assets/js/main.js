
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll < 70) {
    $(".main-nav").removeClass("scroll");
  }
  if (scroll >= 70) {
    $(".main-nav").addClass("scroll");
  }
  if (scroll >= 400) {
    $(".main-nav").removeClass("translate-right");
  }
  if (scroll < 400) {
    $(".main-nav").addClass("translate-right");
  }
});

//Tabs on landing
$(document).ready(function () {
  //check for ?ref=producthunt and show him special message
  $('.productHunts').hide();
  var query = (/product/).test(window.location.href);
  if (query) {
    console.log('here');
    $('.productHunts').show();
    $('.regularHeadline').hide();
  } else {
    $('.productHunts').hide();
    $('.regularHeadline').show();
  }
  //change call to action link on small screens
  if ($(window).width() < 730) {
    $(".cta__primary--big, .cta__primary--sm").attr("href", "https://www.vibby.com/explore/");
  }
});

//mobile side menu
function addShowRightMenu(elem) {
  elem.classList.toggle('menu-icon--active');
  var mainNav = document.querySelector('.navs');
  mainNav.classList.toggle('mobile-menu');
}
