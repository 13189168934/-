$(function() {
    // console.log(parseInt(getComputedStyle(document.body).width));
    // 由于是定位生成的css样式，所以无法获取100%父元素的宽度，所以通过样式获取
    const screenW = parseInt(getComputedStyle(document.body).width) + 'px'
        // console.log($('.nav_slidedown').width);      jq不能调用原生的方法，调用width需要style
    document.querySelector('.horseSlide').style.width = screenW;


    // 第一个轮播图插件
    function swiper() {
        var swiper = new Swiper('.first_slideshow .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.first_slideshow .swiper-pagination',
                clickable: true,
            }
        });
    }
    swiper();

    // 旋转木马

    var swiper = new Swiper('.horse .swiper-container', {
        autoplay: 3000,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: '.horse .swiper-pagination',
        paginationClickable: true,
        onInit: function(swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active"; //第一次打开不要动画
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
    // 红包的弹出
    $(".close").click(function() {
        // 点击close  activity盒子隐藏,opacity0
        $(this).parents(".activity").css("display", "none").css("opacity", "0");
    })

    setTimeout(function() {
        $(".activity").css("display", "block").css("opacity", "1");
    }, 3000);


    // 当页面滚动到哪里的时候，相应的类型会变

    $(window).scroll(function() {
        // console.log(scrollY);
        // $(document).scrollTop
        // console.log(scrollY, $('.newHouse').offset().top);

        if (scrollY >= 2159) {
            $('#leftBroadside').find($('a')).css('background-color', 'rgba(255, 255, 255)').parents($('#leftBroadside').find('.newHouseA').css('background-color', 'rgba(231, 208, 166)'));
        } else if (scrollY >= 1310 && scrollY <= 2159) {
            $('#leftBroadside').find($('a')).css('background-color', 'rgba(255, 255, 255)').parents($('#leftBroadside').find('.houseTypeA').css('background-color', 'rgba(231, 208, 166)'));
        } else if (scrollY >= 665 && scrollY <= 1310) {
            $('#leftBroadside').find($('a')).css('background-color', 'rgba(255, 255, 255)').parents($('#leftBroadside').find('.houseDesignA').css('background-color', 'rgba(231, 208, 166)'));
        } else {
            $('#leftBroadside').find($('a')).css('background-color', 'rgba(255, 255, 255)')
        }
        // console.log(scrollY, $('.box_bg').eq(2).offset().top);
        // console.log($('html').scrollTop(), $('.box_bg').eq(2).offset().top, $('.box_bg').eq(2));
    })

    // 点击哪个页面按钮就可以跳转哪

    // console.log($('.box_bg').eq(2).offset().top);

    $('.newHouseA').on('click', function() {
        $('html').animate({ "scrollTop": 2159 });
    })

    $('.houseTypeA').on('click', function() {
        $('html').animate({ "scrollTop": 1310 });
    })
    $('.houseDesignA').on('click', function() {
        $('html').animate({ "scrollTop": 665 });
    })
})