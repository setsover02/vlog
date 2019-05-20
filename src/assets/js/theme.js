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

  $(document).on(!$sunrise).on('click', '#Sunrise', function () {
    !$sunrise.addClass('-selected')
    $('body').removeClass('sunset')
    $('body').removeClass('dawn')
    !$dawn.removeClass('-selected')
    !$sunset.removeClass('-selected')
  })

  $(document).on(!$dawn).on('click', '#Dawn', function () {
    !$dawn.addClass('-selected')
    $('body').addClass('dawn')
    $('body').removeClass('sunset')
    !$sunrise.removeClass('-selected')
    !$sunset.removeClass('-selected')
  })

  $(document).on(!$sunset).on('click', '#Sunset', function () {
    !$sunset.addClass('-selected')
    $('body').addClass('sunset')
    $('body').removeClass('dawn')
    !$sunrise.removeClass('-selected')
    !$dawn.removeClass('-selected')
  })

})
