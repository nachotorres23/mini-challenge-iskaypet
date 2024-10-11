// JavaScript (jQuery)
$(document).ready(() => {
  const mobileText = $('#card__logo-id').text();
  const desktopText = '232x110';

  const updateText = () => {
    if ($(window).width() > 768) {
      $('#card__logo-id').text(desktopText);
    } else {
      $('#card__logo-id').text(mobileText);
    }
  }

  updateText();

  $(window).on('resize', () => updateText())

  $('#card__button-id').on('click', function () {
    $(this).toggleClass('clicked')
  })
})
