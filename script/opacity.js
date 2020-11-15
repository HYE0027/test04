/*$(window).ready(function(){
    var min = 400;
	var max = 900; //100% 투명할때의 스크롤 값
	$(window).scroll(function(){
		var scrollPX = $(this).scrollTop();
        if(scrollPX<min){
            $("#page2").css({"opacity": 0});
        }if(scrollPX>min && scrollPX<max){
            $("#page2").css({"opacity": (scrollPX-min)/1000});
        }if(scrollPX>max){
            $("#page2").css({"opacity": 1});
        }
        
});*/

////////////////////////////////////////

$(window).ready(function(){
    var min = 4100;
	var max = 5700; //100% 투명할때의 스크롤 값
	$(window).scroll(function(){
		var scrollPX = $(this).scrollTop();
        if(scrollPX<min){
            $("#page5_opacity").css({"opacity": 0});
        }if(scrollPX>min && scrollPX<max){
            $("#page5_opacity").css({"opacity": (scrollPX-min)/1000});
        }if(scrollPX>max){
            $("#page5_opacity").css({"opacity": 1});
        }
        
		/*if( scrollPX < max ) {
			$("#opacity").css({"opacity": (max-scrollPX)/max});
		}else{
			$("#opacity").css({"opacity": 0});
		}*/
	});
}); 

////////////////////////////////////////

$(window).ready(function(){
    var min = 4100;
	var max = 5700; //100% 투명할때의 스크롤 값
	$(window).scroll(function(){
		var scrollPX = $(this).scrollTop();
        if(scrollPX<min){
            $("#page5_opacity2").css({"opacity": 0});
        }if(scrollPX>min && scrollPX<max){
            $("#page5_opacity2").css({"opacity": (scrollPX-min)/1000});
        }if(scrollPX>max){
            $("#page5_opacity2").css({"opacity": 1});
        }
	});
}); 

////////////////////////////////////////

$(window).ready(function(){
    var min = 9800;
	var max = 10400; //100% 투명할때의 스크롤 값
	$(window).scroll(function(){
		var scrollPX = $(this).scrollTop();
        if(scrollPX<min){
            $("#page8_opacity").css({"opacity": 0});
        }if(scrollPX>min && scrollPX<max){
            $("#page8_opacity").css({"opacity": (scrollPX-min)/1000});
        }if(scrollPX>max){
            $("#page8_opacity").css({"opacity": 1});
        }
	});
}); 