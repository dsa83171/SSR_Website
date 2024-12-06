import player  from '../../assets/player.json' with  { type: "json"};
new Vue({
    el: '#playerList',
    data: {
        player: player
    }
});

new Vue({
    el: '#playerModal',
    data: {
        player: player
    },
    methods:{
        
    }
});


// import events  from '../../assets/events.json' with  { type: "json"};
// new Vue({
//     el: '#carouselPV',
//     data: {
//         events: events
//     }
// });

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
