/**
 * note:佛山日报年会大屏幕
 * author：zx
 * date：2020-1-9
 * modify：/
 */

$(document).ready(function(){ 
    getlist()
})

window.onload = function() {
    getlistperquatermin();
}

var link = 'http://server.foshanplus.com/';

var greetings = new Swiper('#greetings', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
});

function getlistperquatermin(){
    setInterval(function() {
        getlist()
    }, 25000);
}

function getlist(){
    $.ajax({
        type:"get",
        url: link + 'message/?size=15',
        dataType:"json",
        async:false,
        success:function(datax){
            // console.log(datax)
            for(var i=0; i<5; i++){
                var mline = '';
                for(var j=(i*3); j<3*(i + 1); j++){
                    var line1 = "";
                    var line2 = "";
                    var line3 = "";
                    var mlinetmp = '';
                    line1 = '<div class="item"><div class="plugin right-top-pic"><img src="img/fw.png"/></div><div class="fspic"><img src="' + datax.results[j].pics + '"/></div>';
                    line2 = '<div class="fsinfo"><strong><p class="fsusername">' + datax.results[j].user_name + '</p></strong>';
                    line3 = '<p class="fsusergreeting">' + datax.results[j].content + '</p></div></div>';
                    mlinetmp =  line1 + line2 + line3;
                    mline += mlinetmp;
                }
                $("#greetpage" + i).html(mline);
            }
        },
        error: function(){
            console.log('getlist*****xxx');
            alert("系统繁忙，请重试");
        }
    })
}

// function checkisHavePhone(){
//     $.ajax({
//         type:"get",
//         url: link + 'wxusers/?openid=' + openid,
//         dataType:"json",
//         async:false,
//         success:function(datax){
            
//         },
//         error: function(){
//             console.log('checkisHavePhone*****xxx');
//             alert("系统繁忙，请重试");
//         }
//     })
// }




function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}