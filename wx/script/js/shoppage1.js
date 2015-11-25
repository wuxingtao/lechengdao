    var shopTotal = $(".shopping-total")
    var state = $(".shoppingMain").attr("data-state")
    var fullpay=false;    //默认全选
    console.info(state)

    function edit(){
        var checksg = $(".lump-info .pro-selected").length;
        var checktt = $(".lump-info .proRadius").length;
        var checkdt = $(".lump-info .delRadius").length

        if (checksg < checktt) {
            $("#icon-checkAll").removeClass("icon-check")
                
        } else if (checksg == checktt) {
            $("#icon-checkAll").addClass("icon-check")
                
        }
        if (checksg > 0) {
            shopTotal.addClass("lump-selected")
        } else if (checksg == 0) {
            shopTotal.removeClass("lump-selected")
            $("#icon-del-checkAll").removeClass("icon-del-check")
        }
        //state2
        if (checksg < checkdt) {
            $("#icon-del-checkAll").removeClass("icon-del-check")
            // shopTotal.removeClass("lump-del-selected")
        } else if (checksg == checkdt) {
            $("#icon-del-checkAll").addClass("icon-del-check")
            // shopTotal.addClass("lump-del-selected")
        }
        if (checksg > 0) {
            shopTotal.addClass("lump-del-selected")
        } else if (checksg == 0) {
            shopTotal.removeClass("lump-del-selected")
        }

    }
    
    if (state == 0) {
        //state1
        $(".lump-info .proRadius").each(function() {
            $(this).on("click", function() {
                $(this).toggleClass("pro-selected");
                edit();

            })

        })
        //总闸
        $("#icon-checkAll").on("click", function() {
            $(this).toggleClass("icon-check");
            // $(".lump-info .proRadius").toggleClass("pro-selected")
            if ($(this).hasClass("icon-check")) {
                $(".lump-info .proRadius").addClass("pro-selected")
                shopTotal.addClass("lump-selected")
            } else {
                $(".lump-info .proRadius").removeClass("pro-selected")
                shopTotal.removeClass("lump-selected")
            }
        })

        $("#icon-del-checkAll").on("click", function() {
            $(this).toggleClass("icon-del-check");
            // $(".lump-info .delRadius").toggleClass("pro-selected")
            if ($(this).hasClass("icon-del-check")) {
                $(".lump-info .delRadius").addClass("pro-selected")
                shopTotal.addClass("lump-del-selected")
            } else {
                $(".lump-info .delRadius").removeClass("pro-selected")
                shopTotal.removeClass("lump-del-selected")
            }
        })
    } else if (state == 1) {
        //state2
    }
    /*//state2
    }*/

    $(".xCount-minus").css("display","none")
    //add Edit    
    $(".lumpBox .countPrice").each(function() {
        var $target = $(this).find(".state-lt em")
        var $targetNum = $(this).find(".state-rt .mt-left")
        var singlePrice = $target.html();
        var oriNum=$(this).find(".xCount-amount").html()  //单品初始数量
        if(oriNum>1){
            $(this).find(".xCount-minus").css("display","table-cell")
        }

        //添加
        $(".xCount .xCount-plus", this).on("touchstart",function(e){
            var $add = $(this);
            var $amount = $add.parent().find(".xCount-num .xCount-amount")
            var num = $amount.html();
            if (num == 0) {
                num = parseInt(num) + 1;
                $amount.html(num);
            } else {
                num = parseInt(num) + 1
                $amount.html(num);


            }
            //
            var total = Number(singlePrice)*10000 * num/10000; //总价
            $target.html(total);
            $targetNum.html(num);
            $(this).parent().find(".xCount-minus").css("display","table-cell")
            if($(".xCount .xCount-amount").html()>=1){
                $(".xCount-minus",this).css("display","table-cell")
            }
        })

        //删除
        $(".xCount .xCount-minus", this).on("touchstart",function(e){
            var $reduce = $(this);
            var $amount = $reduce.parent().find(".xCount-num .xCount-amount")
            var num = $amount.html();
            if(num==2){
                $(this).css("display","none")
            }
            if (num >= 2) {
                num = parseInt(num) - 1;
                $amount.html(num);

            } else if (num == 1) {
                num = 1;
                $amount.html(num);
            } else {
                num = parseInt(num);
                $amount.html(num);
            }
            //
            var total = Number(singlePrice)*10000 * num/10000; //总价
            $target.html(total)
            $targetNum.html(num);

        })

    })


    //Edit-state

    $(".lump-stateEdit").on("click", function() {
        if ($(this).hasClass("editable")) {
            $(this).addClass("doneable").removeClass("editable").html("完成")
            $(".lumpBox").find(".state-number").css("display", "none");
            $(".lumpBox").find(".xt-amount").css("display", "block")
            $(".lump-info").find(".proRadius").removeClass("proRadius ").addClass("delRadius")
            $(".shoppingMain").attr("data-state", "1") //state2

            $(".total-state2").removeClass("hidden");
            $(".total-state1").addClass("hidden")
        } else if ($(this).hasClass("doneable")) {
            $(this).addClass("editable").removeClass("doneable").html("编辑")

            $(".lumpBox").find(".state-number").css("display", "block");
            $(".lumpBox").find(".xt-amount").css("display", "none")
            $(".lump-info").find(".delRadius").removeClass("delRadius ").addClass("proRadius")
            $(".shoppingMain").attr("data-state", "0") //state1

            $(".total-state1").removeClass("hidden");
            $(".total-state2").addClass("hidden")
        }
            // shopTotal.removeClass(".lump-selected,lump-del-selected")
            // 
            // 
        edit();

    })

//购物车下架状态.goods-take-off .store-take-off
var offModel="<div class=\"content-wrap\"><div class=\"entry-title\"><a class=\"featured-image\" rel=\"bookmark\"></a><a class=\"btn btn-close\"><img src=\"../script/images/member/point/check-btn2.png\"></a><div class=\"p-condition\"></div></div></div>"
var targetG=$(".shopping-confirm-wrapper .lump-info"),
    targetS=$(".shopping-confirm-wrapper .lumpBox")

    if(targetG.find(".goods-take-off")){
        $(".goods-take-off").append(offModel)
        $(".goods-take-off").children().removeClass("proRadius")
        $(".goods-take-off").find(".state-number").addClass("show")
        $(".goods-take-off").find(".xt-amount").addClass("hide")
        $(".goods-take-off .btn-close").click(function(){
            $(this).parents(".goods-take-off").fadeOut(300);
        })
    }
    if(targetS.find(".store-take-off")){
        $(".store-take-off").append(offModel);
        $(".store-take-off").find(".proRadius").removeClass("proRadius")
        $(".store-take-off").find(".state-number").addClass("show")
        $(".store-take-off").find(".xt-amount").addClass("hide")
        $(".store-take-off .btn-close").click(function(){
            $(this).parents(".store-take-off").fadeOut(300);
        })
    }

//默认全不选中
if(fullpay==true){
    $(".shopping-total").addClass("lump-selected")
    $("#icon-checkAll").addClass("icon-check")
    $(".lump-info").find(".proRadius").addClass("pro-selected")
}
//删除
$(".delBtn").on("click",function(){
    $(".lump-info .delRadius").each(function(){
         if($(this).hasClass("pro-selected")){
            // $(this).parent().remove()
            $(this).removeClass("pro-selected");
            $(this).parent().fadeOut();
         }
    })
   
    edit();


})