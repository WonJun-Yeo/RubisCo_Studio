var arrow = 1;


$('.header-arrow').on('click', function() {
    if (arrow == 1) {
        $('.header-list').css('transform', 'translateX(0)');
        $('.header-arrow').css('transform', 'rotate(180deg)');
        arrow = 2;
    } else if (arrow == 2) {
        $('.header-list').css('transform', 'translateX(90%)');
        $('.header-arrow').css('transform', 'rotate(0)');
        arrow = 1;
    }
})


