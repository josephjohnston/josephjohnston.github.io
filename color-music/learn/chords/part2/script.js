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
        //SET UP VARIABLES
        var title;
        var modes = ["majorTriad","minorTriad","majorSeventh","minorSeventh","dominantSeventh","diminishedTriad","augmentedTriad"];
        var mode = modes[0];
        var keys = ["A","D","G","C","F","Bb","Eb","Ab","Db","Gb","B","E"];
        var key = keys[3];
        action(modes[0],3);
        highlight("#majorTriad");
        //changing modes
        $.each(modes, function(index,value){
            $('#'+value).click(function(){
                mode = value;
                highlight('#'+value);
                for(var i=0; i<12; i++) {
                    if(key===keys[i]) {
                       action(mode,i); 
                    }
                }   
            });
        });
        //click on outside notes
        $.each(notesOut, function(index,value){
            $(value).click(function(){
                key = keys[index];
                action(mode,index);
            });
        });
        //click on inside notes
        $.each(notesIn, function(index,value){
            $(value).click(function(){
                key = keys[index];
                action(mode,index);
            });
        });
        
        function action(mode,key) {
            drawChordBoard();
            if(mode===modes[0]) {
                majorTriad(key);
                title = keys[key]+" Maj";
                $("#header").text(title);
            } else if (mode===modes[1]) {
                minorTriad(key);
                title = keys[key]+" Min";
                $("#header").text(title);
            } else if (mode===modes[2]) {
                majorSeventh(key);
                title = keys[key]+" Maj7";
                $("#header").text(title);
            } else if (mode===modes[3]) {
                minorSeventh(key);
                title = keys[key]+" Min7";
                $("#header").text(title);
            } else if (mode===modes[4]) {
                dominantSeventh(key);
                title = keys[key]+" 7";
                $("#header").text(title);
            } else if (mode===modes[5]) {
                diminishedTriad(key);
                title = keys[key]+" Dim";
                $("#header").text(title);
            } else if (mode===modes[6]) {
                augmentedTriad(key);
                title = keys[key]+" Aug";
                $("#header").text(title);
            }
        }
    });
    
    
    function majorTriad(i) {
        light(notesOut[i],colors[i]); //1st
        if(i<4 && i>0) {
            light(notesIn[i+8],colors[i+8]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
        } else if(i===0) {
            light(notesIn[i+8],colors[i+8]); //3rd
            light(notesOut[i+11],colors[i+11]); //5th
        } else if(i>3) {
            light(notesIn[i-4],colors[i-4]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
        }
    }
    function minorTriad(i) {
        light(notesIn[i],colors[i]); //1st
        if(i>0 && i<9) {
            light(notesOut[i+3],colors[i+3]); //3rd
            light(notesIn[i-1],colors[i-1]); //5th
        } else if(i===0) {
            light(notesOut[i+3],colors[i+3]); //3rd
            light(notesIn[i+11],colors[i+11]); //5th
        } else if(i>8) {
            light(notesOut[i-9],colors[i-9]); //3rd
            light(notesIn[i-1],colors[i-1]); //5th
        }
    }
    function majorSeventh(i) {
        light(notesOut[i],colors[i]); //1st
        if(i<4 && i>0) {
            light(notesIn[i+8],colors[i+8]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
            light(notesIn[i+7],colors[i+7]); //5th
        } else if(i===0) {
            light(notesIn[i+8],colors[i+8]); //3rd
            light(notesOut[i+11],colors[i+11]); //5th
            light(notesIn[i+7],colors[i+7]); //7th
        } else if(i===4) {
            light(notesIn[i-4],colors[i-4]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
            light(notesIn[i+7],colors[i+7]); //7th
        } else if(i>4) {
            light(notesIn[i-4],colors[i-4]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
            light(notesIn[i-5],colors[i-5]); //7th
        }
    }
    function minorSeventh(i) {
        light(notesIn[i],colors[i]); //1st
        if(i===0) {
            light(notesOut[i+3],colors[i+3]); //3rd
            light(notesIn[i+11],colors[i+11]); //5th
            light(notesOut[i+2],colors[i+2]); //7th
        } else if(i>0 && i<9) {
            light(notesOut[i+3],colors[i+3]); //3rd
            light(notesIn[i-1],colors[i-1]); //5th
            light(notesOut[i+2],colors[i+2]); //7th
        } else if(i===9) {
            light(notesOut[i-9],colors[i-9]); //3rd
            light(notesIn[i-1],colors[i-1]); //5th
            light(notesOut[i+2],colors[i+2]); //7th
        } else if(i>9) {
            light(notesOut[i-9],colors[i-9]); //3rd
            light(notesIn[i-1],colors[i-1]); //5th
            light(notesOut[i-10],colors[i-10]); //7th
        }
    }
    function dominantSeventh(i) {
        light(notesOut[i],colors[i]); //1st
        if(i<4 && i>0) {
            light(notesIn[i+8],colors[i+8]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
            light(notesIn[i+2],colors[i+2]); //5th
        } else if(i===0) {
            light(notesIn[i+8],colors[i+8]); //3rd
            light(notesOut[i+11],colors[i+11]); //5th
            light(notesIn[i+2],colors[i+2]); //7th
        } else if(i>3 && i<10) {
            light(notesIn[i-4],colors[i-4]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
            light(notesIn[i+2],colors[i+2]); //7th
        } else if(i>9) {
            light(notesIn[i-4],colors[i-4]); //3rd
            light(notesOut[i-1],colors[i-1]); //5th
            light(notesIn[i-10],colors[i-10]); //7th
        }
    }
    function diminishedTriad(i) {
        light(notesOut[i],colors[i]); //1st
        if(i>5 && i<9) {
            light(notesOut[i+3],colors[i+3]); //3rd
            light(notesOut[i-6],colors[i-6]); //5th
        } else if(i<6) {
            light(notesOut[i+3],colors[i+3]); //3rd
            light(notesOut[i+6],colors[i+6]); //5th
        } else if(i>8) {
            light(notesOut[i-9],colors[i-9]); //3rd
            light(notesOut[i-6],colors[i-6]); //5th
        }
    }
    function augmentedTriad(i) {
            light(notesOut[i],colors[i]); //1st
        if(i>3 && i<8) {
            light(notesOut[i-4],colors[i-4]); //3rd
            light(notesOut[i+4],colors[i+4]); //5th
        } else if(i<4) {
            light(notesOut[i+8],colors[i+8]); //3rd
            light(notesOut[i+4],colors[i+4]); //5th
        } else if(i>7) {
            light(notesOut[i-4],colors[i-4]); //3rd
            light(notesOut[i-8],colors[i-8]); //5th
        }
    }
    var notesOut = ["#OutA","#OutD","#OutG","#OutC","#OutF","#OutBb","#OutEb","#OutAb","#OutDb","#OutGb","#OutB","#OutE"];
    var notesIn = ["#InA","#InD","#InG","#InC","#InF","#InBb","#InEb","#InAb","#InDb","#InGb","#InB","#InE"];
    var opa = 0.2;
    var colors = [
        [255,100,  0, opa],
        [255,153,  0, opa],
        [255,198,  0, opa],
        [255,255, 11, opa],
        [170,255,  0, opa],
        [  2,219,  0, opa],
        [  0,199,166, opa],
        [ 26,142,255, opa],
        [ 74, 31,255, opa],
        [138,  0,241, opa],
        [219,  0,215, opa],
        [255,  0,100, opa]];
        
    function light(circle,color) {
        $(circle).css('background','rgb('+color[0]+','+color[1]+','+color[2]+')');
    }
    
    function drawChordBoard() {
            for (var i = 0; i < 12; i++) {
                var cWidth = $('#fiReferenceOut').width();
                var cHeight = $('#fiReferenceOut').height();
                var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('#fiReferenceOut>div').width()/2;
                var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('#fiReferenceOut>div').height()/2;
                var selector = '#fiReferenceOut ' + notesOut[i];
                $(selector).css('left', xpos+'px');
                $(selector).css('top', ypos+'px');
                var c = colors[i];
                $(selector).css('background-color', 'rgba('+c[0]+','+c[1]+','+c[2]+','+c[3]+')');
            }
            for (var i = 0; i < 12; i++) {
                var cWidth = $('#fiReferenceIn').width();
                var cHeight = $('#fiReferenceIn').height();
                var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('#fiReferenceIn>div').width()/2;
                var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('#fiReferenceIn>div').height()/2;
                var selector = '#fiReferenceIn ' + notesIn[i];
                $(selector).css('left', xpos+'px');
                $(selector).css('top', ypos+'px');
                var c = colors[i];
                $(selector).css('background-color', 'rgba('+c[0]+','+c[1]+','+c[2]+','+c[3]+')');
            }
    }
    
    function highlight(highlighted) {
        $("#majorTriad").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $("#minorTriad").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $("#majorSeventh").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $("#minorSeventh").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $("#dominantSeventh").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $("#diminishedTriad").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $("#augmentedTriad").css("background","linear-gradient(rgb(255,255,255),rgb(127,127,127))");
        $(highlighted).css("background","radial-gradient(rgb(255,255,255),rgb(50,50,50))");
    }

})();