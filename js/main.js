$('div>ul>li>a').click(function(){
    if($(window).width()<768){
        $('#navbar-items').toggle();
    }
});
$('#toggle-navbar').click(function(){
    $('#navbar-items').toggle();
});
$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).load(function(){
    handleTopNavAnimation();
});
function handleTopNavAnimation() {
    var top=$(window).scrollTop();

    if(top>10){
        $('#site-nav').addClass('navbar-solid');
    }
    else{
        $('#site-nav').removeClass('navbar-solid');
    }
}
smoothScroll.init();
