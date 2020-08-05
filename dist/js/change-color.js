function logoSwitch () {
    $('.fixed').each(function() {
        $(this).css('top',
        $('.absolute').offset().top -  $(this).closest('.row').offset().top
        );
    });
};

$(document).scroll(function() {logoSwitch();}); 

logoSwitch();