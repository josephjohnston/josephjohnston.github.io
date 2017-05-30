(function() {
    init();
    function init() {
        applyingNumbers();
        applyingMonths();
    }
    function applyingNumbers() {
        //APPLYING NUMBERS
        var canvasAP = document.getElementById("canvasAP"),
            context = canvasAP.getContext("2d");
        for(var i=0; i<12; i++) {
            var plus = 86*i;
            context.moveTo(40+plus,100);
            context.lineTo(40+plus, 20);
            context.lineCap = "round";
            context.lineWidth = "6";
            context.strokeStyle = "gray";
            context.stroke();
        }
        for(var i=0; i<12; i++) {
            var plus = 86*i;
            context.moveTo(40+plus,120);
            context.lineTo(20+plus,80);
            context.lineTo(60+plus,80);
            context.closePath();
            context.fillStyle="gray";
            context.fill();
        }
    }
    function applyingMonths() {
        //APPLYING MONTHS
        var canvasAM = document.getElementById("canvasAM"),
            context = canvasAM.getContext("2d");
            for(var i=0; i<12; i++) {
            var plus = 86*i;
            context.moveTo(40+plus,100);
            context.lineTo(40+plus, 20);
            context.lineCap = "round";
            context.lineWidth = "6";
            context.strokeStyle = "gray";
            context.stroke();
        }
        for(var i=0; i<12; i++) {
            var plus = 86*i;
            context.moveTo(40+plus,120);
            context.lineTo(20+plus,80);
            context.lineTo(60+plus,80);
            context.closePath();
            context.fillStyle="gray";
            context.fill();
        }
    }
})();