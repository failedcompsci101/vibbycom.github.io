
var tabsInterval = undefined;
var tabs; //grab tabs
var contents; //grab contents

var currentIndex = 0;
var totalNumberOfFeatureTabs = 3;


//Tabs on landing
$(document).ready(function () {

  tabs = $('.tabs-titles li'); //grab tabs
  contents = $('.tabs-contents li'); //grab contents

  // Start producthunt check for ?ref=producthunt and show him special message
  $('.producthunts').hide();
  $('.roughdrafts').hide();
  var query = (/producthunt/).test(window.location.href);
  var query1 = (/roughdrafts/).test(window.location.href);
  if (query) {
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 220) {
        $('.main-nav').css({'position':'fixed', 'top':'0px'}); //if 220px is scrolled and user is from producthunt site
      } else {
        $('.main-nav').css({'position':'absolute', 'top':'220px'});
      }
    });
    $('.producthunts').show();
    $('.main-nav').css({'top':'220px','position':'absolute','transition':'200ms background ease-in'});
  } else {
    $('.producthunts').hide();
  }
  if (query1) {
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 155) {
        $('.main-nav').css({'position':'fixed', 'top':'0px'}); //if 155px is scrolled and user is from producthunt site
      } else {
        $('.main-nav').css({'position':'absolute', 'top':'155px'});
      }
    });
    $('.roughdrafts').show();
    $('.main-nav').css({'top':'155px','position':'absolute','transition':'200ms background ease-in'});
  } else {
    $('.roughdrafts').hide();
  }
  // End producthunt banner

  $('.accordion-tabs').each(function() {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

  tabsInterval = setInterval(function(){
    currentIndex ++;
    currentIndex %= totalNumberOfFeatureTabs;
    switchTabContent(currentIndex);
  }, 5000);

  function switchTabContent(idx) {
    contents.hide(); //hide all contents
    tabs.removeClass('current'); //remove 'current' classes
    $(contents[idx]).show(); //show tab content that matches tab title index
    $(tabs[idx]).addClass('current'); //add current class on clicked tab title
  }

  tabs.bind('click',function(){
    clearInterval(tabsInterval);
    switchTabContent($(this).index());
  });

});

