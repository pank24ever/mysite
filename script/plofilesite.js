`use strict`

$(function() {
    $("#vegas").vegas({
        slides: [
            { src: "./img/close-up-color-dew-1089455.jpg"},
            { src: "./img/bloom-blossom-depth-of-field-2184346.jpg"},
            { src: "./img/foliage-greenery-growth-797793.jpg"}
        ],
    });
});

window.addEventListener('scroll',function(){
    var headerElement = document.getElementById('header');
    var rect = headerElement.getBoundingClientRect();
    var y = rect.top + this.window.pageYOffset;
    if(y > 0){
        headerElement.classList.remove('hidden');
    } else {
        headerElement.classList.add('hidden');
    }
});


$(function(){

    var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time =1000; // エフェクトの時間(ms) 1秒なら1000

    //親要素と子要素のcssを定義
    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade-row').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });

});






