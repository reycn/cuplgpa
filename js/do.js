var main = function() {
  $('.nav-menu').click(function() {
    $('.nav-bar').css('position', 'relative');
    $('.cards').css('margin-top', '10px');
    $('.menu').animate({
      left: "0px"
    }, 100);

    $('body').animate({
      left: "200px"
    }, 100);
    document.body.style.overflow = 'hidden';
  });


  $('.menu-close').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 100);

    $('body').animate({
      left: "0px"
    }, 100);
    $('.nav-bar').css('position', 'fixed');
    $('.cards').css('margin-top', '65px');
    document.body.style.overflow = 'visible';
  });


  $('.menu-close-tr').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 100);

    $('body').animate({
      left: "0px"
    }, 100);
    $('.nav-bar').css('position', 'fixed');
    $('.cards').css('margin-top', '65px');
    document.body.style.overflow = 'visible';
  });


  $('.nav-title').click(function() {
    window.location.href = "index.html";
    $('.nav-bar').css('position', 'fixed');
    $('.cards').css('margin-top', '65px');
    document.body.style.overflow = 'visible';
  });


  $('.nav-add').click(function() {
    document.getElementById('.add-content').style.display = "inline";
    alert(document.getElementById('.add-content').style.text());
  });
}
$(document).ready(main);