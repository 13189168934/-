$(function () {
    $(".login-num>.phone").click(function () {
        $(".login-one").css("display", "none");
        $(".login-two").css("display", "block");
        $(this).css("color", "#e6bf7b");
        $(".login-num>.num").css("color", "#666666");
    })
    $(".login-num>.phone").mouseover(function () {
        let color1 = $(this).css("color");
        if (color1 == "rgb(230, 191, 123)") {
            $(this).css("color", color1);
        } else {
            $(this).css("color", "#fb811a");
        }
    })
    $(".login-num>.phone").mouseout(function (){
        let color = $(this).css("color");
        if (color == "rgb(230, 191, 123)"){
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
        if (color == "rgb(230, 191, 123)"){
            $(this).css("color", color);
        } else {
            $(this).css("color", "#666666");
        }
    })
    $(".QRcode").click(function () {
        $(".scanWX").css("display", "block");
        $(".verify").css("display", "none");
    })
    $(".qie-huan").click(function () {
        $(".verify").css("display", "block");
        $(".scanWX").css("display", "none");
    })
})