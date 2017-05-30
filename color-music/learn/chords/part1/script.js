(function() {
    var canvas = document.getElementById("canvasBigCircle"),
    context = canvas.getContext("2d");
    //context.fillStyle = "red";
    //context.fillRect(0,0,600,700);
    
    context.font = "48px HelveticaNeue-CondensedBlack";
    context.fillStyle = "rgb(52,52,52)";
    context.fillText("Every other note of...",100,64);
    
    context.fillStyle = "rgb(255,153,0)";
    context.fillRect(200,150,200,200);
    context.font = "36px HelveticaNeue-CondensedBlack";
    context.fillStyle = "white";
    context.fillText("Circle of",240,250);
    context.fillText("Fifths",260,290);
    
    context.fillStyle = "rgb(2,219,0)";
    context.fillRect(400,400,200,200);
    context.font = "36px HelveticaNeue-CondensedBlack";
    context.fillStyle = "white";
    context.fillText("Diatonic",440,500);
    context.fillText("Scale",460,540);
    
    context.fillStyle = "rgb(138,0,241)";
    context.fillRect(0,400,200,200);
    context.font = "36px HelveticaNeue-CondensedBlack";
    context.fillStyle = "white";
    context.fillText("Chord",50,500);
    context.fillText("Structure",30,540);

    
    
    context.beginPath();
    context.moveTo(100,380);
    context.lineTo(100,250);
    context.lineTo(180,250);
    context.lineTo(150,230);
    context.lineTo(150,270);
    context.lineTo(180,250);
    context.lineTo(180,250);
    context.lineTo(100,250);
    context.closePath();
    context.fillStyle="rgb(150,150,150)";
    context.strokeStyle = "rgb(150,150,150)";
    context.lineWidth = 8;
    context.lineJoin = "round";
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.moveTo(420,250);
    context.lineTo(500,250);
    context.lineTo(500,380);
    context.lineTo(480,350);
    context.lineTo(520,350);
    context.lineTo(500,380);
    context.lineTo(500,250);
    context.lineTo(420,250);
    context.closePath();
    context.fillStyle="rgb(150,150,150)";
    context.strokeStyle = "rgb(150,150,150)";
    context.lineWidth = 8;
    context.lineJoin = "round";
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(380,500);
    context.lineTo(220,500);
    context.lineTo(250,520);
    context.lineTo(250,480);
    context.lineTo(220,500);
    context.closePath();
    context.fillStyle="rgb(150,150,150)";
    context.fill();
    context.strokeStyle = "rgb(150,150,150)";
    context.lineWidth = 8;
    context.lineJoin = "round";
    context.stroke();
    
    
    $(document).ready(function() {
        
        $("#show1").click(function() {
            $("#diagonal1").fadeIn("slow");
        });
        
        $("#show2").click(function() {
            $("#horizontalTop").fadeIn("slow");
            $("#horizontalBottom").fadeIn("slow");
        });
        
        $("#show3").click(function() {
            $("#diagonal2").fadeIn("slow");
        });
        
    });
})();