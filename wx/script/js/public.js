

/**
 *(初始化执行
 */
$(function(){
    function tc(obj){
                        wipebar=obj;
                        console=window.console || {dir:new Function(),log:new Function()};
                    var active=0,
                        as=document.getElementById('pagenavi').getElementsByTagName('a');
                    for(var i=0;i<as.length;i++){
                        (function(){
                            var j=i;
                            as[i].onclick=function(){
                                t.slide(j);
                                return false;
                            }
                        })();
                    }
                        var sele=$('.tbanner').attr('data-wipe');
                        if(sele==1){
                    var M="&tcm&slider0&true&qwe&4000";
                    var par=M.split("&");
                    var t=new TouchSlider({id:par[2],speed:800,timeout:par[5],before:function(index){
                            as[active].className='';
                            active=index;
                            as[active].className='active';
                    }});        
                        }else if(sele==2){
                    var N="&jhk&slider2&true&oop&4000";
                    var nav=N.split("&");
                    var u=new TouchSlider({id:nav[2],speed:800,timeout:nav[5],before:function(index){
                            as[active].className='';
                            active=index;
                            as[active].className='active';
                    }});  

                        }
                    }
                 
                 if($('.tbanner').attr('data-wipe')!==undefined){
                        tc();
                       }

// tc 

   

 })