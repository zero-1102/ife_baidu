(function(){
    $('button').click(function(){
        let lineWidth = parseInt($(".line").css('width'));
        if(lineWidth !== 0){
            $(".line").css('width',0);
        }else{
            $(".line").css('width','50%');
        }
    })
})(document,window)