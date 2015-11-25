onload=reg;
function reg(click){
 var username=document.getElementsByName("curren_password")[0];
 var passwd=document.getElementsByName("new_password")[0];
 //var email=document.getElementsByName("email")[0];
 var repass=document.getElementsByName("re_password")[0];
 //var other=document.getElementsByName("other")[0];
 var flag =false;
  check(username,"密码必须为数字",click,function(val){
     if(val.match(/^\S+$/)&&val.length>3&&val.length<20){
      flag=true;
      return true;
     } 
     else {
      flag=false;
      return false;
     }
    }); 
  check(passwd,"请输入新的6位数字密码",click,function(val){
     if(val.match(/^\S+$/)&&val.length>1&&val.length<7){
      flag=true;
      return true;
     }else{ 
      flag=false;
      return false;
     }
    }); 
  check(repass,"请再次输入6位数字密码",click,function(val){
     if(val==passwd.value&&(val.match(/^\S+$/)&&val.length>6&&val.length<16)){
      flag=true;
      return true;
     }else{
      flag=false;
      return false;
     }
    }); 
  check(email,"请输入合法的email地址，",click,function(val){
     
     if(val.match(/^\S+@\S+\.\S+$/)){
      flag=true;
      return true;
     }else{
      flag=false;
      return false;
     }
    
    });   
 return flag;
}
function check(obj,info,click,fun){
 var sp=gspan(obj);
 obj.onfocus=function(){ 
  //sp.innerHTML = "用户的长度在3-20位之间"；分好导致的错误；
  sp.innerHTML=info;
  sp.className = "stats2";
 }
 obj.onblur=function (){
  if(fun(this.value)){
   sp.innerHTML="输入正确";
   sp.className="stats4";
  }else{
   sp.innerHTML=info;
   sp.className="stats3";
  }
 }
 if(click=="cli")
  obj.onblur();
}
//获取<span>标签；
function gspan(obj){
 if(obj.nextSibling.nodeName=="SPAN")
  return obj.nextSibling;
 else
  return gspan(obj.nextSibling);
}

