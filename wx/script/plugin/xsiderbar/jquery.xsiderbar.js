/**
 * 
 * @authors xingtao 
 * @date    2015-09-09 19:09:44
 * @version 1.2
 */

(function($) {
    $.fn.xSidebar = function(options) {
        var siderHome = false;
        return this.each(function() {
            var $this = $(this);
            var setting = {
                "defaultNum": 1,
                "maxNum": 6,
                "value": "", //[[],[]]
                "single": "javascript:;",
                "slider":"Top",
                "backup":true,
                "icon": "", //general icon
                "theme": "pure" //siderHome
                
            };
//pagebar
            var settings = $.extend(setting, options);
            //边栏主题选项
            if (settings.theme === "siderHome") {
                siderHome = true;
            }

            if (settings.single && settings.value) {
                showcategory();

            }
            //add theme
            if (siderHome) {
                showsiderhome();
                $("#xbar ul").css("padding-top", "20px");
                $("#xbar").css("z-index","101");
            }



            function showcategory() {
                var target = $("xbar")
                if (settings.value !== "") {
                    var arr = settings.value,
                        _html = '<div class="bespred '+settings.slider+'On" id="xbar" style="height:' + document.documentElement.clientHeight + 'px"><div id="siderHome"></div><ul class="nav nav-tabs">';

                    //value
                    $.each(arr, function(i, item) {
                        $.each(item, function(j, val) {
                            if (i !== 0 & j <= (item.length)) {

                                if (settings.icon !== "") {
                                    _html += '<li><a href=' + arr[0][j] + '><i class="icon-' + settings.icon + '"></i>' + arr[1][j] + '</a></li>';
                                } else {
                                    _html += '<li><a href=' + arr[0][j] + '>' + arr[1][j] + '</a></li>';
                                }
                            }

                        })

                    })
/*                    //backup
                    if(settings.backup="true"){
                        var backup='<div class="barbackup"></div>';
                      $("#hub-sider").on("click",function(){
                        target.append(backup);
                      })
                    }else{
                        _html += '</ul></div>';
                    }*/

                    _html += '</ul><div class="barbackup hide"></div></div>';



                    //id="hub-side" btn="xt-btn-close"
                    $("#hub-sider").on("click", function(event) {
                        var md = $("#xbar")
                        if (md.hasClass(''+settings.slider+'On')) {
                            md.removeClass(''+settings.slider+'On').addClass(''+settings.slider+'Out')
                            $this.css({
                                "height": '' + document.documentElement.clientHeight + '',
                            })
                            $("body").css("overflow","hidden")
                            if($(this).next().is("i")){
                                $(this).next("i").addClass("show")
                            }
                            $(".barbackup").removeClass("hide").addClass("show")
                        } else {
                            md.addClass(''+settings.slider+'On').removeClass(''+settings.slider+'Out');
                            $this.css({
                                "height": "auto",
                                "overflow": "inherit"
                            })
                            $('body').removeAttr('style')
                            if($(this).next().is("i")){
                                $(this).next("i").removeClass("show")
                            }

                            $(".barbackup").removeClass("show").addClass("hide")
                        }
                        //点击背景模态
                        $(".barbackup").on("click",function(e){
                            md.addClass(''+settings.slider+'On').removeClass(''+settings.slider+'Out');
                            $this.css({
                                "height": "auto",
                                "overflow": "inherit"
                            })
                            $('body').removeAttr('style')
                            if($("#hub-sider").next().is("i")){
                                $("#hub-sider").next("i").removeClass("show")
                            }

                            $(".barbackup").removeClass("show").addClass("hide")
                        })

                    })


                    $this.append(_html)


                }
                /*else if(settings.single!==""){
                                    $this.find("#hub-phone").attr("href",''+"tel:"+settings.single+''); 
                                }*/
                $this.find("#hub-sider").attr("href", ''+ settings.single +'');

                //li-event
                // $("#xbar ul li").click(function(e){
                //     e.preventDefault();
                //     $(this).addClass("active").siblings().removeClass("active")
                // })
            }

            //遮罩后显示按钮
            function showsiderhome() {
                $("#siderHome").show();
                $("#siderHome").html(createHome());
                //close-btn
                $("#xt-btn-close a").click(function() {
                    $("#xbar").removeClass(''+settings.slider+'Out').addClass(''+settings.slider+'On')
                    $this.css({
                        "height": "auto",
                        "overflow": "inherit"
                    })
                })

            }

            function createHome() {
                var homebtn = '<a href=' + settings.single + '><span>首页</span></a>' +
                    '<div id="xt-btn-close"><a href="javascript:;" class="xt-btn-region"><b></b></a></div>'
                return homebtn;
            }


        })
    }
})(jQuery);
