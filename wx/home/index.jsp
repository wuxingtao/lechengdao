<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="basePath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html id="html" lang="en">
<head>
    <%@ include file="/wx/common/pre.jsp"%>
    <title>源浩-阳江商城</title>
    <link rel="stylesheet" type="text/css" href="${basePath }/wx/script/plugin/xsiderbar/need/sidebar.css">
</head>

<body class="mhome pagefull pagebar interval-area">
    <div class="vwport p0 m-wrapper">
        <div id="index_search_land" class="search_land_wrapper">
            <header class="cd-header book-topnav">
                <div id="cd-header-bar">
                    <div class="cd-header-icon-menu">
                        <a href="javascript:;" id="hub-sider"><i class="cd-icon-menu icon-menu"></i></a>
                        <i class="sorting-arrow"></i>
                    </div>
                    <form action="" class="search_form">
                        <input type="hidden" name="">
                        <div class="cd-search-box">
                            <input type="text" class="" placeholder="请输入商家、品类">
                        </div>
                    </form>
                    <div class="right_btn"><a href="txMap.html" id="hub-phone"><i class="cd-icon-location"></i></a></div>
                </div>
            </header>
        </div>
        <main class="contentMain">
            <div class="floot">
                <div class="tbanner swipe" data-wipe="3">
                    <ul id="slider3">
                        <li><img src="${basePath }/wx/script/images/yjmall/banner01_02.png"></li>
                        <li><img src="${basePath }/wx/script/images/yjmall/banner01_02.png"></li>
                        <li><img src="${basePath }/wx/script/images/yjmall/banner01_02.png"></li>
                    </ul>
                    <div id="pagenavi" style="display:none">
                        <a href="javascript:;" class="active">1</a>
                        <a href="javascript:;">2</a>
                        <a href="javascript:;">3</a>
                    </div>
                    <div id="listorder">
                        <a href="javascript:;" onclick="u.prev();" class="slider-lt"><img src="${basePath }/wx/script/images/icon-gray/arrow-prev.png" alt=""></a>
                        <a href="javascript:;" onclick="u.next();" class="slider-rt"><img src="${basePath }/wx/script/images/icon-gray/arrow-next.png" alt=""></a>
                    </div>
                </div>
                <div class="tranceNav">
                    <a href="" class="applink">
                        <img src="${basePath }/wx/script/images/icon-gray/term_05.png" alt="">
                        <div class="item-cont">
                            <span>签到</span><em>每天领1元</em>
                        </div>
                    </a>
                    <a href="" class="applink"><img src="${basePath }/wx/script/images/icon-gray/term_07.png" alt="">
                        <div class="item-cont">
                            <span>优惠券</span><em>每天有惊喜</em>
                        </div>
                        <a href="" class="applink"><img src="${basePath }/wx/script/images/icon-gray/term_10.png" alt="">
                            <div class="item-cont">
                                <span>商城会员</span><em>我的会员特权</em>
                            </div>
                        </a>
                </div>
            </div>
            <div class="present-show">
                <div class="lumpBox" param-list="1">
                    <div class="recomment p15">
                        <div class="box-heading recomment_title">
                            <span class="header-title-left"><i class="icon-recomment"><img src="${basePath }/wx/script/images/icon-gray/yj-st1.png" alt=""></i><font>阳江特产<em>送亲朋好友的最佳选择</em></font></span>
                            <a>
                                <div class="label_title_right"><img src="${basePath }/wx/script/images/icon-gray/more-arrow.png" alt=""></div>
                            </a>
                        </div>
                    </div>
                    <div class="tab-count">
                        <a class="vt-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec1_02.jpg" alt=""></a>
                        <a class="hor-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec1_04.jpg" alt=""></a>
                        <div class="down-point">
                            <a class="down-point-part1" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec1_06.jpg" alt=""></a>
                            <a class="down-point-part2" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec1_08.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="lumpBox" param-list="2">
                    <div class="recomment p15">
                        <div class="box-heading recomment_title">
                            <span class="header-title-left"><i class="icon-recomment"><img src="${basePath }/wx/script/images/icon-gray/yj-st2.png" alt=""></i><font>微信超市<em>真的比较快，好的还更省</em></font></span>
                            <a>
                                <div class="label_title_right"><img src="${basePath }/wx/script/images/icon-gray/more-arrow.png" alt=""></div>
                            </a>
                        </div>
                    </div>
                    <div class="tab-count">
                        <a class="vt-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec2_15.jpg" alt=""></a>
                        <div class="up-point">
                            <a class="up-point-part1" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec2_16.jpg" alt=""></a>
                            <a class="up-point-part2" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec2_17.jpg" alt=""></a>
                        </div>
                        <div class="down-point">
                            <a class="down-point-part1" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec2_20.jpg" alt=""></a>
                            <a class="down-point-part2" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec2_21.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="lumpBox" param-list="3">
                    <div class="recomment p15">
                        <div class="box-heading recomment_title">
                            <span class="header-title-left"><i class="icon-recomment"><img src="${basePath }/wx/script/images/icon-gray/yj-st3.png" alt=""></i><font>家用电器<em>7天无理由退款 30天价保</em></font></span>
                            <a>
                                <div class="label_title_right"><img src="${basePath }/wx/script/images/icon-gray/more-arrow.png" alt=""></div>
                            </a>
                        </div>
                    </div>
                    <div class="tab-count">
                        <a class="vt-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec3_23.jpg" alt=""></a>
                        <a class="hor-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec3_25.jpg" alt=""></a>
                        <div class="down-point">
                            <a class="down-point-part1" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec3_29.jpg" alt=""></a>
                            <a class="down-point-part2" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec3_31.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="lumpBox" param-list="4">
                    <div class="recomment p15">
                        <div class="box-heading recomment_title">
                            <span class="header-title-left"><i class="icon-recomment"><img src="${basePath }/wx/script/images/icon-gray/yj-st4.png" alt=""></i><font>电脑数码<em>购物0首付 畅想30天免息</em></font></span>
                            <a>
                                <div class="label_title_right"><img src="${basePath }/wx/script/images/icon-gray/more-arrow.png" alt=""></div>
                            </a>
                        </div>
                    </div>
                    <div class="tab-count">
                        <a class="vt-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec4_33.jpg" alt=""></a>
                        <a class="hor-point-part" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec4_35.jpg" alt=""></a>
                        <div class="down-point">
                            <a class="down-point-part1" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec4_40.jpg" alt=""></a>
                            <a class="down-point-part2" href=""><img src="${basePath }/wx/script/images/yjmall/img-sec4_42.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="cd-footer">
            <div class="footer_region clearfix">
                <ul class="nav-bottom">
                    <li><a href="javascript:;"><span class="bar-current"><em><i class="icon-initial icon-shopping-bar"></i></em>购物</span></a></li>
                    <li><a href="searchCategory.jsp"><span><em><i class="icon-initial icon-search-bar"></i></em>搜索</span></a></li>
                    <li><a href="javascript:;"><span><em><i class="icon-initial icon-peple-bar"></i></em>购物圈</span></a></li>
                    <li>
                        <a href="shoppingCart.html">
                            <span>
	                            <em class="bar-box hasGoods">
	                                <i class="icon-initial icon-car-bar" id="shoppingcar">
	                                	<div id="circleNum"><span id="totalGoods" style="display:none;">1</span></div>
	            					</i>
	            				</em>购物车
            				</span>
            		</a>
            		</li>
            <li><a href="javascript:;"><span><em><i class="icon-initial icon-menu-bar"></i></em>个人中心</span></a></li>
            </ul>
    </div>
    </footer>
    <section class="zoom-footerBox bgw">
        <div class="pb-standard"></div>
    </section>
    </div>
    <script src="${basePath }/wx/script/plugin/xsiderbar/jquery.xsiderbar.js"></script>
    <script>
    var u = new TouchSlider({
        id: 'slider3',
        speed: 600,
        timeout: 6000,
    });

    $(".m-wrapper").xSidebar({
        "value": [
            ["visaList.html", "", "", "hotCommodity.html", "hotCommodity.html", "hotCommodity.html", "hotCommodity.html", "hotCommodity.html"],
            ["<i class=\"xbar1\"></i>阳江特产", "<i class=\"xbar2\"></i>饮食", "<i class=\"xbar3\"></i>家居", "<i class=\"xbar4\"></i>美妆", "<i class=\"xbar5\"></i>母婴", "<i class=\"xbar6\"></i>服饰", "<i class=\"xbar7\"></i>家用电器", "<i class=\"xbar8\"></i>电脑数码", "<i class=\"xbar9\"></i>全部商品分类"]
        ],
        "slider": "top"

    })
    </script>
</body>

</html>
