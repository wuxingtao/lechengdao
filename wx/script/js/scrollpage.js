    // 上拉刷新
    ;function loadlist(){
        var myScroll= new IScroll('.scrollMain',{
            probeType: 3, mouseWheel: true,click:true 
        })
        var pullUpicon='<div id="pullUp" class=""><img src="../script/images/icon-gray/loading.gif"></div>'
        var $pullUpEl=$(".scroll-area")
        $pullUpEl.append(pullUpicon)
        var upIcon=$("#pullUp")
        myScroll.on("scroll",function(){
            var y = myScroll.y,
                maxY = this.maxScrollY-y, //maxScrollY表示文档区域的最大高度
                $scrollTop=$("#scrollTop")
            
            if(maxY>=40){
                $('#scrollTop').stop().animate({
                    opacity: 1
                }, 100);
                upIcon.addClass("loading")
                console.log(123123)

            }else if(maxY<40&&maxY>0){
                upIcon.removeClass("loading")
                console.log(123123)
            }else if(maxY<40){
                $('#scrollTop').stop().animate({
                    opacity: 0
                }, 200);
            }

            $scrollTop.on("touchstart",function(){
                myScroll.scrollTo(0,0,1000,IScroll.utils.ease.quadratic)
            })
        })
       
    //上拉结束
       myScroll.on("scrollend",function(){
        $("#pullUp").removeClass("loading");
           if(this.maxScrollY - this.y > 40){

                   $("#pullUp").removeClass("loading");

               console.log(this.maxScrollY - this.y)
           }
       }); 
    //上拉
        myScroll.on("slideUp",function(){
            $('#scrollTop').stop().animate({
                opacity: 1
            }, 100);
            upIcon.addClass("loading")
            console.log('上拉')
            if(this.maxScrollY-this.y>40){
                myScroll.refresh()
            }
        })

    }

if($("body").find("main.scrollMain")){
    loadlist()
}