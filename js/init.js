/**
 * note:佛山日报年会大屏幕
 * author：zx
 * date：2020-1-9
 * modify：/
 */

$(document).ready(function(){ 

})

window.onload = function() {

}


function checkisHavePhone(){
    $.ajax({
        type:"get",
        url: link + 'wxusers/?openid=' + openid,
        dataType:"json",
        async:false,
        success:function(datax){
            
        },
        error: function(){
            console.log('checkisHavePhone*****xxx');
            alert("系统繁忙，请重试");
        }
    })
}

function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}