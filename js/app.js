function navigate (container) {
    $('html, body').animate({scrollTop: $(container).offset().top - 50}, 2000);
}