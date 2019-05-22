/* eslint-disable */
jQuery(function ($) {
  const $palette = $('#ThemePalette')
  // Open theme panel
  $(document).on(!$palette).on('click', '#ThemeMenu', function () {
    $(this).toggleClass('-show').next().fadeToggle(200)

    // Close theme panel
    $('body').on('click', function (e) {
      var $tgPoint = $(e.target)
      var $popCallBtn = $tgPoint.hasClass('-show')
      var $popArea = $tgPoint.hasClass('.dropdown-menu-content')
      if (!$popCallBtn && !$popArea) {
        $('#ThemeMenu').removeClass('-show').next().fadeOut(200)
      }
    })
  })

  const $sunrise = $('#Sunrise')
  const $dawn = $('#Dawn')
  const $sunset = $('#Sunset')
  const $midnight = $('#Midnight')

  $(document).on(!$sunrise).on('click', '#Sunrise', function () {
    !$sunrise.addClass('-selected')
    !$sunset.removeClass('-selected')
    !$dawn.removeClass('-selected')
    !$midnight.removeClass('-selected')
    $('body').addClass('sunrise')
    $('body').removeClass('sunset')
    $('body').removeClass('dawn')
    $('body').removeClass('midnight')
  })

  $(document).on(!$dawn).on('click', '#Dawn', function () {
    !$dawn.addClass('-selected')
    !$sunrise.removeClass('-selected')
    !$sunset.removeClass('-selected')
    !$midnight.removeClass('-selected')
    $('body').removeClass('sunrise')
    $('body').addClass('dawn')
    $('body').removeClass('sunset')
    $('body').removeClass('midnight')
  })

  $(document).on(!$sunset).on('click', '#Sunset', function () {
    !$sunset.addClass('-selected')
    !$sunrise.removeClass('-selected')
    !$dawn.removeClass('-selected')
    !$midnight.removeClass('-selected')
    $('body').addClass('sunset')
    $('body').removeClass('sunrise')
    $('body').removeClass('dawn')
    $('body').removeClass('midnight')
  })

  $(document).on(!$midnight).on('click', '#Midnight', function () {
    !$midnight.addClass('-selected')
    !$sunrise.removeClass('-selected')
    !$dawn.removeClass('-selected')
    !$sunset.removeClass('-selected')
    $('body').addClass('midnight')
    $('body').removeClass('sunrise')
    $('body').removeClass('dawn')
    $('body').removeClass('sunset')
  })

})
