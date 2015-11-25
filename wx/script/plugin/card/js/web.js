$(function(){
    $(document).on("click", ".payamount li a", function(e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass("active")) {
            $this.parent().addClass("current").siblings(".current").removeClass("current");
        }
        return false;
})

//样式切换
//
//
   $(function(){
        var $li=$("#skin li")
        $li.click(function(){
            switchSkin(this.id)
        })
        var cookie_skin=$.cookie("cssSkin");
        if(cookie_skin){
            switchSkin(cookie_skin);
        }
})
    function switchSkin(skinName){
        $("#"+skinName).addClass("selected");
        $("#cssfile").attr("href","../css/"+skinName+".css");
        $.cookie("cssSkin",skinName,{path:'/',expires:10});
    }



    //皮肤切换
    $("#skin_0").click(function(){
        $('.footer h3 img').attr("src","../images/mycard/explain_icon.png")
        $("#cardfrond-paybtn").attr("src","../images/mycard/click.png")
        $("#cardback-paybtn").attr("src","../images/mycard/clickf.png")
        $(".UnbindSuccess img").attr("src","../images/mycard/unbs.png")
    })

    $("#skin_1").click(function(){
        $('.footer h3 img').attr("src","../images/blue/explain_blue_icon.png")
        $("#cardfrond-paybtn").attr("src","../images/blue/click_blue.png")
        $("#cardback-paybtn").attr("src","../images/blue/clickf_blue.png")
        $(".UnbindSuccess img").attr("src","../images/blue/unbs_blue_01.png")        
    })
    $("#skin_2").click(function(){
        $('.footer h3 img').attr("src","../images/green/explain_green_icon.png")
        $("#cardfrond-paybtn").attr("src","../images/green/click_green.png")
        $("#cardback-paybtn").attr("src","../images/green/clickf_green.png")
        $(".UnbindSuccess img").attr("src","../images/green/unbs_green_01.png")
    })    

})

