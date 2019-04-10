/**
 * Created by gbw on 2017/11/29 0029.
 */

if(window.$===undefined){
    throw new Error("必须加载jQuery");
}

var showLoading_G = function (text){
    var html = '<div id="mask_G"><div id="loading_G">'+text+'</div></div>';
    $("body").append(html);
}
var hideLoading_G = function (times){
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