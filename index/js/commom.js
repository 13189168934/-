$(function() {

    /* 照片懒加载模块 */
    start(); // 一开始没有滚动，也需要触发一次 

    $(window).on('scroll', function() { // 滚动时，显示对应图片
        start()
    })

    function start() {
        // 当照片有了已经有了这个已加载的自定义属性则不添加
        $('img').not('[data-isLoaded]').each(function() {
            var $node = $(this)
            if (isShow($node)) {
                loadImg($node)
            }
        })
    }

    function isShow($node) { // 判断图片是否在视野中
        return $node.offset().top <= $(window).height() + $(window).scrollTop()
    }

    function loadImg($img) {
        $img.attr('src', $img.attr('data-src'));
        $img.attr('data-isLoaded', 1) // 区别图片是否被加载过，防止重新加载
    }

    /* 页首跳转模块 */
    $('#scroll_top').click(function() {
        $('html').animate({ "scrollTop": 0 }, 1000);
    })


    /* 报名列表出现 */
    const screenW = parseInt(getComputedStyle(document.body).width) + 'px';
    $('.flex_right_icon').click(function() {
        $('.subscribe').animate({
            left: 0
        }, 500);
        $(this).animate({
            left: screenW
        }, 500);
    })

    /* 关闭报名列表 */
    $('.bottom-close').click(function() {
        $('.subscribe').animate({
            left: screenW
        }, 500);
        $('.flex_right_icon').animate({
            left: -65
        }, 500);
    })

    $('#service').click(function() {
        var newWindow = window.open('../service/service.html', '_blank', 'top=20,left=300,width=812,height=640', true);
    })
})