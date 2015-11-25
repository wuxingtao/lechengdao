//flexBoxHeight
(function($) {
    var flexBoxWrap = $(".bespred")
    var winH = $(window).height();

    flexBoxWrap.height(winH);
})(jQuery)

$(function() {


    //right-directory

    if ($("body").attr("data-rt") != "" && $("body").hasClass("rtnav")) {
        rdnav();
        $("#rt-sider").on("click", function() {
            $(this).toggleClass("hub-btn-show");
            $(this).parent().toggleClass("aside_more")

        })
        var sl = '<div id="scrollTop"><img src="../script/images/icon-gray/scrollTop.png"></div>'
        var h = $(".rtnav");
        h.append(sl);
    }

    /*scroll*/
    var d = document;
    var scrollTimer;
    window.onscroll = function() {

        if (jQuery(d).scrollTop() >= 100) {
            $('#scrollTop').stop().animate({
                opacity: 1
            }, 300);
        } else {
            $('#scrollTop').stop().animate({
                opacity: 0
            }, 300);
        }
        /*category*/
        if ($('body').find('.fixNav')) {
            fixNav();
            return false;
        }

        function fixNav() {

            var old = $(".fixNav");
            if (old.length) {
                var oldPn = $(".fixNav").parent().offset().top;
            }
            if (jQuery(d).scrollTop() >= oldPn) {
                $(".fixNav").addClass("fix-statu")
            } else if (jQuery(d).scrollTop() < oldPn) {
                $(".fixNav").removeClass("fix-statu")
            }
        }

    }
    $("#scrollTop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 400);
    })





    function idan(o) {
        $(".hub-order-list").each(function() {
            $(this).swiper({
                slidesPerView: 'auto',
                offsetPxBefore: 5,
                offsetPxAfter: 15,
            })
        })
    }

    if ($(".hubCenter").attr('data-idan') == 1) {
        idan();
    }

    var hor = $(".swiper-container .swiper-slide")
    hor.on("click", function() {
        $(this).addClass("swiper-current").siblings().removeClass("swiper-current")

    })


    //data-swipe
    var r = $(".wei-banner").attr("data-swipe")
    if (1 == r) {
        $("body").append("<script>" + '    var mySwiper=new Swiper(".wei-banner",{direction:"vertical",lazyLoading:!0,mousewheelControl:!0,watchSlidesProgress:!0,onInit:function(a){a.myactive=0},onProgress:function(a){for(var c=0;c<a.slides.length;c++){var b=a.slides[c],d=b.progress,e;e=d*a.height*.8;scale=1-Math.min(Math.abs(.2*d),1);boxShadowOpacity=0;b.style.boxShadow="0px 0px 10px rgba(0,0,0,"+boxShadowOpacity+")";c==a.myactive?(es=b.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="translate3d(0,"+e+"px,0) scale("+scale+")",es.zIndex=0):(es=b.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="",es.zIndex=1)}},onTransitionEnd:function(a,c){for(var b=0;b<a.slides.length;b++);a.myactive=a.activeIndex},onSetTransition:function(a,c){for(var b=0;b<a.slides.length;b++)es=a.slides[b].style,es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=c+"ms"}});' + "</script>")
            // $.getScript("../js/customize.js")
    } else if (0 == r) {
        $("body").append("<script>" + 'var swiper=new Swiper(".wei-banner",{pagination:".pagination",paginationClickable:true,spaceBetween:0,centeredSlides:true,autoplay:2500,autoplayDisableOnInteraction:false});' + "</script>")
    }

// share
var sha=document.body.getAttribute("data-share");
console.log(sha)
if(sha!=undefined){
    $(".vwport").append('<div id="share" onclick="closeshare()"><div class="shareImg"><img src="../script/images/member/point/share-act_03.png" alt=""></div></div>')
}


})

/*
 * common
 */

//interval
function interval() {
    var it = '<div id="interval-part"><img src="../script/images/yjmall/logo_03.png" alt=""><div>中国创新支付集团 技术支持<p>源浩电子商务有限公司</p></div></div>';
    // var it = '<div id="interval-part"><img src="../script/images/yjmall/logo_02.png" alt=""><div></div>';
    var area = $(".interval-area");
    var $sa = $(".scroll-area")
    if ($("body").find(".scrollMain")) {
        $("main").append(it)
    } else {
        $("main").after(it)
    }

}
if ($('body').hasClass("interval-area")) {
    interval();
}

//right-directory
function rdnav() {
    var rt = '<div class="right-directory"><a href="javascript:;" id="rt-sider" class="hub-btn"><i class="cd-icon-lists icon-lists"></i></a> <a href="javascript:;" id="hub-service" class="hub-btn"><i class="cd-icon-service"></i></a><div class="xbar_aside_item"><a href="../book/index.html"><i class="xbar-d1"></i>商城首页</a> <a href="../book/searchCategory.html"><i class="xbar-d2"></i>搜索</a> <a href=""><i class="xbar-d3"></i>购物圈</a> <a href="../book/shoppingCart.html"><i class="xbar-d4"></i>购物车</a> <a href="../member/member.html"><i class="xbar-d5"></i>个人中心</a> <a href="../book/shoppingFavorites.html"><i class="xbar-d6"></i>个人收藏</a></div></div>'
    var $sa = $(".scroll-area")
    $("body").append(rt)

}


//share
function sharelog() {
    $("#share").show()
}

function closeshare() {
    $("#share").hide();
}
