/**
 * Created by gbw on 2017/11/29 0029.
 */

if(window.$===undefined){
    throw new Error("必须加载jQuery");
}

var showLoading_G = function (text){
    //var div_mask = document.createElement('div');
    //var div_load = document.createElement('div');
    //div_mask.setAttribute("id","mask_G");
    //div_load.setAttribute("id","loading_G");
    //div_load.innerHTML = text;
    //div_mask.appendChild(div_load);
    //document.body.appendChild(div_mask);
    var html = '<div id="mask_G"><div id="loading_G">'+text+'</div></div>';
    $("body").append(html);
}
var hideLoading_G = function (times){
    //var div_mask = document.getElementById("mask_G");
    //div_mask.style.opacity = 0;
    //div_mask.style.display = 'none';
    //div_mask.style.transition = 'all linear .3s';
    $("#mask_G").fadeOut(times);
    var timer = setInterval(function(){
        $("#mask_G").remove();
        clearInterval(timer);
    },times)
}
var hideLoading_G = function (){
    $("#mask_G").fadeOut(1000);
    var timer = setInterval(function(){
        $("#mask_G").remove();
        clearInterval(timer);
    },1000)
}