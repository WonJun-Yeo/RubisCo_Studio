$('.filter-bt-all').on('click', function() {
    $('.p-list').css('display', 'block');
    $('.p-list').css('margin-right', '12px');
    $('.p-list:nth-child(4n)').css('margin-right', '0');
})

$('.filter-bt-domestic').on('click', function() {
    $('.p-list').css('display', 'block');
    $('.foreign').css('display', 'none');
    $('.p-list').css('margin-right', '12px');
    for (let i = 0; i < $('.domestic').length; i++) {
        if (i % 4 == 0) {
            $('.domestic').eq(i-1).css('margin-right', '0');
        }
    }
})

$('.filter-bt-foreign').on('click', function() {
    $('.p-list').css('display', 'block');
    $('.domestic').css('display', 'none');
    $('.p-list').css('margin-right', '12px');
    for (let i = 0; i < $('.foreign').length; i++) {
        if (i % 4 == 0) {
            $('.foreign').eq(i-1).css('margin-right', '0');
        }
    }
})

