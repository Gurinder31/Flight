$(".custom-dropdown .selected").on('click', function() {
    $(".custom-dropdown .drop-content ul").slideToggle();
});

$(".custom-dropdown .drop-content ul li span").on('click', function() {
    $(".custom-dropdown .selected  span").html($(this).html());
    $(".custom-dropdown .drop-content ul").slideUp();
});

// 

$(".custom-dropdown1 .selected").on('click', function() {
    $(".custom-dropdown1 .drop-content ul").slideToggle();
});

$(".custom-dropdown1 .drop-content ul li span").on('click', function() {
    $(".custom-dropdown1 .selected  span").html($(this).html());
    $(".custom-dropdown1 .drop-content ul").slideUp();
});