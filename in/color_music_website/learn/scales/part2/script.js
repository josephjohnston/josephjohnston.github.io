(function() {
    $(document).ready(function() {
        //POPUP BOX
        $("#popup").hide();
        $("#subheader").click(function() {
            $("#popup").fadeIn();
        });
        $("#popup>a").click(function() {
            $("#popup").fadeOut();
        });
        //MAJOR MINOR MODE  
        $("#header").text("C Major");
        var radialGradient = "radial-gradient(rgb(255,255,255),rgb(50,50,50))";
        var linearGradient = "linear-gradient(rgb(255,255,255),rgb(127,127,127))";
        var mode = "major";
        var key = "C";
        function majorText() {
            window.setTimeout(function(){
                $("#pointer").css({width:0,height:0,'border-top':0,'border-right':'25px solid transparent',
                    'border-left':'25px solid transparent','border-bottom':'70px solid rgb(60,60,60)',
                    position:'relative',left:'116px',top:'90px'});
                $("#1").text("1");
                $("#2").text("2");
                $("#3").text("3");
                $("#4").text("4");
                $("#5").text("5");
                $("#6").text("6");
                $("#7").text("7");
            }, 1000);
        }
        function minorText () {
            window.setTimeout(function(){
                $("#pointer").css({width:0,height:0,'border-left':0,'border-top':'25px solid transparent',
                    'border-bottom':'25px solid transparent','border-right':'70px solid rgb(60,60,60)',
                    position:'relative',left:'100px',top:'115px'});
                $("#1").text("3");
                $("#2").text("4");
                $("#3").text("5");
                $("#4").text("6");
                $("#5").text("7");
                $("#6").text("1");
                $("#7").text("2");
            }, 1000);
        }
        $("#1").text("1");
        $("#2").text("2");
        $("#3").text("3");
        $("#4").text("4");
        $("#5").text("5");
        $("#6").text("6");
        $("#7").text("7");
        $("#pointer").css({width:0,height:0,'border-top':0,'border-right':'25px solid transparent',
            'border-left':'25px solid transparent','border-bottom':'70px solid rgb(60,60,60)',
            position:'relative',left:'116px',top:'90px'});
        $("#major").css("background",radialGradient);
        $("#minor").css("background",linearGradient);
        $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $(".keyC").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
        
        
        
        $("#major").click(function() {
            mode = "major";
            if(key==="C"){
                majorText();
                operateL(0,"rgb(255,255,11)"); 
                operateR(0,"rgb(255,255,11)"); 
                $("#header").text("C Major");
            }else if(key==="G"){
                majorText();
                operateL(1,"rgb(255,198,0)");
                operateR(7,"rgb(255,198,0)");
                $("#header").text("G Major");
            }else if(key==="D"){
                majorText();
                operateL(2,"rgb(255,153,0)");
                operateR(2,"rgb(255,153,0)");
                $("#header").text("D Major");
            }else if(key==="A"){
                majorText();
                operateL(3,"rgb(255,100,0)");
                operateR(9,"rgb(255,100,0)");
                $("#header").text("A Major");
            }else if(key==="E"){
                majorText();
                operateL(4,"rgb(255,0,100)");
                operateR(4,"rgb(255,0,100)");
                $("#header").text("E Major");
            }else if(key==="B"){
                majorText();
                operateL(5,"rgb(219,0,215)");
                operateR(11,"rgb(219,0,215)");
                $("#header").text("B Major");
            }else if(key==="Gb"){
                majorText();
                operateL(6,"rgb(138,0,241)");
                operateR(6,"rgb(138,0,241)");
                $("#header").text("Gb Major");
            }else if(key==="Db"){
                majorText();
                operateL(7,"rgb(74,31,255)");
                operateR(1,"rgb(74,31,255)");
                $("#header").text("Db Major");
            }else if(key==="Ab"){
                majorText();
                operateL(8,"rgb(26,142,255)");
                operateR(8,"rgb(26,142,255)");
                $("#header").text("Ab Major");
            }else if(key==="Eb"){
                majorText();
                operateL(9,"rgb(0,199,166)");
                operateR(3,"rgb(0,199,166)");
                $("#header").text("Eb Major");
            }else if(key==="Bb"){
                majorText();
                operateL(10,"rgb(2,219,0)");
                operateR(10,"rgb(2,219,0)");
                $("#header").text("Bb Major");
            }else if(key==="F"){
                majorText();
                operateL(11,"rgb(170,255,0)");
                operateR(5,"rgb(170,255,0)");
                $("#header").text("F Major");
            }
            
            $("#major").css("background",radialGradient);
            $("#minor").css("background",linearGradient);
        });
        $("#minor").click(function() {
            mode = "minor";
            if(key==="C"){
                minorText();
                operateL(9,"rgb(255,255,11)"); 
                operateR(3,"rgb(255,255,11)"); 
                $("#header").text("C Minor");
            }else if(key==="G"){
                minorText();
                operateL(10,"rgb(255,198,0)");
                operateR(10,"rgb(255,198,0)");
                $("#header").text("G Minor");
            }else if(key==="D"){
                minorText();
                operateL(11,"rgb(255,153,0)");
                operateR(5,"rgb(255,153,0)");
                $("#header").text("D Minor");
            }else if(key==="A"){
                minorText();
                operateL(0,"rgb(255,100,0)");
                operateR(0,"rgb(255,100,0)");
                $("#header").text("A Minor");
            }else if(key==="E"){
                minorText();
                operateL(1,"rgb(255,0,100)");
                operateR(7,"rgb(255,0,100)");
                $("#header").text("E Minor");
            }else if(key==="B"){
                minorText();
                operateL(2,"rgb(219,0,215)");
                operateR(2,"rgb(219,0,215)");
                $("#header").text("B Minor");
            }else if(key==="Gb"){
                minorText();
                operateL(3,"rgb(138,0,241)");
                operateR(9,"rgb(138,0,241)");
                $("#header").text("Gb Minor");
            }else if(key==="Db"){
                minorText();
                operateL(4,"rgb(74,31,255)");
                operateR(4,"rgb(74,31,255)");
                $("#header").text("Db Minor");
            }else if(key==="Ab"){
                minorText();
                operateL(5,"rgb(26,142,255)");
                operateR(11,"rgb(26,142,255)");
                $("#header").text("Ab Minor");
            }else if(key==="Eb"){
                minorText();
                operateL(6,"rgb(0,199,166)");
                operateR(6,"rgb(0,199,166)");
                $("#header").text("Eb Minor");
            }else if(key==="Bb"){
                minorText();
                operateL(7,"rgb(2,219,0)");
                operateR(1,"rgb(2,219,0)");
                $("#header").text("Bb Minor");
            }else if(key==="F"){
                minorText();
                operateL(8,"rgb(170,255,0)");
                operateR(8,"rgb(170,255,0)");
                $("#header").text("F Minor");
            }
            $("#minor").css("background",radialGradient);
            $("#major").css("background",linearGradient);
        });
        //INSIDE RIGHT
        $('#1').css({position:'absolute',left:110+Math.cos(-3*Math.PI/6)*110+13,bottom:110-Math.sin(-3*Math.PI/6)*110-2});
        $('#2').css({transform:'rotate(60deg)',position:'absolute',left:110+Math.cos(-1*Math.PI/6)*110+13,bottom:110-Math.sin(-1*Math.PI/6)*110-2});
        $('#3').css({transform:'rotate(120deg)',position:'absolute',left:110+Math.cos(-11*Math.PI/6)*110+13,bottom:110-Math.sin(-11*Math.PI/6)*110-2});
        $('#4').css({transform:'rotate(150deg)',position:'absolute',left:110+Math.cos(-10*Math.PI/6)*100+13,bottom:110-Math.sin(-10*Math.PI/6)*110-2});
        $('#5').css({transform:'rotate(210deg)',position:'absolute',left:110+Math.cos(-8*Math.PI/6)*110+13,bottom:110-Math.sin(-8*Math.PI/6)*110-2});
        $('#6').css({transform:'rotate(270deg)',position:'absolute',left:110+Math.cos(-6*Math.PI/6)*110+13,bottom:110-Math.sin(-6*Math.PI/6)*110-2});
        $('#7').css({transform:'rotate(330deg)',position:'absolute',left:110+Math.cos(-4*Math.PI/6)*110+13,bottom:110-Math.sin(-4*Math.PI/6)*110-2});
        //COLOR CIRCLES
        drawCircles();
        //LEFT WHEEL
        var rotationL;
        var toJumpL;
        var regularL;
        var wentL;
        clearRectL();
        toJumpL = 0;
        drawHOL(0,"yellow");
        wentL = 0;
        regularL = 0*30;
        rotationL = regularL - wentL;
        toJumpL = rotationL/30;
        wentL += rotationL;
        $('#HOL').css('transform','');
        $('#HOL').css('transition','');
        window.setTimeout(function(){
            $('#HOL').css('transform','rotate('+rotationL+'deg)');
            $('#HOL').css('transition','all 2s ease-in-out');
        }, 1);
        $('.keyC').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyC").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "C";
            if (mode==="major") {
                operateL(0,"rgb(255,255,11)");
                operateR(0,"rgb(255,255,11)");
                $("#header").text("C Major");
            } else if(mode==="minor") {
                operateL(9,"rgb(255,255,11)"); 
                operateR(3,"rgb(255,255,11)"); 
                $("#header").text("C Minor");
            }
        });
        $('.keyG').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyG").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "G";
            if (mode==="major") {
                operateL(1,"rgb(255,198,0)");
                operateR(7,"rgb(255,198,0)");
                $("#header").text("G Major");
            } else if(mode==="minor") {
                operateL(10,"rgb(255,198,0)");
                operateR(10,"rgb(255,198,0)");
                $("#header").text("G Minor");
            }
        });
        $('.keyD').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyD").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "D";
            if (mode==="major") {
                operateL(2,"rgb(255,153,0)");
                operateR(2,"rgb(255,153,0)");
                $("#header").text("D Major");
            } else if(mode==="minor") {
                operateL(11,"rgb(255,153,0)");
                operateR(5,"rgb(255,153,0)");
                $("#header").text("D Minor");
            }
        });
        $('.keyA').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyA").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "A";
            if (mode==="major") {
                operateL(3,"rgb(255,100,0)");
                operateR(9,"rgb(255,100,0)");
                $("#header").text("A Major");
            } else if(mode==="minor") {
                operateL(0,"rgb(255,100,0)");
                operateR(0,"rgb(255,100,0)");
                $("#header").text("A Minor");
            }
        });
        $('.keyE').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyE").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "E";
            if (mode==="major") {
                operateL(4,"rgb(255,0,100)");
                operateR(4,"rgb(255,0,100)");
                $("#header").text("E Major");
            } else if(mode==="minor") {
                operateL(1,"rgb(255,0,100)");
                operateR(7,"rgb(255,0,100)");
                $("#header").text("E Minor");
            }
        });
        $('.keyB').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyB").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "B";
            if (mode==="major") {
                operateL(5,"rgb(219,0,215)");
                operateR(11,"rgb(219,0,215)");
                $("#header").text("B Major");
            } else if(mode==="minor") {
                operateL(2,"rgb(219,0,215)");
                operateR(2,"rgb(219,0,215)");
                $("#header").text("B Minor");
            }
        });
        $('.keyGb').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyGb").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "Gb";
            if (mode==="major") {
                operateL(6,"rgb(138,0,241)");
                operateR(6,"rgb(138,0,241)");
                $("#header").text("Gb Major");
            } else if(mode==="minor") {
                operateL(3,"rgb(138,0,241)");
                operateR(9,"rgb(138,0,241)");
                $("#header").text("Gb Minor");
            }
        });
        $('.keyDb').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyDb").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "Db";
            if (mode==="major") {
                operateL(7,"rgb(74,31,255)");
                operateR(1,"rgb(74,31,255)");
                $("#header").text("Db Major");
            } else if(mode==="minor") {
                operateL(4,"rgb(74,31,255)");
                operateR(4,"rgb(74,31,255)");
                $("#header").text("Db Minor");
            }
        });
        $('.keyAb').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyAb").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "Ab";
            if (mode==="major") {
                operateL(8,"rgb(26,142,255)");
                operateR(8,"rgb(26,142,255)");
                $("#header").text("Ab Major");
            } else if(mode==="minor") {
                operateL(5,"rgb(26,142,255)");
                operateR(11,"rgb(26,142,255)");
                $("#header").text("Ab Minor");
            }
        });
        $('.keyEb').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyEb").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "Eb";
            if (mode==="major") {
                operateL(9,"rgb(0,199,166)");
                operateR(3,"rgb(0,199,166)");
                $("#header").text("Eb Major");
            } else if(mode==="minor") {
                operateL(6,"rgb(0,199,166)");
                operateR(6,"rgb(0,199,166)");
                $("#header").text("Eb Minor");
            }
        });
        $('.keyBb').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyBb").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "Bb";
            if (mode==="major") {
                operateL(10,"rgb(2,219,0)");
                operateR(10,"rgb(2,219,0)");
                $("#header").text("Bb Major");
            } else if(mode==="minor") {
                operateL(7,"rgb(2,219,0)");
                operateR(1,"rgb(2,219,0)");
                $("#header").text("Bb Minor");
            }
        });
        $('.keyF').click(function() {
            $("#scaleMenu td").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
            $(".keyF").css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
            key = "F";
            if (mode==="major") {
                operateL(11,"rgb(170,255,0)");
                operateR(5,"rgb(170,255,0)");
                $("#header").text("F Major");
            } else if(mode==="minor") {
                operateL(8,"rgb(170,255,0)");
                operateR(8,"rgb(170,255,0)");
                $("#header").text("F Minor");
            }
        });
        function operateL(numL,colorL) {
            clearRectL();
            drawHOL(toJumpL,colorL);
            regularL = numL*30;
            rotationL = regularL - wentL;
            toJumpL = rotationL/30;
            wentL += rotationL;
            $('#HOL').css('transform','');
            $('#HOL').css('transition','');
            window.setTimeout(function() {
                $('#HOL').css('transform','rotate('+rotationL+'deg)');
                $('#HOL').css('transition','all 2s ease-in-out');
            }, 1);
        }
        function clearRectL() {
            var canvasHOL = document.getElementById("canvasHOL"),
            context = canvasHOL.getContext("2d");
            context.clearRect(0,0,488,488);
        }
        function drawHOL(degL,colorL) {
            var canvasHOL = document.getElementById("canvasHOL"),
            context = canvasHOL.getContext("2d");
            context.translate(244,244);
            context.rotate(degL*Math.PI/6);
            context.translate(-244,-244);
            context.beginPath();
            context.arc(244,244,244,0,2*Math.PI,false);
            context.arc(190+Math.cos(0*Math.PI/6)*190+54,190-Math.sin(0*Math.PI/6)*190+54,47,0,2*Math.PI,true); //A
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(1*Math.PI/6)*190+54,190-Math.sin(1*Math.PI/6)*190+54,47,0,2*Math.PI,true); //D
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(2*Math.PI/6)*190+54,190-Math.sin(2*Math.PI/6)*190+54,47,0,2*Math.PI,true); //G
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(3*Math.PI/6)*190+54,190-Math.sin(3*Math.PI/6)*190+54,47,0,2*Math.PI,true); //C
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(4*Math.PI/6)*190+54,190-Math.sin(4*Math.PI/6)*190+54,47,0,2*Math.PI,true); //F
            context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(5*Math.PI/6)*190+54,190-Math.sin(5*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Bb
            //context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(6*Math.PI/6)*190+54,190-Math.sin(6*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Eb
            //context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(7*Math.PI/6)*190+54,190-Math.sin(7*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Ab
            //context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(8*Math.PI/6)*190+54,190-Math.sin(8*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Db
            //context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(9*Math.PI/6)*190+54,190-Math.sin(9*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Gb
            //context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(10*Math.PI/6)*190+54,190-Math.sin(10*Math.PI/6)*190+54,47,0,2*Math.PI,true); //B
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(11*Math.PI/6)*190+54,190-Math.sin(11*Math.PI/6)*190+54,47,0,2*Math.PI,true); //E
            context.shadowColor = 'black';
            context.shadowBlur = 5;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.fillStyle=colorL;
            context.fill();
        }
        //RIGHT WHEEL
        var rotationR;
        var toJumpR;
        var regularR;
        var wentR;
        clearRectR();
        toJumpR = 0;
        drawHOR(0,"rgb(255,255,11)");
        wentR = 0;
        regularR = 0*30;
        rotationR = regularR - wentR;
        toJumpR = rotationR/30;
        wentR += rotationR;
        $('#HOR').css('transform','');
        $('#HOR').css('transition','');
        window.setTimeout(function(){
            $('#HOR').css('transform','rotate('+rotationR+'deg)');
            $('#HOR').css('transition','all 2s ease-in-out');
        }, 1);
        function operateR(num,colorR) {
            clearRectR();
            drawHOR(toJumpR,colorR);
            regularR = num*30;
            rotationR = regularR - wentR;
            toJumpR = rotationR/30;
            wentR += rotationR;
            $('#HOR').css('transform','');
            $('#HOR').css('transition','');
            window.setTimeout(function(){
                $('#HOR').css('transform','rotate('+rotationR+'deg)');
                $('#HOR').css('transition','all 2s ease-in-out');
            }, 1);
            $('#INR').fadeTo(1000,0.0001);
            window.setTimeout(function(){
                $('#INR').css('transform','rotate('+regularR+'deg)');
                $('#INR').fadeTo(1000,1);
            }, 1000);
        }
        function clearRectR() {
            var canvasHOR = document.getElementById("canvasHOR"),
            context = canvasHOR.getContext("2d");
            context.clearRect(0,0,488,488);
        }
        function drawHOR(degR,colorR) {
            var canvasHOR = document.getElementById("canvasHOR"),
            context = canvasHOR.getContext("2d");
            //context.fillStyle="red";
            //context.fillRect(0,0,488,488);
            context.translate(244,244);
            context.rotate(degR*Math.PI/6);
            context.translate(-244,-244);
            context.beginPath();
            context.arc(244,244,244,0,2*Math.PI,false);
            //context.arc(190+Math.cos(0*Math.PI/6)*190+54,190-Math.sin(0*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Eb
            //context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(1*Math.PI/6)*190+54,190-Math.sin(1*Math.PI/6)*190+54,47,0,2*Math.PI,true); //D
            context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(2*Math.PI/6)*190+54,190-Math.sin(2*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Db
            //context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(3*Math.PI/6)*190+54,190-Math.sin(3*Math.PI/6)*190+54,47,0,2*Math.PI,true); //C
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(4*Math.PI/6)*190+54,190-Math.sin(4*Math.PI/6)*190+54,47,0,2*Math.PI,true); //B
            context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(5*Math.PI/6)*190+54,190-Math.sin(5*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Bb
            //context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(6*Math.PI/6)*190+54,190-Math.sin(6*Math.PI/6)*190+54,47,0,2*Math.PI,true); //A
            context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(7*Math.PI/6)*190+54,190-Math.sin(7*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Ab
            //context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(8*Math.PI/6)*190+54,190-Math.sin(8*Math.PI/6)*190+54,47,0,2*Math.PI,true); //G
            context.rect(0, 0, 0, 0);
            //context.arc(190+Math.cos(9*Math.PI/6)*190+54,190-Math.sin(9*Math.PI/6)*190+54,47,0,2*Math.PI,true); //Gb
            //context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(10*Math.PI/6)*190+54,190-Math.sin(10*Math.PI/6)*190+54,47,0,2*Math.PI,true); //F
            context.rect(0, 0, 0, 0);
            context.arc(190+Math.cos(11*Math.PI/6)*190+54,190-Math.sin(11*Math.PI/6)*190+54,47,0,2*Math.PI,true); //E
            context.shadowColor = 'black';
            context.shadowBlur = 5;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.fillStyle=colorR;
            context.fill();
            context.shadowColor = 'black';
            context.shadowBlur = 0;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.beginPath();
        } 
        function drawCircles() {
        var finoteNames = ["#fiA","#fiD","#fiG","#fiC","#fiF","#fiBb","#fiEb","#fiAb","#fiDb","#fiGb","#fiB","#fiE"];
        var ficolors = [
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
        var chnoteNames = ["#chEb","#chD","#chDb","#chC","#chB","#chBb","#chA","#chAb","#chG","#chGb","#chF","#chE"];
        var chcolors = [
            [  0,199,166],
            [255,153,  0],
            [ 74, 31,255],
            [255,255, 11],
            [219,  0,215],
            [  2,219,  0],
            [255,100,  0],
            [ 26,142,255],
            [255,198,  0],
            [138,  0,241],
            [170,255,  0],
            [255,  0,100]]; 
            //CIRCLE OF FIFTHS
            for (var i = 0; i < 12; i++) {
                var cWidth = $('#fiReference').width();
                var cHeight = $('#fiReference').height();
                var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('.ficircles').width()/2;
                var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('.ficircles').height()/2;
                var selector = finoteNames[i];
                $(selector).css('left', xpos+'px');
                $(selector).css('top', ypos+'px');
                var c = ficolors[i];
                $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
            }
            //CHROMATIC CIRCLE
            for (var i = 0; i < 12; i++) {
                var cWidth = $('#chReference').width();
                var cHeight = $('#chReference').height();
                var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('.chcircles').width()/2;
                var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('.chcircles').height()/2;
                var selector = chnoteNames[i];
                $(selector).css('left', xpos+'px');
                $(selector).css('top', ypos+'px');
                var c = chcolors[i];
                $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
            }
        }
    //End of window.onload();
    });
})();






