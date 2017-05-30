(function() {
    rearrangement();
    function rearrangement() {
        var canvasAC = document.getElementById("canvasAC"),
            contextAC = canvasAC.getContext("2d");
            //LINES
            contextAC.beginPath();
            contextAC.moveTo(42,0);
            contextAC.lineTo(355,200);
            contextAC.moveTo(128,0);
            contextAC.lineTo(558,200);
            contextAC.moveTo(213,0);
            contextAC.lineTo(413,200);
            contextAC.moveTo(298,0);
            contextAC.lineTo(616,200);
            contextAC.moveTo(383,0);
            contextAC.lineTo(471,200);
            contextAC.moveTo(468,0);
            contextAC.lineTo(674,200);
            contextAC.moveTo(553,0);
            contextAC.lineTo(529,200);
            contextAC.moveTo(638,0);
            contextAC.lineTo(386,200);
            contextAC.moveTo(723,0);
            contextAC.lineTo(589,200);
            contextAC.moveTo(808,0);
            contextAC.lineTo(444,200);
            contextAC.moveTo(893,0);
            contextAC.lineTo(645,200);
            contextAC.moveTo(978,0);
            contextAC.lineTo(500,200);
            contextAC.lineWidth = 2;
            contextAC.strokeStyle = "rgb(128,128,128)";
            contextAC.lineCap = "round";
            contextAC.lineJoin = "bevel";
            contextAC.stroke();
        var noteNames = ["#C","#G","#D","#A","#E","#B","#Gb","#Db","#Ab","#Eb","#Bb","#F"];
        var colors = [
            [255,255, 11],
            [255,198,  0],
            [255,153,  0],
            [255,100,  0],
            [255,  0,100],
            [219,  0,215],
            [138,  0,241],
            [ 74, 31,255],
            [ 26,142,255],
            [  0,199,166],
            [  2,219,  0],
            [170,255,  0]];
        for (var i = 0; i < 12; i++) {
            var cWidth = $('#reference').width();
            var cHeight = $('#reference').height();
            var xpos = 86*i - 1;
            var ypos = 0;
            var selector = noteNames[i];
            $(selector).css('left', xpos+'px');
            $(selector).css('top', ypos+'px');
            var c = colors[i];
            $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
        }
    }
})();





