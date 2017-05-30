(function() { 
    var canvas = document.getElementById("canvasArrow"),
    context = canvas.getContext("2d");
    
    //context.fillStyle = "red";
    //context.fillRect(0,0,550,550);
    
    //triangle
    context.beginPath();
    context.moveTo(90,550);
    context.lineTo(45,525);
    context.lineTo(90,500);
    context.closePath();
    
    context.fillStyle = "rgb(128,128,128)";
    context.fill();
     
    //line
    context.beginPath();
    context.moveTo(420,5);
    context.quadraticCurveTo(-60,80,72,525);
    
    context.lineWidth = 6;
    context.strokeStyle = "rgb(128,128,128)";
    context.lineCap = "round";
    context.stroke();
    

    var noteNames = ["#A","#D","#G","#C","#F","#Bb","#Eb","#Ab","#Db","#Gb","#B","#E"];
    var colors = [
        [255,100,  0],
        [255,153,  0],
        [255,198,  0],
        [255,255, 11],
        [170,255,  0],
        [  2,219,  0],
        [  0,199,166],
        [ 26,142,255],
        [ 74, 31,255],
        [138,  0,241],
        [219,  0,215],
        [255,  0,100]];

    $(document).ready(function() {
        
        $("#diagonal1").hide();
        $("#show1").click(function() {
            $("#diagonal1").fadeIn("slow");
        });
        
        $("#horizontalTop").hide();
        $("#horizontalBottom").hide();
        $("#show2").click(function() {
            $("#horizontalTop").fadeIn("slow");
            $("#horizontalBottom").fadeIn("slow");
        });
        
        
        
        for (var i = 0; i < 5; i++) {
            var cWidth = $('#reference').width();
            var cHeight = $('#reference').height();
            var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('.circles').width()/2;
            var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('.circles').height()/2-90;
            var selector = noteNames[i];
            $(selector).css('left', xpos+'px');
            $(selector).css('top', ypos+'px');
            var c = colors[i];
            $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
            
        }
        for (var i = 5; i < 10; i++) {
            var cWidth = $('#reference').width();
            var cHeight = $('#reference').height();
            var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('.circles').width()/2;
            var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('.circles').height()/2;
            var selector = noteNames[i];
            $(selector).css('left', xpos+'px');
            $(selector).css('top', ypos+'px');
            var c = colors[i];
            $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
            
        }
        for (var i = 10; i < 12; i++) {
            var cWidth = $('#reference').width();
            var cHeight = $('#reference').height();
            var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('.circles').width()/2;
            var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('.circles').height()/2-90;
            var selector = noteNames[i];
            $(selector).css('left', xpos+'px');
            $(selector).css('top', ypos+'px');
            var c = colors[i];
            $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
            
        }
    });
})();    
    
    
    
    
    
    