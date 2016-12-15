$("#shoppingCart").hover(function() {
    $(this).css("background", "#FBFEE9");
    $("#shoppingCart a").css("color", "#ff6700");
    $("#cartDetail").css({
        "width": "300px"
    }).animate({
        height: "95px"
    }, 500).finish();
}, function() {
    $(this).css("background", "#333");
    $("#shoppingCart a").css("color", "#b0b0b0");
    $("#cartDetail").css({
        "width": "300px"
    }).animate({
        height: "0px",
    }, 400);
});

$("#search_txt input").focus(function() {
    $(this).css("border", "none");
    $("#search").css("border", "1px solid #ff8c00");
    $("#search_go").css("border-left", "1px solid #ff8c00");
});
$("#search_txt input").blur(function() {
    $(this).css("border", "none");
    $("#search").css("border", "1px solid #F0F0F0");
    $("#search_go").css("border-left", "1px solid #F0F0F0");
});

$("#search_go").hover(function() {
    $(this).css({
        "background": "#FC5C1E",
        color: "#fff"
    });
}, function() {
    $(this).css({
        "background": "#fff",
        color: "#000"
    });
});

$(".nav a").hover(function() {
    $(this).css("color", "#ff4500");
    $("#" + $(this).attr("control")).show(400);
    $(".menu_content").height(230);
}, function() {
    $(this).css("color", "#000");
    $("#" + $(this).attr("control")).hide(400);
    $(".menu_content").height(0);
});

$(".bannerWraper> ul> li").hover(function() {
    $(this).css("background", "#ff6700");
    $(this).children(".banner_menu_content").show();
}, function() {
    $(this).css("background", "none");
    $(this).children(".banner_menu_content").hide();
});

$(function() {
    var i = 0;
    var banner = $(".bigBanner ul");
    var length = $(".bigBanner li").length;

    function changeImg() {
        var px = i * -1226 + "px";
        banner.animate({
            opacity: ".2"
        }, 100, function() {
            banner.css("left", px);
            banner.animate({
                opacity: "1"
            }, 100);
        })
    }

    function auto() {
        i += 1;
        if (i >= length)
            i = 0;
        changeImg();
    }

    change_self_img = setInterval(auto, 3000);
    $(".btnWarper").hover(function() {
        clearInterval(change_self_img);
        $(this).children().show();
    }, function() {
        change_self_img = setInterval(auto, 3000);
        $(this).children().hide();
    });

    $(".leftBtn").click(function() {
        i += 1;
        if (i >= length)
            i = 0;
        changeImg();
    });

    $(".rightBtn").click(function() {
        i -= 1;
        if (i <= 0)
            i = length - 1;
        changeImg();
    });
});

$(".btnInfo").hover(function() {
    $(this).css({
        "background": "#4f4d4b",
        "color": "#ff6700"
    });
}, function() {
    $(this).css({
        "background": "none",
        "color": "#BEBEBE"
    });
});

$(function() {
    var productLength = $(".starProduct_banner li").length - 5;
    var index = 0;
    var width = 245;

    $(".starP_nav_left").click(function() {
        if (index >= productLength)
            return;
        index += 1;
        $(".starProduct_banner ul").animate({
            "left": -index * width + "px"
        }, 400);
    });

    $(".starP_nav_right").click(function() {
        if (index <= 0)
            return;
        index -= 1;
        $(".starProduct_banner ul").animate({
            "left": -index * width + "px"
        }, 400);
    })
});

$(".Intell_Hardware_inner li").hover(function() {
    $(this).css({
        "top": "-5px",
        "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.2)"
    });
}, function() {
    $(this).css({
        "top": "0px",
        "box-shadow": "none"
    });
})

$(".about span").hover(function(){
  $(this).css({
    "background":"#FF6700",
    "color":"#fff"
  })
},function(){
  $(this).css({
    "background":"#fff",
    "color":"#FF6700"
  })
});
