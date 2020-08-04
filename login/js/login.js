$(function () {
    // 账号登录
    $(".login-num>.phone").click(function () {
        $(".login-one").css("display", "none");
        $(".login-two").css("display", "block");
        $(this).css("color", "#e6bf7b");
        $(".login-num>.num").css("color", "#666666");
        return false
    })
    $(".login-num>.phone").mouseover(function () {
        let color1 = $(this).css("color");
        if (color1 == "rgb(230, 191, 123)") {
            $(this).css("color", color1);
        } else {
            $(this).css("color", "#fb811a");
        }
    })
    $(".login-num>.phone").mouseout(function () {
        let color = $(this).css("color");
        if (color == "rgb(230, 191, 123)") {
            $(this).css("color", color);
        } else {
            $(this).css("color", "#666666");
        }
    })
    $(".login-num>.num").click(function () {
        $(".login-one").css("display", "block");
        $(".login-two").css("display", "none");
        $(this).css("color", "#e6bf7b");
        $(".login-num>.phone").css("color", "#666666");
        return false
    })
    $(".login-num>.num").mouseover(function () {
        let color = $(this).css("color");
        if (color == "rgb(230, 191, 123)") {
            $(this).css("color", color);
        } else {
            $(this).css("color", "#fb811a");
        }
    })
    $(".login-num>.num").mouseout(function () {
        let color = $(this).css("color");
        if (color == "rgb(230, 191, 123)") {
            $(this).css("color", color);
        } else {
            $(this).css("color", "#666666");
        }
    })
    $(".login-btn").click(function(){
        if ($(".Upinput-user").val() == ""){
            alert("账号不能为空");
        } else if ($(".Downinput").val() == ""){
            alert("密码不能为空")
        }
    })
    $(".login-pass").click(function () {
        $(".login-pass p").toggle();
    });
    // 手机快捷登录
    // $(".phone-yan button").click(function () {
    //     if ($(".phone-yan .jiaoYanMa").val() === "") {
    //         alert("请输入正确的手机号")
    //     }
    // })
    $(".logintwo-btn").click(function () {
        if ($(".login-phone input").val() == "") {
            alert("手机号不能为空")
        } else if ($(".jiaoYanMa").val() ==""){
            alert("校验码不能为空")
        }
    })
    //二维码登录
    $(".QRcode").click(function () {
        $(".scanWX").css("display", "block");
        $(".verify").css("display", "none");
    })
    $(".qie-huan").click(function () {
        $(".verify").css("display", "block");
        $(".scanWX").css("display", "none");
    })
    // 修改密码
    $(".find-passWord").click(function () {
        $(".verify").animate({ "right": 326 }, 200)
        $(".find-pass").animate({ "right": 0 }, 200)
        return false
    })
    $(".return-log").click(function () {
        $(".verify").animate({ "right": 0 }, 200)
        $(".find-pass").animate({ "right": -326 }, 200)
        return false
    })
    $(".newPass-up").focus(function () {
        $(".new-Password p").css("display", "block");
    })
    $(".newPass-up").blur(function () {
        $(".new-Password p").css("display", "none");
    })
    $(".newPass-down").blur(function () {
        let upValue = $(".newPass-up")
        // console.log(upValue);
        let downValue = $(".newPass-down")
        // console.log(downValue);
        if (upValue.val() != downValue.val()) {
            $(".new-Password div").css("display", "block");
        } else {
            $(".new-Password div").css("display", "none");
        }
    })
    $(".newPass-foot").click(function () {
        if ($(".findP-phone").val() === "") {
            alert("请输入正确的手机号")
        }
    })
})