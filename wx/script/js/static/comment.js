$(function() {
	//comment-detail-infolists
	$(".detail-toggle").on("click",function(){
	    $(".detail-infolists").fadeToggle(500);
	        $("i",this).toggleClass("icon-arrow-angel").toggleClass("arrow-right")
	})

});

function upComment() {
	var $file = $(".comment-plus .comment-con");
	var $upimg = $("#upimg");
	$upimg.on("change", function() {
		var img = $("#upimg").val();
		$(".file").before('<div class="comment-con"><img src="" alt=""><a class="close-con slht-iconfont">&#xe64d;</a></div>')
		$(".comment-con-img img").attr("src", img)
	});

}
$(".comment-con .close-con").click(function(){
	$(this).parent().remove();
})