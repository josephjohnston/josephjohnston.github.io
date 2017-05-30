(function() {
    $(document).ready(function() {
        //POPUP BOX
    
        $("#subheader").click(function() {
            $("#popup").fadeIn();
        });
        $("#popup>a").click(function() {
            $("#popup").fadeOut();
        });
        //TEST FOR CHROME
        var play = document.getElementById('play');
        play.href="";
        var isChrome = /chrome/.test(navigator.userAgent.toLowerCase());
        $("#play").click(function() {
            if(isChrome === true) {
                play.href = "http://mudcu.be/piano/"; 
            } else {
                play.removeAttribute("href");
                $("#popup").fadeIn();
            }
        });
        //ABOUT AND CONTACT BUTTONS
        $("#aboutButt, #contactButt").click(function() {
            scrollToElement($("#aboutDescrip"),68);
        });
        $("#returnTop").click(function() {
            scrollToElement($("#navbar"),14);
        });
    });
    
    function scrollToElement(target,topoffset) {
        var speed = 2000;
        var destination = $(target).offset().top - topoffset;
        $('html:not(:animated),body:not(:animated)').animate({scrollTop:destination},speed,function() {
            window.location.hash = target;
        });
        return false;
    }

    var canvas = document.getElementById("computerScreen"),
    
    context = canvas.getContext("2d");
    //context.fillStyle="red"
    //context.fillRect(0,0,800,800);
    //TOP FRAME
    context.beginPath();
    context.moveTo(400,0);
    context.lineTo(780,0);
    context.quadraticCurveTo(800,0,800,20);
    context.lineTo(800,420);
    context.lineTo(0,420);
    context.lineTo(0,20);
    context.quadraticCurveTo(0,0,20,0);
    context.closePath();
    context.fillStyle = "rgb(52,52,52)";
    context.fill();
    //CAMERA
    context.beginPath();
    context.arc(400,12.5,6,0,2*Math.PI,false);
    context.fillStyle = "black";
    context.fill();
    context.arc(380,12.5,3,0,2*Math.PI,false);
    context.fillStyle = "black";
    context.fill();
    //BOTTOM FRAME
    context.beginPath();
    context.moveTo(400,420);
    context.lineTo(800,420);
    context.lineTo(800,460);
    context.quadraticCurveTo(800,480,780,480);
    context.lineTo(20,480);
    context.quadraticCurveTo(0,480,0,460);
    context.lineTo(0,420);
    context.closePath();
    context.fillStyle = "rgb(77,77,77)";
    context.fill();
    //BEZEL
    /*context.beginPath();
    context.moveTo(400,25);
    context.lineTo(770,25);
    context.lineTo(770,395);
    context.lineTo(30,395);
    context.lineTo(30,25);
    context.closePath();
    context.fillStyle = "black";
    context.fill();*/
    //BASE
    context.beginPath();
    context.moveTo(400,480);
    //to top right
    context.lineTo(475,480);
    //to mid right corner
    context.lineTo(485,550);
    //to bottom right
    context.lineTo(525,600);
    //to bottom left
    context.lineTo(275,600);
    //to mid left corner
    context.lineTo(315,550);
    //to top left corner
    context.lineTo(325,480);
    context.closePath();
    context.shadowColor = "black";
    context.shadowBlur = 150;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillStyle = "rgb(103,103,103)";
    context.fill();
    //bottom line
    context.beginPath();
    context.moveTo(275,600);
    context.lineTo(525,600);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.stroke();
})();
    
    
    
    
    