window.addEventListener('scroll',function(){
  var bodyEl = document.querySelector('body');
  var bodyHeight = bodyEl.offsetHeight;
  var scrollable = bodyHeight - window.innerHeight;
  var progressEl = document.querySelector('.progress');
  var per = Math.floor(window.scrollY / scrollable * 100) + '%';
  //progressEl.style.width = per;
});

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Sequence 1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('js_main');
var ctx = canvas.getContext('2d');

img.src = "./img/main.jpg";

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        if (imgNum > 1) {
            imgNum = 1;
        }
        
        player(imgNum);
        imgNum++;
    }, 28);
}

function player(num) {
    img.src = "./img/main.jpg";
}

img.addEventListener('load' ,function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});

/*
// Sequence 1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('js_main');
var ctx = canvas.getContext('2d');

img.src = "./img/main/main (1).jpg";

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        if (imgNum > 499) {
            imgNum = 1;
        }
        
        player(imgNum);
        imgNum++;
    }, 28);
}

function player(num) {
    img.src = "./img/main/main (" + num + ").jpg";
}

img.addEventListener('load' ,function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});*/

/////////// main_text3 ////////////

var imgNum3 = 0;
var img3 = new Image();
var canvas3 = document.getElementById('main_text');
var ctx3 = canvas3.getContext('2d');

img3.src = "./img/main_text/main_text (1).png";

playSequence2();

function playSequence2() {
    var timer3 = setInterval(function() {
        if (imgNum3 > 90) {
            imgNum3 = 91;
        }
        
        player3(imgNum3);
        imgNum3++;
    }, 30);
}

function player3(num) {
    img3.src = "./img/main_text/main_text (" + num + ").png";
}

img3.addEventListener('load' ,function(e) {
    ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
    ctx3.drawImage(img3, 0, 0);
});

///////////// page5_2 /////////////
//////////////resize///////////////
function resize() {

    var canvas = document.getElementById('page5');
    var canvasRatio = canvas.height / canvas.width;
    var windowRatio = window.innerHeight / window.innerWidth;
    var width;
    var height;

    if (windowRatio < canvasRatio) {
        height = window.innerHeight;
        width = height / canvasRatio;
    } else {
        width = window.innerWidth;
        height = width * canvasRatio;
    }

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
};

window.addEventListener('resize', resize, false);


var imgNum2 = 0;
var img2 = new Image();
var canvas2 = document.getElementById('page5');
var ctx2 = canvas2.getContext('2d');
var scrollYPos;

//var canvas.height=window.innerHeight*800/1920;
//var canvas.width=window.innerWidth*1000/1080;

img2.src = "./img/page5/page5 (1).jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round((window.scrollY/20)-190);
    
    // play once
    if (scrollYPos == 1) scrollYPos = 1;
    if (scrollYPos > 168) scrollYPos = 168;
    
    // play continuously
    scrollYPos = scrollYPos % 168;
    
    player2(scrollYPos);
})

function player2(num) {
    img2.src = "./img/page5/page5 (" + num + ").jpg";
}

img2.addEventListener('load' ,function(e) {
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.drawImage(img2, 0, 0);
});


////////////page4_arrow_4////////////////
var imgNum4 = 0;
var img4 = new Image();
var canvas4 = document.getElementById('page4_arrow');
var ctx4 = canvas4.getContext('2d');

img4.src = "./img/page4_arrow/arrow (1).png";

playSequence4();

function playSequence4() {
    var timer4 = setInterval(function() {
        if (window.scrollY>2100){
            if (imgNum4 > 75) {
                imgNum4 = 75;
            }
        
            player4(imgNum4);
            imgNum4++;
        }
        if (window.scrollY<2100) {
                imgNum4 = 1;
        }
    }, 40);
}

function player4(num) {
    img4.src = "./img/page4_arrow/arrow (" + num + ").png";
}

img4.addEventListener('load' ,function(e) {
    ctx4.clearRect(0, 0, ctx4.canvas.width, ctx4.canvas.height);
    ctx4.drawImage(img4, 0, 0);
});

////////// page8_5 //////////

var imgNum5 = 0;
var img5 = new Image();
var canvas5 = document.getElementById('page8');
var ctx5 = canvas5.getContext('2d');
var scrollYPos;

img5.src = "./img/page8/page8 (1).jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round((window.scrollY/20)-490);
    
    // play once
    if (scrollYPos == 1) scrollYPos = 1;
    if (scrollYPos > 365) scrollYPos = 365;
    
    // play continuously
    scrollYPos = scrollYPos % 365;
    
    player5(scrollYPos);
})

function player5(num) {
    img5.src = "./img/page8/page8 (" + num + ").jpg";
}

