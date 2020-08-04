$(function () {
    $(".register button").click(function () {
         $(".register").css("display", "none");
         $(".finish-Rge").css("display", "block")
        // if ($(".user-register").val() == "") {
        //     $(".user-register-p").css("color", "#ec5fa0")
        //     $(".user-register-p").css("margin-left", "30px")
        // } else if ($(".pass-register-p").val() == "") {
        //     $(".pass-register-p").css("color", "#ec5fa0")
        //     $(".pass-register-p").css("margin-left", "114px")
        // } else {
        //     $(".register").css("display", "none");
        //     $(".finish-Rge").css("display", "block")
        // }
    })
    $(".register-finish").click(function () {
        window.location.assign("file:///D:/%E6%80%BB%E7%9A%84/jquery/%E7%99%BB%E5%BD%95%E9%A1%B5/%E7%99%BB%E5%BD%95%E9%A1%B5.html")
    })
    $(".finish-user").click(function(){
        $(".finish-check").toggle()
    })
})