$(document).ready(function () {
    var changebg = $(".piimg-wp")
    for (let i = 0; i < changebg.length; i++) {
        if (i % 2 == 1) {
            $(changebg[i]).addClass("bg-while")
        } else {
            $(changebg[i]).addClass("bg-pink")
        }
    }
    $(window).resize(function () {
        var w = $(window).width();
        if (w < 768) {
            var x = 0;
            $(".plci-cap").click(function () {
                if (x === 0) {
                    $(this).parent().siblings(".pplc-item").children(".plci-content").removeClass("show");
                    $(this).siblings(".plci-content").addClass("show");
                    x = 1;
                } else {
                    $(this).parent().siblings(".pplc-item").children(".plci-content").removeClass("show");
                    $(this).siblings(".plci-content").removeClass("show");
                    x = 0
                }
            });
        }
        else {
            $(".plci-content").unbind();
        }
    });
    var w = $(window).width();
    if (w < 768) {
        var x = 0;
        $(".plci-cap").click(function () {
            if (x === 0) {
                $(this).parent().siblings(".pplc-item").children(".plci-content").removeClass("show");
                $(this).siblings(".plci-content").addClass("show");
                x = 1;
            } else {
                $(this).parent().siblings(".pplc-item").children(".plci-content").removeClass("show");
                $(this).siblings(".plci-content").removeClass("show");
                x = 0
            }
        });
    }
    else {
        $(".plci-content").unbind();
    }
});