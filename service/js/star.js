$(() => {
    // 1.如何轮播序列帧  用css动画产生
    // 1.1 生成1000颗星星
    // 1.2 随机生成星星的定位和闪烁时间
    // 2. 添加鼠标事件
    // 2.1 捕捉到鼠标的移动位置 e.pageX e.pageY
    // 2.2 让星星慢慢靠近鼠标移动的位置
    let starSky = document.getElementById('star_sky');
    let starTimer = 0;
    let starNum = 30;

    // 每次生成星星的个数：随机
    function getStar() {

        for (let i = 0; i < starNum; i++) {
            // let width = height = Math.ceil(Math.random() * 2) + 5;   //生成不了，差距小bug多
            // let top = Math.ceil(Math.random() * $(starSky).height() - $('.star').height()) > 0 ? Math.ceil(Math.random() * $(starSky).height() - $('.star').height()) : 0; //这样就变成了两个随机数，另一个随机数得到的可能也小于0
            // let left = Math.ceil(Math.random() * $(starSky).width() - $('.star').width()) > 0 ? Math.ceil(Math.random() * $(starSky).width() - $('.star').width()) : 0;
            // 1.2 随机生成星星的定位和闪烁时间
            // 但是第一次没有星星生成，所以top和left会变成NaN,可以采用开关但太麻烦所以一开始先手动添加一个star
            // let top = Math.ceil(Math.random() * $('.center').position().top - $('.star').height());
            // top = Math.random() > 0.5 ? top : -top;
            // let left = Math.ceil(Math.random() * $('.center').position().left - $('.star').width());
            // left = Math.random() > 0.5 ? left : -left;
            let top = Math.ceil(Math.random() * 800);
            top = Math.random() > 0.5 ? top : -top;
            let left = Math.ceil(Math.random() * 800);
            left = Math.random() > 0.5 ? left : -left;
            // console.log($('.star').height());
            let rotateTime = Math.ceil(Math.random() * 600 + 60);
            let blinkTime = Math.random() + 1;
            let scale = Math.random() * 20 + 1;


            // 生成星星并放进天空
            let span = $('<span></span>');
            // let time = Math.ceil(Math.random() * 2) + 0.5;
            span.addClass('star');
            // console.log(span);
            // span.style['animation- duration'] = time + 's';
            // 让小星星转圈圈
            span.css({
                "transform": "scale(" + scale + ")",
                "transform-origin": -left + "px " + -top + "px",
                "animation": "star " + blinkTime + "s infinite steps(7), rotate " + rotateTime + "s infinite",
                left,
                top
            })
            $(".center").append(span);
        }
    }

    // 先生成10次星星
    /*      for (let i = 0; i < 10; i++) {
            starTimer = (i / 5) * 1000;
            setTimeout(getStar(), starTimer);
        } */
    // 这样就变成全在同一时间生成了

    // 不同时间生成星星
    for (let i = 0; i < 10; i++) {
        starTimer = i * 200;
        setTimeout(getStar, starTimer);
    }
    // console.log($('.star'));



    // 随机生成5颗流星
    function getMiteor() {
        // console.log($('#star_sky').width());
        let miteorNum = Math.random() * 5;
        for (let i = 0; i < miteorNum; i++) {
            // const left = Math.random * $('#star_sky').width();
            // const top = Math.random * $('#star_sky').height();
            const left = Math.random() * $('#star_sky').width();
            const top = Math.random() * $('#star_sky').height();
            const lastTop = top + Math.random() * 30 + 300;
            const lastLeft = left - Math.random() * 30 - 300;
            const miteor = $('<div></div>');
            const time = Math.ceil(Math.random() * 2000) + 1000;


            miteor.addClass('meteor').css({
                top,
                left
            });
            // console.log(miteor);
            $('#star_sky').append(miteor);
            // console.log($('#star_sky').find(miteor));

            miteor.slideDown().animate({
                top: lastTop,
                left: lastLeft,
                "border-width": "0 0 0 0;",
                opacity: 1
            }, time, function() {
                $(this).slideUp(function() {
                    $(this).remove();
                })
            })
        }
    }
    getMiteor();
    setInterval(getMiteor, 1000);
})