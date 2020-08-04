$(function() {
    // console.log(1);
    // console.log($('#scroll_top'));
    document.querySelectorAll('.nav_slidedown')[0].style.width = parseInt(getComputedStyle(document.body).width) + 'px';
    document.querySelectorAll('.nav_slidedown')[1].style.width = parseInt(getComputedStyle(document.body).width) + 'px';
    $('#scroll_top').click(function() {
        // console.log($('#scroll_top'));
        // console.log(window.scrollY);
        // window.onscroll.animate({ 'window.scrollY': 0 });
        // $(window).scroll.animate({'$(document).scrollTop': 0 })
        // document.animate({ '$(document).scrollTop': 0 })
        // console.log(window.scrollY);
        // $(this).animate({ width: 0 })
        // $(window).animate({ scrollY: 0 }, 500)

        // 点击top向上滚动
        function animateSlow(ele, target, scale = 0.1, time = 10) {
            clearInterval(ele.timer);
            console.log(1);
            ele.timer = setInterval(function() {
                // 首先先获得需要移动的方向，然后获得在该方向上的位置
                // console.log(1);
                let current = $(document).scrollTop();
                let step = target - current;

                if (step > 0) {
                    step = Math.ceil((target - current) * scale);
                } else {
                    step = Math.floor((target - current) * scale);
                }
                $(document).scrollTop(current + step);
                if (current == target) {
                    clearInterval(ele.timer);
                }
            }, time);
        }
        animateSlow(document, 0);
    })

    // 报名列表出现
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