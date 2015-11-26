<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="basePath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=0">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>会员卡</title>
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/bootstrap-3.3.5-dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/plugin/card/css/global.css">
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/plugin/card/css/more.css">
</head>

<body class="card-l-wrapper">
    <header class="member-heading">
        <dl class="card-header">
            <dt></dt>
            <dd>会员卡激活</dd>
        </dl>
    </header>
    <div class="Container">
        <div class="form-box form-retrieve">
            <form class="form">
                <ul>
                    <li class="form-line form-boxbottow">
                        <div class="verification-box">
                            <lable for="verification" class="hidden">请输入手机号</lable>
                            <input class="form-control" type="tel" id="telPhone" name="telPhone" placeholder="请输入手机号">
                        </div>
                        <div id="verification-mg" class="btn btn-blue">发送验证码</div>
                    </li>
                    <li class="form-line form-boxbottow">
                        <lable for="number_pwd" class="sr-only">请输入短信中的验证码</lable>
                        <input class="form-control" type="tel" id="vaildCodeNum" name="vaildCodeNum" placeholder="请输入短信中的验证码">
                    </li>
<!--                     <li class="card-option"> -->
<!--                         <div class="order-lt card-bind">是否绑定源浩会员卡</div> -->
<!--                         <input type="checkbox" class="tgl tgl-general" id="moreWay"> -->
<!--                         <label for="moreWay" class="tgl-btn order-switch"></label> -->
<!--                     </li> -->
<!--                     <li class="card-btn"> -->
<!--                         <button class="btn btn-1" >有卡验证并登陆</button> -->
<!--                         <button class="btn btn-2">无卡验证并登陆</button> -->
<!--                     </li> -->
                </ul>
                <div class="next-step">
                    <input type="button" id="validButton" class="button btn btn-block btn-blue"  disabled="disabled"  onclick="checkmessage()" value="验证并激活">
                </div>
                <input type="hidden" name="openid">
            </form>
        </div>
    </div>
    <script src="${basePath }/wx/script/js/jquery.min.js"></script>
    <script src="${basePath }/wx/script/plugin/card/js/web.js"></script>
    <script src="${basePath }/wx/script/plugin/card/js/jquery.ck.js"></script>
    <script src="${basePath }/wx/script/plugin/card/js/ie10-viewport-bug-workaround.js"></script>
    <script type="text/javascript" src="${basePath }/wx/script/plugin/layer/layer.m.js"></script>
    <script type="text/javascript">
    
//     var wxRedirectUrl = wxRedirectHtml("http://yjmall.szslht.com/wx/goods/paySuccess.jsp",orderNum);
// 	   var openid  = getOpenid(wxRedirectUrl);
    
//     $("input[name='openid']").val(openid);
    $("input[name='openid']").val("o54PKs3TBYr_bPD1yLQZKieHMm-M");
    
    
    $(function() {
        var validCode = true;
        $("#verification-mg").click(function() {
       	 var mobileTelephone=/^(((13[0-9]{1})|15[0-9]|18[0-9])+\d{8})$/;  //电话匹配
       	 alert($("input[name='telPhone']").val());
		 	  if(mobileTelephone.test($("input[name='telPhone']").val())){
		 	  }else{
		 		alertTips("请输入正确的电话号码！");
		 	 	return;
		 	  }
        	
        	
        	 $.post("${basePath}/wxGoods/wxGoods_getValidCode",function(data){});
            var time = 120;
            var code = $(this);
            if (validCode) {
                validCode = false;
                code.addClass("msg1");
                $("#validButton").removeAttr("disabled");
                var t = setInterval(function() {
                    time--;
                    code.html("(" + time + ")" + "重新发送");
                    if (time == 0) {
                        clearInterval(t);
                        code.html("重新发送");
                        validCode = true;
                        $("#validButton").attr("disabled",true);
                    }
                }, 1000)
            }
        })
        
//         $(".card-option").click(function() {
//             if ($("#moreWay").prop("checked") == true) {
//                 $(".card-btn").fadeIn().css("display", "table");
//             } else {
//                 $(".card-btn").fadeOut();
//             }
//         })
//         //card-btn
//         $(".card-btn button:eq(0)").click(function(event){
//             event.preventDefault();
//             window.location.href="paymentPassword.html"
//         })
//         $(".card-btn button:eq(1)").click(function(event){
//             event.preventDefault();
//             window.location.href="paymentPassword1.html"
//         })
    })

    
       function checkmessage() {
    	
    	  var vaildCodeNum = $("#vaildCodeNum").val();
    	  if(vaildCodeNum == ""){
    		  alertTips("请先输入验证码！");
    	  }
    	
    	  $.post("${basePath}/wxGoods/wxGoods_vaildCodeNum",{
    		  openid:$("input[name='openid']").val(),vaildCodeNum:vaildCodeNum
    		  },function(data){
    			  
    			  
    			  
    			  
    			  
    		  
    	  })
    	
    	
    	
    }
    
    
    
    </script>
    <%@ include file="/wx/common/js.jsp"%>
</body>

</html>
