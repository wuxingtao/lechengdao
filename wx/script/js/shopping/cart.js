
      
      var submitFlag = false;
      
  $(function() {
       //localStorage.clear();   //清空
       var initcard = utils.getParam("ShoppingCart"); 
       if(initcard!=null){
            addMenthod();
            var initjsonstr = JSON.parse(initcard.substr(1, initcard.length)); 
              $("#totalGoods").html(initjsonstr.totalNumber);
              $("#totalGoods").parent().css("display","block")
              $("#totalPrice").html(parseInt(initjsonstr.totalAmount));
              //将值赋给对于的菜品
              console.log(initjsonstr);
              for (var i=0;i<initjsonstr.productlist.length;i++) {
                  var id = initjsonstr.productlist[i].id;
                  var $obj = $("#rightTable").find("div[data-id='"+id+"']");
                  $obj.parent().find(".delPic").css("display","block");
                  $obj.parent().find(".foodNum").css("display","block");
                  $obj.parent().find(".foodNum").html(initjsonstr.productlist[i].num);
              }
       }
      var offset = $("#shoppingcar").offset();
      //添加
      $(".addCart").click(function(event){
          var addcar = $(this);
/*          var imgOffset = addcar.parent().parent().prev().find('img').position();
            var img = addcar.parent().parent().prev().find('img').attr('src');

*/
          var imgOffset = addcar.parent().parent().find('.goods_img img').offset();
          console.info(imgOffset)
          var img = addcar.parent().parent().find('.goods_img img').attr('src');
          var flyer = $('<img class="flyer-img" src="'+img+'">');
          flyer.fly({
              start: {
                  left: imgOffset.left,
                  top: (imgOffset.top-$(document).scrollTop()),
              },
              end: {
                  left: offset.left+10,
                  top: offset.top+10,
                  width:0,
                  height:0
              },
              onEnd: function() {
                      $(".flyer-img").addClass("hide");//销毁抛物体
                      //加减图标显示
                      var delPic = addcar.parent().find(".delPic");
                      var foodNum = addcar.parent().find(".foodNum");
                      var num = foodNum.html();
                      if(num==0){
                          num = parseInt(num)+1;
                          delPic.css("display","block");
                          foodNum.html(num);
                          foodNum.css("display","block");
                      }else{
                          num = parseInt(num)+1;
                          foodNum.html(num);
                      }
                      
                      
                      //添加商品
                      var $goods = addcar.parent().find("#hideInfo");
                      cart.addproduct(strProductJson($goods.attr("data-id"),$goods.attr("data-proName"),"1",$goods.attr("data-price"))); 
                      //取出localStorage中的商品信息
                      var endCard = utils.getParam("ShoppingCart"); 
                      var jsonstr = JSON.parse(endCard.substr(1, endCard.length)); 
                      $("#totalGoods").html(jsonstr.totalNumber);
                      $("#totalGoods").parent().css("display","block")
                      $("#totalPrice").html(parseInt(jsonstr.totalAmount));
                      addMenthod();
                      console.log("+++++++++++++++++++++")    
                      console.log(cart.getproductlist())
                      console.log(utils.getParam("ShoppingCart"))
                      
                      }
          });
      });
      
      //删除
      $(".delPic").click(function(event){
          var delcar = $(this);
          //加减图标显示
          var foodNum = delcar.parent().find(".foodNum");
          var num = foodNum.html();
          if(num==1){
              num = parseInt(num)-1;
              delcar.css("display","none");
              foodNum.html(num);
              foodNum.css("display","none");
          }else{
              num = parseInt(num)-1;
              foodNum.html(num);
          }
          
          //购物车删除商品
          var $goods = delcar.parent().find("#hideInfo");
          cart.updateproductnum($goods.attr("data-id"),num);
          
           //取出localStorage中的商品信息
          var endCard = utils.getParam("ShoppingCart"); 
          var jsonstr = JSON.parse(endCard.substr(1, endCard.length)); 
          $("#totalGoods").html(jsonstr.totalNumber);
          $("#totalGoods").parent().css("display","block")
          $("#totalPrice").html(parseInt(jsonstr.totalAmount));
          if(parseInt(jsonstr.totalAmount) == 0){
              $("#circleNum").css("display","none");
              MenthodCancel();
          }
          console.log("--------------------")    
          console.log(cart.getproductlist())
          console.log(utils.getParam("ShoppingCart"))
          
      });
      
    
  });

   var utils = {  
      setParam : function (name,value){  
          localStorage.setItem(name,value)  
      },  
      getParam : function(name){  
          return localStorage.getItem(name)  
      }  
  }  
    
   var product={  
      id:0,  
      name:"",  
      num:0,  
      price:0.00  
  };  
   var orderdetail={  
      totalNumber:0,  
      totalAmount:0.00      
  }  
  var cart = {  
      //向购物车中添加商品  
      addproduct: function (product) {  
          var ShoppingCart = utils.getParam("ShoppingCart");  
          if (ShoppingCart == null || ShoppingCart == "") {  
              //第一次加入商品  
              var jsonstr = { "productlist": [{ "id": product.id, "name": product.name, "num": product.num, "price": product.price}], "totalNumber": product.num, "totalAmount": (product.price * product.num) };  
              utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));  
          } else {  
              var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
              var productlist = jsonstr.productlist;  
              var result = false;  
              //查找购物车中是否有该商品  
              for (var i in productlist) {  
                  if (productlist[i].id == product.id) {  
                      productlist[i].num = parseInt(productlist[i].num) + parseInt(product.num);  
                      result = true;  
                  }  
              }  
              if (!result) {  
                  //没有该商品就直接加进去  
                  productlist.push({ "id": product.id, "name": product.name, "num": product.num, "price": product.price });  
              }  
              //重新计算总价  
              jsonstr.totalNumber = parseInt(jsonstr.totalNumber) + parseInt(product.num);  
              jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) + (parseInt(product.num) * parseFloat(product.price));  
              orderdetail.totalNumber = jsonstr.totalNumber;  
              orderdetail.totalAmount = jsonstr.totalAmount;  
              //保存购物车  
              utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));  
          }  
      },  
      //修改给买商品数量  
      updateproductnum: function (id, num) {  
          var ShoppingCart = utils.getParam("ShoppingCart");  
          var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
          var productlist = jsonstr.productlist;  
    
          for (var i in productlist) {  
              if (productlist[i].id == id) {  
                  jsonstr.totalNumber = parseInt(jsonstr.totalNumber) + (parseInt(num) - parseInt(productlist[i].num));  
                  jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) + ((parseInt(num) * parseFloat(productlist[i].price)) - parseInt(productlist[i].num) * parseFloat(productlist[i].price));  
                  productlist[i].num = parseInt(num); 
                  orderdetail.totalNumber = jsonstr.totalNumber;  
                  orderdetail.totalAmount = jsonstr.totalAmount;  
                  utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));  
                  return;  
              }  
          }  
      },  
      //获取购物车中的所有商品  
      getproductlist: function () {  
          var ShoppingCart = utils.getParam("ShoppingCart");  
           if(ShoppingCart!=null){
               var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
               var productlist = jsonstr.productlist;  
               orderdetail.totalNumber = jsonstr.totalNumber;  
               orderdetail.totalAmount = jsonstr.totalAmount;  
               return productlist;  
           }else{
              return null;  
           }
      },  
      //判断购物车中是否存在商品  
      existproduct: function (id) {  
          var result = false;  
          var ShoppingCart = utils.getParam("ShoppingCart");  
          if (ShoppingCart != null) {  
              var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
              var productlist = jsonstr.productlist;  
              for (var i in productlist) {  
                  if (productlist[i].id == id) {  
                      result = true;  
                  }  
              }  
          }  
          return result;  
      },  
      //删除购物车中商品  
      deleteproduct: function (id) {  
          var ShoppingCart = utils.getParam("ShoppingCart");  
          var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
          var productlist = jsonstr.productlist;  
          var list = [];  
          for (var i in productlist) {  
              if (productlist[i].id == id) {  
                  jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - parseInt(productlist[i].num);  
                  jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseInt(productlist[i].num) * parseFloat(productlist[i].price);  
              } else {  
                  list.push(productlist[i]);  
              }  
          }  
          jsonstr.productlist = list;  
          orderdetail.totalNumber = jsonstr.totalNumber;  
          orderdetail.totalAmount = jsonstr.totalAmount;  
          utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));  
      }  
  };  



  function strProductJson(id,name,num,price){
      product.id = id;
      product.name = name;
      product.num = num;
      product.price = price;
      return product;
  }




  console.log(cart.getproductlist())
  console.log(utils.getParam("ShoppingCart"))

  function showShoppingCard(){
      var endCard = utils.getParam("ShoppingCart"); 
       if(endCard==null){
          return;
       }
      var jsonstr = JSON.parse(endCard.substr(1, endCard.length)); 
      if(parseInt(jsonstr.totalAmount) == 0){
          return;
      }
      var jsonstr = JSON.parse(endCard.substr(1, endCard.length)); 
      console.log(jsonstr);
      var html = "<div class=\"container\" style=\"padding:0px;\"><table class=\"table table-hover\" style='margin:0px'><tbody>"
      for (var i=0;i<jsonstr.productlist.length;i++) {
                  var popid = jsonstr.productlist[i].id;
                  var popnum = jsonstr.productlist[i].num;
                  var popname = jsonstr.productlist[i].name;
                  var popprice = jsonstr.productlist[i].price;
                  if(popnum != "0"){
                      html +="<tr><td style='width:60%'>"+popname+"</td><td style='width:10%'><font style='color:#ee8d25;font-size: 16px;font-weight: bold;'>￥"+popprice+"</font></td>"+
                      "<td style='width:10%'><img src=\"images/minus.png\" style=\"width: 20px;\"/ onclick=\"popminus('"+popid+"',this)\"></td><td style='width:20px'>"+popnum+"</td><td style='width:20px'><img src=\"images/plus.png\" onclick=\"popplus('"+popid+"',this)\" style=\"width: 20px;\"/></td></tr>";
                  }
                  //$obj.parent().find(".delPic").css("display","block");
                  //$obj.parent().find(".foodNum").css("display","block");
                  //$obj.parent().find(".foodNum").html(jsonstr.productlist[i].num);
          }
      html +="</tbody></table></div>";
      layer.open({
      type: 1,
      shade: true,
      content: html,
      style: 'width:100%;max-height:250px;overflow-y:auto; padding:10px; background-color:#fff; color:#gray; border:none;'
  });
  }

  //定位到主菜单要点击的减按钮
  function popminus(popid,obj){
      var $obj = $("#rightTable").find("div[data-id='"+popid+"']");
      var delcar = $obj.parent().find(".delPic");
          //加减图标显示
          var foodNum = delcar.parent().find(".foodNum");
          var num = foodNum.html();
          if(num==1){
              num = parseInt(num)-1;
              delcar.css("display","none");
              foodNum.html(num);
              foodNum.css("display","none");
          }else{
              num = parseInt(num)-1;
              foodNum.html(num);
          }
          
          //购物车删除商品
          var $goods = delcar.parent().find("#hideInfo");
          cart.updateproductnum($goods.attr("data-id"),num);
          
           //取出localStorage中的商品信息
          var endCard = utils.getParam("ShoppingCart"); 
          var jsonstr = JSON.parse(endCard.substr(1, endCard.length)); 
          $("#totalGoods").html(jsonstr.totalNumber);
          $("#totalGoods").parent().css("display","block")
          $("#totalPrice").html(parseInt(jsonstr.totalAmount));
          
          
          if(parseInt(jsonstr.totalAmount) == 0){
              $("#circleNum").css("display","none");
              MenthodCancel();
              layer.closeAll();
              
          }
          
          var $this = $(obj).parent();
          if($this.next().html() == 1){
              $this.parent().addClass("hide");
          }
          $this.next().html($this.next().html()-1);
  }

  //定位到主菜单要点击的加按钮
  function popplus(popid,obj){
          var $obj = $("#rightTable").find("div[data-id='"+popid+"']");
          var addcar = $obj.parent().find(".plusPic");
          //加减图标显示
          var delPic = addcar.parent().find(".delPic");
          var foodNum = addcar.parent().find(".foodNum");
          var num = foodNum.html();
          if(num==0){
              num = parseInt(num)+1;
              delPic.css("display","block");
              foodNum.html(num);
              foodNum.css("display","block");
          }else{
              num = parseInt(num)+1;
              foodNum.html(num);
          }
          //添加商品
          var $goods = addcar.parent().find("#hideInfo");
          cart.addproduct(strProductJson($goods.attr("data-id"),$goods.attr("data-proName"),"1",$goods.attr("data-price"))); 
          //取出localStorage中的商品信息
          var endCard = utils.getParam("ShoppingCart"); 
          var jsonstr = JSON.parse(endCard.substr(1, endCard.length)); 
          $("#totalGoods").html(jsonstr.totalNumber);
          $("#totalGoods").parent().css("display","block")
          $("#totalPrice").html(parseInt(jsonstr.totalAmount));
          addMenthod();
          console.log("+++++++++++++++++++++")    
          console.log(cart.getproductlist())
          console.log(utils.getParam("ShoppingCart"))
          
          var $this = $(obj).parent();
          if($this.prev().html() == "0"){
              $this.prev().prev().find("img").removeClass("hide");
          }
          $this.prev().html(parseInt($this.prev().html())+1);
  }


          function addMenthod(){
              $("#chooseOk").css("background", "#d24c10");
              $("#choosePrice").css("background","#ee8d25");
              $("#chooseCar").css("background","rgb(255, 161, 60)");
              submitFlag = true;
          }
          
          function MenthodCancel(){
              $("#chooseOk").css("background", "darkgray");
              $("#choosePrice").css("background","#444");
              $("#chooseCar").css("background","#444");
              submitFlag = false;
          }
          $("#chooseOk").on("click",function(data){
              if(submitFlag){
                   var endCard = utils.getParam("ShoppingCart"); 
                   var jsonstr = JSON.parse(endCard.substr(1, endCard.length));
                  alert(jsonstr);
              }
          });

  //初始
  $(function(){
      var mySwiper = new Swiper ('.scrollClass', {
          direction:"vertical",
          slidesPerView: 6,
          onSlideChangeStart: function(swiper){
                var d=$("#leftTable ul");
                var result=d.css("transform");
                console.info(result);
                Y=result.substring(0,result.length-1).split(",");
                transY=Math.abs(Y[5]);
                // transY=result.substr(23,3)

              var d=$("#leftTable");
              console.info(transY);
              if(transY>=50){
                  d.css("bottom","40px")
              }else{
                  d.css("bottom","-50px")
              }

              }

       })  
      //click
      var $axle = $("#leftTable ul li");
      $axle.on("click",function(){
          $(this).addClass("slide-addr").siblings().removeClass("slide-addr");
      })

  })



//初始
$(function(){
/*  var rht=$(window).height();
   $("#leftTable").height(rht-100);
   console.info($("#leftTable").height())
    var mySwiper = new Swiper ('.scrollClass', {
      direction:"vertical",
      slidesPerView: 6,
      spaceBetween: 10,
      freeMode: false,*/


  var rht=$(window).height();
   $("#leftTable").height(rht-100);
   console.info($("#leftTable").height())
    var mySwiper = new Swiper ('.scrollClass', {
      noSwiping : true,
      direction:"vertical",
      slidesPerView: 5,
      spaceBetween: 10,
      touchRatio : 0.5,
      freeMode: false
/*        onSlideChangeStart: function(swiper){
              var d=$("#leftTable ul");
              var result=d.css("transform");
              Y=result.substring(0,result.length-1).split(",");
              transY=Math.abs(Y[5]);
            var d=$("#leftTable");
            if(transY>=150){
                d.css("bottom","40px")
            }else{
                d.css("bottom","-50px")
            }
            }*/
     })  
})

