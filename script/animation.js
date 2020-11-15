$(document).ready(function() {
  $('#main_arrow1').css('opacity', 0);
  $('#main_arrow1').waypoint(function() {
    $('#main_arrow1').addClass('fadeInLeft');
  }, {
    offset: '50%'
  });
});

$(document).ready(function() {
  $('#main_arrow2').css('opacity', 0);
  $('#main_arrow2').waypoint(function() {
    $('#main_arrow2').addClass('fadeInRight');
  }, {
    offset: '50%'
  });
});

$(document).ready(function() {
  $('#page2').css('opacity', 0);
  $('#page2').waypoint(function() {
    $('#page2').addClass('fadeInUp');
  }, {
    offset: '80%'
  });
});

$(document).ready(function() {
  $('#page2_text').css('opacity', 0);
  $('#page2_text').waypoint(function() {
    $('#page2_text').addClass('fadeIn');
  }, {
    offset: '60%'
  });
});

$(document).ready(function() {
  $('#page3').css('opacity', 0);
  $('#page3').waypoint(function() {
    $('#page3').addClass('fadeInUp');
  }, {
    offset: '50%'
  });
});

$(document).ready(function() {
  $('#page4_text').css('opacity', 0);
  $('#page4_text').waypoint(function() {
    $('#page4_text').addClass('fadeInLeft');
  }, {
    offset: '50%'
  });
});


$(document).ready(function() {
  $('#page5').css('opacity', 0);
  $('#page5').waypoint(function() {
    $('#page5').addClass('fadeInUp');
  }, {
    offset: '50%'
  });
});

$(document).ready(function() {
  $('#page6').css('opacity', 0);
  $('#page6').waypoint(function() {
    $('#page6').addClass('fadeIn');
  }, {
    offset: '50%'
  });
});

$(document).ready(function() {
  $('#page6_text').css('opacity', 0);
  $('#page6_text').waypoint(function() {
    $('#page6_text').addClass('fadeInUp');
  }, {
    offset: '80%'
  });
});

$(document).ready(function() {
  $('#page6_arrow').css('opacity', 0);
  $('#page6_arrow').waypoint(function() {
    $('#page6_arrow').addClass('fadeIn');
  }, {
    offset: '80%'
  });
});

$(document).ready(function() {
  $('#page6_arrow2').css('opacity', 0);
  $('#page6_arrow2').waypoint(function() {
    $('#page6_arrow2').addClass('fadeIn');
  }, {
    offset: '80%'
  });
});

/*$(document).ready(function() {
  $('#page7_info').css('opacity', 0);
  $('#page7_info').waypoint(function() {
    $('#page7_info').addClass('fadeInUp');
  }, {
    offset: '80%'
  });
});

$(document).ready(function() {
  $('#page7_arrow').css('opacity', 0);
  $('#page7_arrow').waypoint(function() {
    $('#page7_arrow').addClass('fadeIn');
  }, {
    offset: '80%'
  });
});*/

$(document).ready(function() {
  $('#page7_circle').css('opacity', 0);
  $('#page7_circle').waypoint(function() {
    $('#page7_circle').addClass('fadeIn');
  }, {
    offset: '10%'
  });
});

$(document).ready(function() {
  $('#page7_phone01').css('opacity', 0);
  $('#page7_phone01').waypoint(function() {
    $('#page7_phone01').addClass('fadeInUp');
  }, {
    offset: '80%'
  });
});

$(document).ready(function() {
  $('#page7_phone02').css('opacity', 0);
  $('#page7_phone02').waypoint(function() {
    $('#page7_phone02').addClass('fadeInUp');
  }, {
    offset: '80%'
  });
});

$(document).ready(function() {
  $('#page7_phone03').css('opacity', 0);
  $('#page7_phone03').waypoint(function() {
    $('#page7_phone03').addClass('fadeInUp');
  }, {
    offset: '80%'
  });
});

/*$(document).ready(function() {
  $('#page7_arrow').css('opacity', 0);
  $('#page7_arrow').waypoint(function() {
    $('#page7_arrow').addClass('fadeOutUp');
  }, {
    offset: '15%'
  });
});*/

$(document).ready(function() {
  $('#page8_info').css('opacity', 1);
  $('#page8_info').waypoint(function() {
    $('#page8_info').addClass('fadeInUp');
  }, {
    offset: '50%'
  });
});


/*$(document).ready(function(){
	$(document).scroll(function(){
  	var scollHeight = $(document).height(); 
    var maxRotate = 30;
    var rotateVal =  5 + (($(document).scrollTop()* maxRotate) / scollHeight);
    
    $("#page1").css("transform", "rotate("+(-rotateVal)+"deg)");
    $("#page3").css("transform", "rotate("+(rotateVal)+"deg)");
  });
});*/
