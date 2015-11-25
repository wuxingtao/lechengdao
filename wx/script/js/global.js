    function sharelog() {
        $("#share").fadeIn();
        $("body").addClass("modal-open")
    }

    function closeshare() {
        $("#share").hide();
        $("body").removeClass("modal-open")
    }


    /*    //flexBoxHeight
        (function($) {
            var flexBoxWrap = $(".bespred")
            var winH = $(window).height();

            flexBoxWrap.height(winH);
        })(jQuery)*/

    //tc
    function tc(obj) {
        wipebar = obj;
        console = window.console || {
            dir: new Function(),
            log: new Function()
        };
        var active = 0,
            as = document.getElementById('pagenavi').getElementsByTagName('a');
        for (var i = 0; i < as.length; i++) {
            (function() {
                var j = i;
                as[i].onclick = function() {
                    u.slide(j);
                    return false;
                }
            })();
        }
        // $("body .tbanner").each(function(){
        var sele = $('.tbanner').attr('data-wipe');
        if (sele == 1) {
            var M = "&tcm&slider0&true&qwe&4000";
            var par = M.split("&");
            var t = new TouchSlider({
                id: par[2],
                speed: 800,
                timeout: par[5],
                before: function(index) {
                    as[active].className = '';
                    active = index;
                    as[active].className = 'active';
                }
            });
        } else if (sele == 2) {
            var N = "&jhk&slider2&true&oop&4000";
            var nav = N.split("&");
            var u = new TouchSlider({
                id: nav[2],
                speed: 800,
                timeout: nav[5],
                before: function(index) {
                    as[active].className = '';
                    active = index;
                    as[active].className = 'active';
                }
            });

        } else if (sele == 3) {
            var u = new TouchSlider({
                id: 'slider3',
                speed: 600,
                timeout: 4000,
                before: function(index) {
                    as[active].className = '';
                    active = index;
                    as[active].className = 'active';
                }
            });
            $(".slider-lt img").click(function(){
                u.prev();
            })
            $(".slider-rt img").click(function(){
                u.next();
            })
        } else {
            var u = new TouchSlider({
                id: 'sliderE',
                speed: 600,
                timeout: 6000,
                before: function(index) {
                    as[active].className = '';
                    active = index;
                    as[active].className = 'active';
                }
            });
        }
        // })
    }

    if ($('.tbanner').attr('data-wipe') !== undefined) {
        tc();
    }

    // //right-directory
    // function rtSiderbar() {
    //     $("#rt-sider").on("click", function() {
    //         $(this).toggleClass("hub-btn-show");
    //         $(this).parent().toggleClass("aside_more")

    //     })
    // }
    // if($('body').find("#rt-sider")){
    //     rtSiderbar();
    // }

    //detail-toggle
    $(".detail-toggle").each(function(e) {
        $(this).click(function() {
            $(this).parents("section").find(".detail-infolists").fadeToggle(500);
            $("i", this).toggleClass("icon-arrow-angel").toggleClass("arrow-right")
        })
    })

    // nowDate
    var d = new Date()
    var vYear = d.getFullYear()
    var vMon = d.getMonth() + 1
    var vDay = d.getDate()
    var h = d.getHours();
    var m = d.getMinutes();
    var se = d.getSeconds();
    s = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay) /*+(h<10 ? "0"+ h : h)+(m<10 ? "0" + m : m)+(se<10 ? "0" +se : se)*/ ;
    $(".currentDate").html(s)

    //comment-image

    /*    if ($(".comment-main .pics").length > 0) {
            var commentPic = $(".pics")
            commentPic.reviewImage({
                "event": "touchstart"
            });
        }*/

    //hub center
    // $("#hub-menu").on("click", function(event) {
    //     var md = $(".hub-wrapper .mid")
    //      $("#hub-menu").toggle(function() {
    //         md.css({
    //             "-webkit-transform": "translateX(-100%)",
    //             transition: "400ms",
    //             "-webkit-transition": "400ms"
    //         }, function() {
    //             md.css({
    //                 "-webkit-transform": "translateX(0%)",

    //             })
    //         })
    //     })

    // })

    $("#hub-menu").on("click", function(event) {
        var md = $(".hub-wrapper .mid")
        if (md.hasClass("touchon")) {
            md.removeClass("touchon").addClass("touchout")
        } else {
            md.addClass("touchon").removeClass('touchout')
        }
    })

    //start
    $(function() {
        //Sequence button
        /*    $(".tab-collate-icon").click(function(){
                if($(this).find("i").hasClass("sorting-arrow")){
                    $(this).find("i").addClass("sorting-arrow-ascending").removeClass("sorting-arrow")
                }else{
                    $(this).find("i").addClass("sorting-arrow").removeClass("sorting-arrow-ascending")
                }
            })*/
        $("#hotsearchTab li").on("taphold", function() {
            if ($(this).find("i").hasClass("sorting-arrow")) {
                $(this).find("i").addClass("sorting-arrow-ascending").removeClass("sorting-arrow")
            } else {
                $(this).find("i").addClass("sorting-arrow").removeClass("sorting-arrow-ascending")
            }
        })


        //bootstrap data
        if ($.fn.datepicker) {
            $('#select-data').datepicker({
                format: 'yyyy-mm-dd',
                notOutDay: true,
                maxDay: 30
            });
        }
        //cityMode
        $(".lump-box .lump-cityMode li").on("click", function() {
            $(this).addClass("active").siblings().removeClass("active");
            if ($(this).hasClass("active")) {
                var ctval = $(this).find("span").html();
                $("#cityMode").val(ctval);
                console.info(ctval)
            }
        })
    })
