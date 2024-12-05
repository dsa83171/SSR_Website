import data  from '../../assets/player.json' with  { type: "json"};
var app = new Vue({
    el: '#playerList',
    data: {
        player: data
    },
});

$(function(){
    var len = 60; // 超過50個字以"..."取代
    $(".card-text").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});