$(function() {
    // console.log(parseInt(getComputedStyle(document.body).width));
    // 由于是定位生成的css样式，所以无法获取100%父元素的宽度，所以通过样式获取
    document.querySelectorAll('.nav_slidedown')[0].style.width = parseInt(getComputedStyle(document.body).width) + 'px';
    document.querySelectorAll('.nav_slidedown')[1].style.width = parseInt(getComputedStyle(document.body).width) + 'px';
    // console.log($('.nav_slidedown').width);      jq不能调用原生的方法，调用width需要style

    // 第一个轮播图插件
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //tv在jq22


    // 旋转木马
    // var mySwiper = new Swiper('.swiper-container', {
    //     slidesPerView: 3,
    //     loop: true,
    //     //Enable 3D Flow
    //     tdFlow: {
    //         rotate: 30,
    //         stretch: 10,
    //         depth: 150,
    //         modifier: 1,
    //         shadows: true
    //     }
    // })

    // 红包的弹出js
    $(".close").click(function() {
        // 点击close  activity盒子隐藏,opacity0
        $(this).parents(".activity").css("display", "none").css("opacity", "0");
    })

    setTimeout(function() {
        $(".activity").css("display", "block").css("opacity", "1");
    }, 3000);
})