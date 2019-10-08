$(document).ready(function () {
    var changebg = $(".piimg-wp")
    // console.log(changebg);
    for (let i = 0; i < changebg.length; i++) {
        if(i%2 == 1){
            $(changebg[i]).addClass("bg-while")
        }else{
            $(changebg[i]).addClass("bg-pink")
        }
    }
    $(window).resize(function () {
        var w = $(window).width();
        // console.log(w);
        if (w < 768) {
            console.log("hi");
            $(".plci-content").slideUp();
            var cap = $(".plci-cap");
            for (let i = 0; i < cap.length; i++) {
                $(cap[i]).click(function () { 
                    $(this).parent().siblings(".pplc-item").children(".plci-content").slideUp("slow");
                    $(this).siblings(".plci-content").slideDown("slow");
                });
            }   
        }
        else{
            $(".plci-content").slideDown();
        }
    });
});