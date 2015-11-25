/*通过手机屏幕dpr和手机宽度来确定font-size的值*/
function autorun() {

    //初始值

    var default_width = 20;

    var default_dpr = 1;

    var dpr = window.devicePixelRatio;

    var width = screen.width;

    var html_style = '';

    var body_style = '';

 

    //dpr倍数

    var difference = dpr / default_dpr;

 

    //计算

    if (difference === 1 || difference === 2 || difference === 3) {

        var default_min_size = 20 * difference;

        var default_max_size = 33.75 * difference;

        var default_coefficient = 0.0625 * difference;

        html_style = get_font_size(width, default_min_size, default_max_size, default_coefficient);

        body_style = 'font-size:' + difference * 12 + 'px';

    } else {

        html_style = get_font_size(width, 20, 33.75, 0.0625);

        body_style = 'font-size:12px';

    }

 

    //进行dom操作

    $("html").attr('style', html_style);

    $("body").attr('style', body_style);

}

 

/**

 * 通过手机屏幕dpr和手机宽度来确定font-size的值

 * @param {int} width

 * @param {int} default_min_size

 * @param {int} default_max_size

 * @param {int} default_coefficient

 * @returns {String}

 */

function get_font_size(width, default_min_size, default_max_size, default_coefficient) {

    var style = '';

    //屏幕宽度需要在320-540之间进行计算

    if (width < 320) {

        style = 'font-size:' + default_min_size + 'px';

    } else if (width > 540) {

        style = 'font-size:' + default_max_size + 'px';

    } else {

        var difference = width - 320;

        var fontsize = default_min_size + difference * default_coefficient;

        style = 'font-size:' + fontsize + 'px';

    }

    return style;

}


// /*js 适配scale*/
// function scale(){
//     var dpr, rem, scale; 
//     var docEl = document.documentElement; 
//     var fontEl = document.createElement('style'); 
//     var metaEl = document.querySelector('meta[name="viewport"]'); 
//     scale = 1 / dpr; 
//     dpr = win.devicePixelRatio || 1; 
//     rem = docEl.clientWidth * dpr / 10; 
//     // 设置viewport，进行缩放，达到高清效果 
//     metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ', 
//     initial-scale=' + scale + ',maximum-scale=' + scale + ', 
//     minimum-scale=' + scale + ',user-scalable=no'); 
//     // 设置data-dpr属性，留作的css hack之用 
//     docEl.setAttribute('data-dpr', dpr); 
//     // 动态写入样式 
//     docEl.firstElementChild.appendChild(fontEl); 
//     fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}'; 
//     // 给js调用的，某一dpr下rem和px之间的转换函数 
//     window.rem2px = function(v) { 
//     v = parseFloat(v); 
//     return v * rem; 
//     }; 
//     window.px2rem: function(v) { 
//     v = parseFloat(v); 
//     return v / rem; 
//     }; 
//     window.dpr = dpr; 
//     window.rem = rem; 
// }



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

            if($(box).height() + box.scrollTop >= box.scrollHeight){
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

        // bind
        $('#closePopup').on('click', function(e){
            $('#popupLayer').hide();
            $('#bgMask').hide();
            enableScroll();
        });

        // 内部可滚
        $('.layermbox').on('mousewheel', innerScroll);
        // 外部禁用--事件
        // disableScroll();


        // 移动端touch重写
        var startX, startY;
        $('.layermbox').on('touchstart', function(e){
            startX = e.changedTouches[0].pageX;
            startY = e.changedTouches[0].pageY;
        });

        // 仿innerScroll方法
        $('.layermbox').on('touchmove', function(e){
            e.stopPropagation();

            var deltaX = e.changedTouches[0].pageX - startX;
            var deltaY = e.changedTouches[0].pageY - startY;

            // 只能纵向滚
            if(Math.abs(deltaY) < Math.abs(deltaX)){
                e.preventDefault();
                return false;
            }

            var box = $(this).get(0);

            if($(box).height() + box.scrollTop >= box.scrollHeight){
                if(deltaY < 0) {
                    e.preventDefault();
                    return false;
                }
            }
            if(box.scrollTop === 0){
                if(deltaY > 0) {
                    e.preventDefault();
                    return false;
                }
            }
            // 会阻止原生滚动
            // return false;
        });
