
$('#filter').change(function(){
    if($('#filter option:selected').val() == 'notice') {
        $('.notice').css('display', 'table-row');
        $('.event').css('display', 'table-row')
        $('.event').css('display', 'none');
    } else if ($('#filter option:selected').val() == 'event') {
        $('.notice').css('display', 'table-row');
        $('.event').css('display', 'table-row')
        $('.notice').css('display', 'none');
    } else {
        $('.notice').css('display', 'table-row');
        $('.event').css('display', 'table-row')
    }
})
