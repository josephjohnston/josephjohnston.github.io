(function() {
    initCanvas();
    var canvasLeft = document.getElementById("canvasLeft"),
    context = canvasLeft.getContext("2d");
    
    function initCanvas(){
        context.fillStyle = 'white';
        context.fillRect(0,0,canvasLeft.width,canvasLeft.height);
        drawSineWave(50,'#ff0000');
        drawSineWave(100,'blue');
    }
    function drawSineWave(period,color){
        var amplitude = canvasLeft.height/2-5;
        context.beginPath();
        var x = 0, y = canvasLeft.height/2;
        context.moveTo(0,0);
        for(var i=0; i<1024; i++){
            context.lineTo(i+x,y+Math.sin(i*period*0.001)*amplitude);
        }
        context.strokeStyle = color;
        context.lineWidth = 10;
        context.lineCap = "round";
        context.stroke();
    }
    //soundWaves();
    //function soundWaves() {
        //var canvasLeft = document.getElementById("canvasLeft"),
        //context = canvasLeft.getContext("2d");
        // bottom C
        /*context.beginPath();
        context.moveTo(-70, 100);
        context.quadraticCurveTo(-30, 260,  10, 100);
        context.quadraticCurveTo( 50, -60,  90, 100);
        context.quadraticCurveTo(130, 260, 170, 100);
        context.quadraticCurveTo(210, -60, 250, 100);
        context.quadraticCurveTo(290, 260, 330, 100);
        context.quadraticCurveTo(370, -60, 410, 100);
        context.quadraticCurveTo(450, 260, 490, 100);
        context.quadraticCurveTo(530, -60, 570, 100);
        context.lineWidth = 10;
        context.strokeStyle = "blue";
        context.lineCap = "round";
        context.stroke();
        
        var canvasRight = document.getElementById("canvasRight"),
        context = canvasRight.getContext("2d");
        //top C
        context.beginPath();
        context.moveTo(-20, 100);
        context.quadraticCurveTo(-10, 260,  10, 100);
        context.quadraticCurveTo( 30, -60,  50, 100);
        context.quadraticCurveTo( 70, 260,  90, 100);
        context.quadraticCurveTo(110, -60, 130, 100);
        context.quadraticCurveTo(150, 260, 170, 100);
        context.quadraticCurveTo(190, -60, 210, 100);
        context.quadraticCurveTo(230, 260, 250, 100);
        context.quadraticCurveTo(270, -60, 290, 100);
        context.quadraticCurveTo(310, 260, 330, 100);
        context.quadraticCurveTo(350, -60, 370, 100);
        context.quadraticCurveTo(390, 260, 410, 100);
        context.quadraticCurveTo(430, -60, 450, 100);
        context.quadraticCurveTo(470, 260, 490, 100);
        context.quadraticCurveTo(510, -60, 530, 100);
        context.lineWidth = 10;
        context.strokeStyle = 'blue';
        context.lineCap = "round";
        context.stroke();
        
        
        var canvasLeft = document.getElementById("canvasLeft"),
        context = canvasLeft.getContext("2d");
        // note right
        var i = 6/5;
        var h = 50-30*i;
        context.beginPath();
        context.moveTo(-30*i-h, 100);
        context.quadraticCurveTo(-10*i+h, 260,  10*i+h, 100);
        context.quadraticCurveTo( 30*i+h, -60,  50*i+h, 100);
        context.quadraticCurveTo( 70*i+h, 260,  90*i+h, 100);
        context.quadraticCurveTo(110*i+h, -60, 130*i+h, 100);
        context.quadraticCurveTo(150*i+h, 260, 170*i+h, 100);
        context.quadraticCurveTo(190*i+h, -60, 210*i+h, 100);
        context.quadraticCurveTo(230*i+h, 260, 250*i+h, 100);
        context.quadraticCurveTo(270*i+h, -60, 290*i+h, 100);
        context.quadraticCurveTo(310*i+h, 260, 330*i+h, 100);
        context.quadraticCurveTo(350*i+h, -60, 370*i+h, 100);
        context.quadraticCurveTo(390*i+h, 260, 410*i+h, 100);
        context.quadraticCurveTo(430*i+h, -60, 450*i+h, 100);
        context.quadraticCurveTo(470*i+h, 260, 490*i+h, 100);
        context.lineWidth = 10;
        context.strokeStyle = 'red';
        context.lineCap = "round";
        context.stroke();
    
        var canvasRight = document.getElementById("canvasRight"),
        context = canvasRight.getContext("2d");
        // note left
        var i = 6/5;
        var h = 30*i-30;
        context.beginPath();
        context.moveTo(-30*i-h, 100);
        context.quadraticCurveTo(-10*i-h, 260,  10*i-h, 100);
        context.quadraticCurveTo( 30*i-h, -60,  50*i-h, 100);
        context.quadraticCurveTo( 70*i-h, 260,  90*i-h, 100);
        context.quadraticCurveTo(110*i-h, -60, 130*i-h, 100);
        context.quadraticCurveTo(150*i-h, 260, 170*i-h, 100);
        context.quadraticCurveTo(190*i-h, -60, 210*i-h, 100);
        context.quadraticCurveTo(230*i-h, 260, 250*i-h, 100);
        context.quadraticCurveTo(270*i-h, -60, 290*i-h, 100);
        context.quadraticCurveTo(310*i-h, 260, 330*i-h, 100);
        context.quadraticCurveTo(350*i-h, -60, 370*i-h, 100);
        context.quadraticCurveTo(390*i-h, 260, 410*i-h, 100);
        context.quadraticCurveTo(430*i-h, -60, 450*i-h, 100);
        context.quadraticCurveTo(470*i-h, 260, 490*i-h, 100);
        context.lineWidth = 10;
        context.strokeStyle = 'red';
        context.lineCap = "round";
        context.stroke();
    } */
})();


