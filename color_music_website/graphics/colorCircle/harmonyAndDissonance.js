(function() {
    harmonyAndDissonance();
    function harmonyAndDissonance() {
        var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
        function xposition(x) {
            var xpos = 150+Math.cos(x*Math.PI/6)*150;
            return(xpos);
        }
        function yposition(y) {
            var ypos = 150-Math.sin(y*Math.PI/6)*150;
            return(ypos);
        }
        //C to B line
        var grad= context.createLinearGradient(xposition(3), yposition(3), xposition(10), yposition(10) );
        grad.addColorStop(0, "rgb(255,255,11)");
        grad.addColorStop(1, "rgb(219,0,215)");
        context.strokeStyle = grad;
        context.beginPath();
        context.moveTo( xposition(3), yposition(3) );
        context.lineTo( xposition(10), yposition(10) );
        context.lineWidth = 12;
        context.stroke();
        //C to Eb line
        var grad= context.createLinearGradient(xposition(3), yposition(3), xposition(6), yposition(6) );
        grad.addColorStop(0, "rgb(255,255,11)");
        grad.addColorStop(1, "rgb(0,199,166)");
        context.strokeStyle = grad;
        context.beginPath();
        context.moveTo( xposition(3), yposition(3) );
        context.lineTo( xposition(6), yposition(6) );
        context.lineWidth = 12;
        context.stroke();
    }
})();