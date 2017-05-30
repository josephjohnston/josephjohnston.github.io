(function() {
    allTheSame();
    function allTheSame() {
        var canvasAS = document.getElementById("canvasAS"),
            context = canvasAS.getContext("2d");
        //TRIANGLES
        for (var i=0; i<8; i++) {
            
            var xBL = 22 + 27.5*i;
            var xTL = xBL + 5;
            var xML = xTL + 8;
            var yBL = 100;
            var yTL = 84;
            var yML = 90;
            
            var xBR = 131 + 27.5*i;
            var xTR = xBR - 5;
            var xMR = xTR - 8;
            var yBR = 100;
            var yTR = 84;
            var yMR = 90;
            
            var xLL = xTL + 4;
            var yLL = 87;
            var xLM = xBL + 66;
            var yLM = 20;
            var xLR = xTR - 4;
            var yLR = 87;
        
            context.beginPath();
            context.moveTo(xBL,yBL);
            context.lineTo(xTL,yTL);
            context.lineTo(xML,yML);
            context.closePath();
            
            context.fillStyle = "rgb(128,128,128)";
            context.fill();
            
            context.beginPath();
            context.moveTo(xBR,yBR);
            context.lineTo(xTR,yTR);
            context.lineTo(xMR,yMR);
            context.closePath();
            
            context.fillStyle = "rgb(128,128,128)";
            context.fill();
            
            context.beginPath();
            context.moveTo(xLL,yLL);
            context.quadraticCurveTo(xLM,yLM,xLR,yLR);
            
            context.lineWidth = 3;
            context.strokeStyle = "rgb(128,128,128)";
            context.stroke();
        }   
    }
})();





