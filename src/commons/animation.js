/* eslint-disable */
jQuery(function($) {
  // Button Ripple effect Start
  $(document).on('mousedown', '[data-ripple]', function(e) {
    var $self = $(this)

    if ($self.is('.btn-disabled')) {
      return
    }
    if ($self.closest('[data-ripple]')) {
      e.stopPropagation()
    }

    var initPos = $self.css('position'),
      offs = $self.offset(),
      x = e.pageX - offs.left,
      y = e.pageY - offs.top,
      dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
      $ripple = $('<div/>', {
        class: 'ripple',
        appendTo: $self
      })

    if (!initPos || initPos === 'static') {
      $self.css({
        position: 'relative'
      })
    }

    $('<div/>', {
      class: 'rippleWave',
      css: {
        background: $self.data('ripple'),
        width: dia,
        height: dia,
        left: x - (dia / 2),
        top: y - (dia / 2)
      },
      appendTo: $ripple,
      one: {
        animationend: function() {
          $ripple.remove()
        }
      }
    })
  })
  // Button Ripple effect End
  const $panel = $('.dropdown')

  $(document).on(!$panel).on('click', '.dropdown', function() {
    $(this).toggleClass('-show').next().fadeToggle(200)

    // dropdown menu close
    $('body').on('click', function(e) {
      var $tgPoint = $(e.target)
      var $popCallBtn = $tgPoint.hasClass('-show')
      var $popArea = $tgPoint.hasClass('.dropdown-content')

      if (!$popCallBtn && !$popArea) {
        $('.dropdown-menu').removeClass('-show').next().fadeOut(200)
      }
      // alert('outside')
    })
  })
})
