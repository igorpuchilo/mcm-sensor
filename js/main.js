$(document).ready(function () {
  function createSticker(element, topSpacing, zIndex, stickyOnMobile) {
    let stickerSpacing =
      $('.footer').outerHeight() + $('.copyright').outerHeight();

    if (
      element.length &&
      element.outerHeight() < $(window).outerHeight() - stickerSpacing
    ) {
      stickyOnMobile || $(window).width() > 768
        ? element.sticky({
            topSpacing: topSpacing,
            bottomSpacing: stickerSpacing + 60,
            zIndex: zIndex || 1,
          })
        : null;
    }
  }

  createSticker($('.category-sticker'), 90);
  createSticker($('.navbar'), 0, 100, true);

  $('.navbar').on('sticky-start', function () {
    $('.navbar').find($('.container')).addClass('container-fullwidth');
  });
  $('.navbar').on('sticky-end', function () {
    $('.navbar').find($('.container')).removeClass('container-fullwidth');
  });
});