img5.addEventListener('load' ,function(e) {
    ctx5.clearRect(0, 0, ctx5.canvas.width, ctx5.canvas.height);
    ctx5.drawImage(img5, 0, 0);
});

////////// page7_phone01_6 //////////

var imgNum6 = 0;
var img6 = new Image();
var canvas6 = document.getElementById('page7_phone01');
var ctx6 = canvas6.getContext('2d');

img6.src = "./img/page7_phone01/page7_phone01 (1).jpg"

playSequence6();

function playSequence6() {
    var timer6 = setInterval(function() {
        if (window.scrollY>10000){
            if (imgNum6 > 239) {
                imgNum6 = 239;
            }
        
            player6(imgNum6);
            imgNum6++;
        }
        if (window.scrollY<10000) {
                imgNum6 = 1;
        }
    }, 30);
}

function player6(num) {
    img6.src = "./img/page7_phone01/page7_phone01 (" + num + ").jpg";
}

img6.addEventListener('load' ,function(e) {
    ctx6.clearRect(0, 0, ctx6.canvas.width, ctx6.canvas.height);
    ctx6.drawImage(img6, 0, 0);
});

////////// page7_pnone02_7 //////////

/*var imgNum7 = 0;
var img7 = new Image();
var canvas7 = document.getElementById('page7_phone02');
var ctx7 = canvas7.getContext('2d');
var scrollYPos;

img7.src = "./img/page7_phone02/page7_phone01 (1).png";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round((window.scrollY/20)-700);
    
    // play once
    if (scrollYPos == 1) scrollYPos = 1;
    if (scrollYPos > 150) scrollYPos = 150;
    
    // play continuously
    scrollYPos = scrollYPos % 150;
    
    player7(scrollYPos);
})

function player7(num) {
    img7.src = "./img/page7_phone02/page7_phone01 (" + num + ").png";
}

img7.addEventListener('load' ,function(e) {
    ctx7.clearRect(0, 0, ctx7.canvas.width, ctx7.canvas.height);
    ctx7.drawImage(img7, 0, 0);
});*/

////////////page7_phone2_8////////////////
var imgNum8 = 0;
var img8 = new Image();
var canvas8 = document.getElementById('page7_phone02');
var ctx8 = canvas8.getContext('2d');

img8.src = "./img/page7_phone02/page7_phone02 (1).png"

playSequence8();

function playSequence8() {
    var timer8 = setInterval(function() {
        if (window.scrollY>11000){
            if (imgNum8 > 442) {
                imgNum8 = 442;
            }
        
            player8(imgNum8);
            imgNum8++;
        }
        if (window.scrollY<11000) {
                imgNum8 = 1;
        }
    }, 30);
}

function player8(num) {
    img8.src = "./img/page7_phone02/page7_phone02 (" + num + ").png";
}

img8.addEventListener('load' ,function(e) {
    ctx8.clearRect(0, 0, ctx8.canvas.width, ctx8.canvas.height);
    ctx8.drawImage(img8, 0, 0);
});

////////////page7_phone3_9////////////////
var imgNum9 = 0;
var img9 = new Image();
var canvas9 = document.getElementById('page7_phone03');
var ctx9 = canvas9.getContext('2d');

img9.src = "./img/page7_phone03/page7_phone03 (1).png"

playSequence9();

function playSequence9() {
    var timer9 = setInterval(function() {
        if (window.scrollY>12000){
            if (imgNum9 > 354) {
                imgNum9 = 354;
            }
        
            player9(imgNum9);
            imgNum9++;
        }
        if (window.scrollY<12000) {
                imgNum9 = 1;
        }
    }, 30);
}

function player9(num) {
    img9.src = "./img/page7_phone03/page7_phone03 (" + num + ").png";
}

img9.addEventListener('load' ,function(e) {
    ctx9.clearRect(0, 0, ctx9.canvas.width, ctx9.canvas.height);
    ctx9.drawImage(img9, 0, 0);
});

/*
// Sequence 2
var imgNum2 = 0;
var img2 = new Image();
var canvas2 = document.getElementById('screen2');
var ctx2 = canvas2.getContext('2d');
var scrollYPos;

img2.src = "./images/text/0.jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY/20);
    
    // play once
//    if (scrollYPos == 0) scrollYPos = 0;
//    if (scrollYPos > 63) scrollYPos = 63;
    
    // play continuously
    scrollYPos = scrollYPos % 63;
    player2(scrollYPos);
})

function player2(num) {
    img2.src = "./images/text/" + num + ".jpg";
}

img2.addEventListener('load' ,function(e) {
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.drawImage(img2, 0, 0);
});
*/











