/**
 * 
 * @authors xingtao 
 * @date    2015-09-09 19:09:44
 * @version 1.3
 *
 * 滚动事件禁用 测试中
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
                            // $this.css({
                            //     "height": '' + document.documentElement.clientHeight + '',
                            // })
                            // $("body").css("overflow","hidden")   //需禁用手机触发事件
                            disableScroll();
                            if($(this).next().is("i")){
                                $(this).next("i").addClass("show")
                            }
                            $(".barbackup").removeClass("hide").addClass("show")
                        } else {
                            md.addClass(''+settings.slider+'On').removeClass(''+settings.slider+'Out');
                            // $this.css({
                            //     "height": "auto",
                            //     "overflow": "inherit"
                            // })
                            // $('body').removeAttr('style')
                            enableScroll();
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
                            $('body').removeAttr('style');
                            enableScroll();
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

          /* 滚动事件禁用 */
           function preventDefault(e) {
                      e = e || window.event;
                      e.preventDefault && e.preventDefault();
                      e.returnValue = false;
                  }

                  function stopPropagation(e){
                      e = e || window.event;
                      e.stopPropagation && e.stopPropagation();
                      e.cancelBubble = false;
                  }

                  function innerScroll(e){
                      // 阻止冒泡到document
                      // document上已经preventDefault
                      stopPropagation(e);

                      var delta = e.wheelDelta || e.detail || 0;
                      var box = $(this).get(0);

                      if($(box).height()+100 + box.scrollTop >= box.scrollHeight){
                          if(delta < 0) {
                              preventDefault(e);
                              return false;
                          }
                      }
                      if(box.scrollTop === 0){
                          if(delta > 0) {
                              preventDefault(e);
                              return false;
                          }
                      }
                      // 会阻止原生滚动
                      // return false;
                  }

                  var disableScroll = function(){
                      $(document).on('mousewheel', preventDefault);
                      $(document).on('touchmove', preventDefault);
                  };

                  var enableScroll = function(){
                      $(document).off('mousewheel', preventDefault);
                      $(document).off('touchmove', preventDefault);
                  };


                  // 内部可滚
                  $('#xbar .nav').on('mousewheel', innerScroll);
                  // 外部禁用--事件
                  // disableScroll();


                  // 移动端touch重写
                  var startX, startY;
                  $('#xbar .nav').on('touchstart', function(e){
                      startX = e.originalEvent.targetTouches[0].pageX;
                      startY = e.originalEvent.targetTouches[0].pageY;
                  });

                  // 仿innerScroll方法
                  $('#xbar .nav').on('touchmove', function(e){
                      e.stopPropagation();
                      var deltaX = e.originalEvent.targetTouches[0].pageX - startX;
                      var deltaY = e.originalEvent.targetTouches[0].pageX - startY;
                      // 只能纵向滚
                      if(Math.abs(deltaY) < Math.abs(deltaX)){
                          e.preventDefault();
                          return false;
                      }

                      var box = $(this).get(0);
// console.log(box.scrollHeight)
// console.log($(box).height()+100 + box.scrollTop)
console.log(deltaY)
console.log(box.scrollTop)
                      if($(box).height()+100 + box.scrollTop >= box.scrollHeight){  //100使用了padding
                        if(deltaY < 0) {
                            // e.preventDefault();
                            // return false;
                        }
                        console.log(11)
                      }
                      if(box.scrollTop === 0){
                        if(deltaY > 0) {
                            e.preventDefault();
                            return false;
                        }
                        console.log(22)
                      }
                      // 会阻止原生滚动
                      // return false;
                  });


/*end*/
        })
    }
})(jQuery);
