<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="basePath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html id="html" lang="en">
<head>
    <%@ include file="/wx/common/pre.jsp"%>
    <title>阳江商城-商品分类</title>
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/css/web.css">
<style>
    body{
        overflow:hidden;
        position:static !important;
    }
    .category-search-wrapper .categoryBody{
        position:static !important;
    }
</style>
</head>

<body class="mhome pagefull category-search-wrapper">
    <header>
        <div class="yj-header-search"><input type="text" placeholder="家居鞋"></div>
    </header>
    <main class="categoryBody">
                  <div id="leftTable" class="scrollClass" style="overflow:hidden;">
                            <ul class="nav nav-tabs nav-stacked swiper-wrapper" id="classNav">
                                <li class="swiper-slide slide-addr"><a href="javascript:;"><span>热销推荐</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>家用电器</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>手机数码</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>电脑办公</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>男装秋款</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>男装内衣</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>男装内衣</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>男装内衣</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>运动户外</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>特价优惠</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>运动户外</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>特价优惠</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>珠宝手表</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>特价优惠</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>特色美食</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>家居家纺</span></a></li>
                                <li class="swiper-slide"><a href="javascript:;"><span>零食饮品</span></a></li>
                            </ul>

                  </div>
                  <div class="category-content">
                      <div class="classifyScroll" >
                          <div id="classifyList">
                              <div class="category-area">
                                  <h4>本周最热搜</h4>
                                  <ul class="category-align-1">
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_03.png" alt=""><span>女装秋款</span></a></li>
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_06.png" alt=""><span>男装秋款</span></a></li>
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_08.png" alt=""><span>大闸蟹</span></a></li>
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_16.png" alt=""><span>彩电</span></a></li>
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_18.png" alt=""><span>男装秋款</span></a></li>
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_19.png" alt=""><span>剃须刀</span></a></li>
                                  </ul>
                              </div>
                              <div class="category-area">
                                  <h4>男人热搜</h4>
                                  <ul class="category-align-1">
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_27.png" alt=""><span>皮带</span></a></li>
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_29.png" alt=""><span>钱包</span></a></li>钱包
                                      <li><a href="searchOrder.jsp"><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_30.png" alt=""><span>西装</span></a></li>
                                  </ul>
                              </div>
                              <div class="category-area">
                                  <h4>本周最热搜</h4>
                                  <ul class="category-align-1">
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_03.png" alt=""><span>女装秋款</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_06.png" alt=""><span>男装秋款</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_08.png" alt=""><span>大闸蟹</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_16.png" alt=""><span>彩电</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_18.png" alt=""><span>男装秋款</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_19.png" alt=""><span>剃须刀</span></a></li>
                                  </ul>
                              </div>
                              <div class="category-area">
                                  <h4>男人热搜</h4>
                                  <ul class="category-align-1">
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_27.png" alt=""><span>皮带</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_29.png" alt=""><span>钱包</span></a></li>钱包
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_30.png" alt=""><span>西装</span></a></li>
                                  </ul>
                              </div>
                              <div class="category-area">
                                  <h4>女人热搜</h4>
                                  <ul class="category-align-1">
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_38.png" alt=""><span>半身裙</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_40.png" alt=""><span>高跟鞋</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_41.png" alt=""><span>面膜</span></a></li>
                                  </ul>
                              </div>
                              <div class="category-area">
                                  <h4>女人热搜</h4>
                                  <ul class="category-align-1">
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_38.png" alt=""><span>半身裙</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_40.png" alt=""><span>高跟鞋</span></a></li>
                                      <li><a href=""><img src="${basePath}/wx/script/images/yjmall/images/ct-pre_41.png" alt=""><span>面膜</span></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  
    </main>

    <script src="${basePath}/wx/script/js/swiper.jquery.min.js"></script>
    <script src="${basePath}/wx/script/js/general.js"></script>
    <script>
        $(function(){
            var rht=$(window).height();
             $("#leftTable").height(rht-52);
             console.info($("#leftTable").height())
              var mySwiper = new Swiper ('.scrollClass', {
                noSwiping : true,
                direction:"vertical",
                slidesPerView: 10,
                // spaceBetween: 10,
                touchRatio : 0.8,
                freeMode: false
        })
            //event
            var $axle = $("#leftTable ul li");
            $axle.on("click",function(){
                $(this).addClass("slide-addr").siblings().removeClass("slide-addr");
            })
            //
            var myScroll = new IScroll('.classifyScroll', { scrollX: true, freeScroll: true,click:true });

            //
            $(".yj-header-search input").on("click",function(){
                window.location.href="search_land.html"
            })
           
     })  
    </script>

</body>

</html>
