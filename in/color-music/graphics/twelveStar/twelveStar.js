(function() {
    var canvasTS = document.getElementById("canvasTS"),
    contextTS = canvasTS.getContext("2d");
    
   function xposition(x) {
        var xpos = 150+Math.cos(x*Math.PI/6)*150;
        return(xpos);
   }
   function yposition(y) {
        var ypos = 150-Math.sin(y*Math.PI/6)*150;
        return(ypos);
   }
   contextTS.beginPath();
   contextTS.moveTo( xposition(3), yposition(3) );
   contextTS.lineTo( xposition(10), yposition(10) );
   contextTS.lineTo( xposition(5), yposition(5) );
   contextTS.lineTo( xposition(0), yposition(0) );
   contextTS.lineTo( xposition(7), yposition(7) );
   contextTS.lineTo( xposition(2), yposition(2) );
   contextTS.lineTo( xposition(9), yposition(9) );
   contextTS.lineTo( xposition(4), yposition(4) );
   contextTS.lineTo( xposition(11), yposition(11) );
   contextTS.lineTo( xposition(6), yposition(6) );
   contextTS.lineTo( xposition(1), yposition(1) );
   contextTS.lineTo( xposition(8), yposition(8) );
   contextTS.closePath();
   
   contextTS.lineWidth = 2;
   contextTS.strokeStyle = "rgb(128,128,128)";
   contextTS.lineJoin = "bevel";
   contextTS.stroke();
})();
