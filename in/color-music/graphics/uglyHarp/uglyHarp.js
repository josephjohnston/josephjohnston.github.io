(function() {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
            //context.fillStyle = "red";
            //context.fillRect(0,0,500,500);
    //background
    context.beginPath();
    context.moveTo( 506,  56);
    context.quadraticCurveTo(505, 107, 506, 273);
    context.quadraticCurveTo(248, 358, 56, 506);
    context.quadraticCurveTo(59, 281, 56, 56);
    context.closePath();
    
    context.fillStyle = "rgb(227,193,99)";
    context.fill();
    
    //harp
    context.beginPath();
    context.moveTo( 506,  56);
    context.quadraticCurveTo(505, 107, 506, 273);
    context.quadraticCurveTo(248, 358, 56, 506);
    context.quadraticCurveTo(59, 281, 56, 56);
    context.closePath();
    
    context.lineWidth = 56;
    context.strokeStyle = "rgb(179,120,70)";
    context.lineJoin = "round";
    context.stroke();
    
    //top brown line
    context.beginPath();
    context.moveTo(90, 73);
    context.lineTo(473, 73);
    
    context.lineWidth = 10;
    context.strokeStyle = "rgb(99,60,31)";
    context.lineCap = "round";
    context.stroke();
    
    //bottom brown line
    context.beginPath();
    context.moveTo(90, 465);
    context.quadraticCurveTo(253, 344, 473, 270);
    
    context.lineWidth = 10;
    context.strokeStyle = "rgb(99,60,31)";
    context.lineCap = "round";
    context.stroke();
    
    
    //strings
    context.beginPath();
    context.moveTo(101, 65);
    context.lineTo(101, 469);
    context.lineWidth = 4;
    context.strokeStyle = "rgb(70,70,70)";
    context.stroke();
    
    
    context.beginPath();
    //C
    context.moveTo(101, 65);
    context.lineTo(101, 469);
    //Db
    context.moveTo(131, 65);
    context.lineTo(131, 449);
    //D
    context.moveTo(161, 65);
    context.lineTo(161, 429);
    //Eb
    context.moveTo(191, 65);
    context.lineTo(191, 410);
    //E
    context.moveTo(221, 65);
    context.lineTo(221, 393);
    //F
    context.moveTo(251, 65);
    context.lineTo(251, 377);
    //Gb
    context.moveTo(281, 65);
    context.lineTo(281, 362);
    //G
    context.moveTo(311, 65);
    context.lineTo(311, 347);
    //Ab
    context.moveTo(341, 65);
    context.lineTo(341, 333);
    //A
    context.moveTo(371, 65);
    context.lineTo(371, 319);
    //Bb
    context.moveTo(401, 65);
    context.lineTo(401, 306);
    //B
    context.moveTo(431, 65);
    context.lineTo(431, 295);
    //C
    context.moveTo(461, 65);
    context.lineTo(461, 284);
    
    
    
    
    //top pegs
for (i=0; i<13; i++) {
    var xpos = 101+30*i; //32.625
    context.beginPath();
    context.arc(xpos, 52, 12, 0, 2*Math.PI, false);
    context.fillStyle = "rgb(60, 60, 60)";
    context.fill();
}
    
    //bottom pegs
    function yposition(y) {
        var ypos = 482.6-y;
        return(ypos);
    }
    function xposition(x) {
        var xpos = 101.25+30*x;
        return(xpos);
    }
    
            //var pegColor = "rgb(60, 60, 60)";
    
    context.beginPath();
    context.arc(xposition(0), yposition(0), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(1), yposition(20), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(2), yposition(40), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(3), yposition(59), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(4), yposition(76), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(5), yposition(92), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(6), yposition(107), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(7), yposition(122), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(8), yposition(136), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(9), yposition(150), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(10), yposition(163), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(11), yposition(174), 12, 0, 2*Math.PI, true);
    context.fill();
    
    context.beginPath();
    context.arc(xposition(12), yposition(185), 12, 0, 2*Math.PI, true);
    context.fill();
    
    //context.fillStyle = pegColor;
})();




    
    
    
    
    
    