$(document).ready(function () {
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