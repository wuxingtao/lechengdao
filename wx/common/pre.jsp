<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="basePath" value="${pageContext.request.contextPath}" />
	<meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-touch-fullscreen" content="yes">
    <link rel="stylesheet" href="${basePath }/script/bootstrap-3.3.5-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="${basePath }/wx/script/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/css/general.css">
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/css/page.css">
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/css/web.css">
    <link rel="stylesheet" href="${basePath }/wx/script/css/jquery-labelauty.css">
    <link rel="stylesheet" href="${basePath }/wx/script/css/iscroll.css">
    <script type="text/javascript" src="${basePath }/script/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="${basePath }/wx/script/js/layer.m.js"></script>
    <script type="text/javascript" src="${basePath }/wx/script/js/touchslider.js"></script>
    <script type="text/javascript" src="${basePath }/wx/script/js/global.js"></script>
    <script type="text/javascript" src="${basePath }/wx/script/js/web.js"></script>
    <script type="text/javascript" src="${basePath }/script/bootstrap-3.3.5-dist/js/bootstrap.min.js" ></script>
    <script type="text/javascript" src="${basePath }/wx/script/js/jquery-labelauty.js" ></script>
    <script type="text/javascript" src="${basePath }/wx/script/js/iscroll.js" ></script>
    
    <script>
    //var hostUrl = "http://yjmall.szslht.com/";
    var hostUrl = "http://meq5611241.oicp.net/yjmall/";
    var utils = {  
		    setParam : function (name,value){  
		        localStorage.setItem(name,value);  
		    },  
		    getParam : function(name){  
		        return localStorage.getItem(name);  
		    },
		    removeParam : function(name){
		    	return localStorage.removeItem(name);
		    }
		};  
    
  	//清除有问题的购物车
 	var oldShoppingCart = utils.getParam("ShoppingCart");
	 if (oldShoppingCart != null) {
		 var jsonstr = JSON.parse(oldShoppingCart.substr(1, oldShoppingCart.length));
		 if(jsonstr.totalAmount == null || jsonstr.totalAmount <= 0) {
			 localStorage.removeItem("ShoppingCart");
			 window.location.reload();
		 }
	 }
    
    
      function alertTips(content){
    	  layer.open({
			    content:content,
			    style: 'width:80%;font-family: 方正兰亭细黑;text-align:center;',
			    btn: ['确定'],
    		    shadeClose:false,
    		    yes: function(){
    		    	layer.closeAll();
    		    }
			});
      }
    
      function beforeTips(content){
    	  layer.open({
    		    content: content,
    		    style: 'width:80%;font-family: 方正兰亭细黑;text-align:center;',
    		    btn: ['确定'],
    		    shadeClose:false,
    		    yes: function(){
    		    	layer.closeAll();
    		    }
    		 
    		});
      }
      
      function loadingReady(){
    	  layer.closeAll();
      }
      
      
      function subscribeTips(html){
    	  layer.open({
    		    type: 1,
    		    content: html,
    		    style: 'font-family: 方正兰亭细黑;width:80%',
    		    shadeClose:false
    		});
      }
      
      function loadingHtml(){
	      var loadingHtml = layer.open({
	    	    type: 2,
	    	    shadeClose:false,
	    	    content: '拼命加载中...'
    	});
      }
      
      function wxRedirectHtml(url,statue){
    	  var html = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1187ce9edd0df6f1&redirect_uri="+url+"&response_type=code&scope=snsapi_base&state="+statue+"&connect_redirect=1#wechat_redirect"
      	  return html;
      }
    
  	//授权获取openid,没关注出现二维码
  	function getOpenid(wxRedirectUrl){
  		var code = "${param.code}";
  		var checkOpenid = "";
  		
  		var codeHtml = "<div class=\"panel panel-default\" style=\"width:100%;margin: 0 auto;\">"
					  +"<div class=\"panel-body\"><div><strong>您还未关注我们</strong></div>"
					  +"<div><strong>快快长按下面二维码关注我们!</strong></div>"
					  +"<img src=\"${basePath }/wx/script/images/img/code.jpg\" class=\"img-responsive\">"	    
					  +"</div></div>";
  		if(code !=""){
  			$.ajax({ 
  	  	       type: "post", 
  	  	       url: "${basePath}/wxcommon/wx_getOpenid", 
  	  	       data:{code:code},
  	  	       cache:false, 
  	  	       async:false, 
  	  	       success: function(data){ 
  	  	    	   if(data.statue){
  	     				if(data.subscribe=="0"){
  	     					subscribeTips(codeHtml);
  	     					checkOpenid = "code";
  	     				}else{
  	     					checkOpenid = data.openid;
  	     				}
  	     			}else{
  	     				window.location.href = wxRedirectUrl;
  	     				}
  	  	        } 
  	  	});
  		}else{
  			window.location.href = wxRedirectUrl;
  		}
  		
  		if(checkOpenid == ""){
    		$("body").addClass("hide");
    	}
  		return checkOpenid;
  	}
      
  	function include(path){ 
  	    var a=document.createElement("script");
  	    a.type = "text/javascript"; 
  	    a.src=path; 
  	    var head=document.getElementsByTagName("head")[0];
  	    head.appendChild(a);
    }
  	
   // 对Date的扩展，将 Date 转化为指定格式的String
   // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
   // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
   // 例子： 
   // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
   // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
   Date.prototype.Format = function (fmt) { 
       var o = {
           "M+": this.getMonth() + 1, //月份 
           "d+": this.getDate(), //日 
           "h+": this.getHours(), //小时 
           "m+": this.getMinutes(), //分 
           "s+": this.getSeconds(), //秒 
           "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
           "S": this.getMilliseconds() //毫秒 
       };
       if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
       for (var k in o)
       if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
       return fmt;
   }
    </script>