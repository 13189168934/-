$(function() {

    // 点击向上按钮可以直接跳到页首
    $('#scroll_top').click(function() {
        $('html').animate({ "scrollTop": 0 }, 1000);
    })


    // 报名列表出现
    const screenW = parseInt(getComputedStyle(document.body).width) + 'px';
    $('.flex_right_icon').click(function() {
        $('.subscribe').animate({
            left: 0
        }, 500);
        $(this).animate({
            left: screenW
        }, 500);
    })

    $('.bottom-close').click(function() {
        $('.subscribe').animate({
            left: screenW
        }, 500);
        $('.flex_right_icon').animate({
            left: -65
        }, 500);
    })
})