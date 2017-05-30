(function() {
    $(document).ready(function() {
        //POPUP BOX
        $("#clickMe").click(function() {
            $("#popup").fadeIn();
        });
        $("#popup>a").click(function() {
            $("#popup").fadeOut();
        });
        writeTitle("Octave");
        drawCircles();
        changingDescription1("The octave is the most harmonious interval. It is a very simple ratio of string length and frequency. The higher note is half the string length and twice the frequency of the lower note. The two notes sound so similar, in fact, that they have the same name. In this case, we have two C’s, both colored yellow. You can arrive at an octave by taking any note and counting up or down twelve notes. When you hear the first two notes of 'Somewhere Over the Rainbow,’ you are listening to an octave. The octave is often used in the left hand to form a strong and simple base sound. Play octaves on the piano with a variety of notes. Become familiar with how it sounds so you can recognize the interval when you hear it. We now have two C’s an octave apart. From here onwards, we will compare every note to both of them. Doing this, we will see two separate intervals for each note we examine. One interval will be between the note and the bottom C, the other interval between the note and the top C.");
        $("#fracTopL").text("1");
        $("#fracTopL").css("left","10px");
        $("#fracBottomL").text("2");
        $("#fracBottomL").css("left","10px");
        clearHarp();
        drawHarp();
        changingStrings(461,65,461,284);
        $("#fracTopR").text("2");
        $("#fracTopR").css("left","10px");
        $("#fracBottomR").text("1");
        $("#fracBottomR").css("left","10px");
        clearWaves();
        changingDescription2("This is what the frequency wave of our bottom note C looks like. The top C has a frequency exactly twice that of the bottom C, as shown above to the right.");
        changingDescription3("Continuing from here, we will take the frequency wave of the note we are analyzing and layer its wave on top of the bottom C’s wave and the top C’s wave, in order to examine it in relationship to C.");
        clearIntervalMarker();
        changingIntervals(0,"","");
        writeOctave();
        $("#fiC,#chC").click(function() {   
            writeTitle("Octave");
            drawCircles();
            changingDescription1("The octave is the most harmonious interval. It is a very simple ratio of string length and frequency. The higher note is half the string length and twice the frequency of the lower note. The two notes sound so similar, in fact, that they have the same name. In this case, we have two C’s, both colored yellow. You can arrive at an octave by taking any note and counting up or down twelve notes. When you hear the first two notes of 'Somewhere Over the Rainbow,’ you are listening to an octave. The octave is often used in the left hand to form a strong and simple base sound. Play octaves on the piano with a variety of notes. Become familiar with how it sounds so you can recognize the interval when you hear it. We now have two C’s an octave apart. From here onwards, we will compare every note to both of them. Doing this, we will see two separate intervals for each note we examine. One interval will be between the note and the bottom C, the other interval between the note and the top C.");
            $("#fracTopL").text("1");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("2");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(461,65,461,284);
            $("#fracTopR").text("2");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("1");
            $("#fracBottomR").css("left","10px");
            changingDescription2("Octave!");
            clearWaves();
            changingDescription2("This is what the frequency wave of our bottom note C looks like. The top C has a frequency exactly twice that of the bottom C, as shown above to the right.");
            changingDescription3("Continuing from here, we will take the frequency wave of the note we are analyzing and layer its wave on top of the bottom C’s wave and the top C’s wave, in order to examine it in relationship to C.");
            clearIntervalMarker();
            changingIntervals(0,"","");
            writeOctave();
        });
        $("#fiG,#chG").click(function() {
            writeTitle("5th");
            drawCircles();
            changingOpacity("#fiG","#chG", "rgb(255,198,0)", "rgb(255,198,0)");
            changingDescription1("The fifth interval (often referred to as perfect fifth) is the second most harmonious interval after the octave. The ratios of string length and frequency are slightly more complex fractions (2/3 and 3/2) than those of the octave (1/2 and 2/1). The reciprocal of the fifth is the fourth. I will continue to mention reciprocals for each interval. See if you can pick out some interesting relationships between an interval and its reciprocal. One property of reciprocals was mentioned in the 'How to Use' of this section (see the 'click me' at the top of this page). You can arrive at a fifth by taking any note and counting up or down seven notes. The fifth is often used in the left hand along with the octave to form a confident and simple base line. Become familiar with the fifth, as it is one of the most common intervals you will play.");
            $("#fracTopL").text("2");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("3");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(311,65,311,349);
            $("#fracTopR").text("3");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("2");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is G!");
            clearWaves();
            changingWaves(4/3,"rgb(255,198,0)");
            changingDescription2("Above, the fifth (G, dark yellow), repeats its frequency cycle three times for every two times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the fifth (G, dark yellow), repeats its frequency cycle three times for every four times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(7,"5th","4th");
        });
        $("#fiD,#chD").click(function() {
            writeTitle("Major 2nd");
            drawCircles();
            changingOpacity("#fiD","#chD", "rgb(255,153,0)", "rgb(255,153,0)");
            changingDescription1("The major second may not sound like a particularly harmonious interval, but it is crucial in forming melodies, as it is often used as a transition note. For example, the second note of 'Mary Had a Little Lamb' forms a descending major second with the first note, and it is used as a transition to the third note. The reciprocal of the major second is the minor seventh. You can navigate to a major second by picking any note and moving up or down two notes. The major second is often used in melodies to make short transitions. You will often find major seconds when you look closely at song melodies.");
            $("#fracTopL").text("9");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("10");
            $("#fracBottomL").css("left","-4px");
            clearHarp();
            drawHarp();
            changingStrings(161,65,161,431);
            $("#fracTopR").text("10");
            $("#fracTopR").css("left","-4px");
            $("#fracBottomR").text("9");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is D!");
            clearWaves();
            changingWaves(18/10,"rgb(255,153,0)");
            changingDescription2("Above, the major 2nd (D, orange), repeats its frequency cycle ten times for every nine times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the major 2nd (D, orange), repeats its frequency cycle ten times for every eighteen times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(2,"M2","m7");
        });
        $("#fiA,#chA").click(function() {
            writeTitle("Major 6th");
            drawCircles();
            changingOpacity("#fiA","#chA", "rgb(255,100,0)", "rgb(255,100,0)");
            changingDescription1("The major sixth is often used in melodies as a jumping or extending note. Listen to the first two notes of Chopin’s 'Nocturne Op. 9 No. 2' and you’ll see what I mean. The reciprocal of the major sixth is the minor third. You can form a major sixth by taking any note and counting up or down nine notes.");
            $("#fracTopL").text("3");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("5");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(371,65,371,321);
            $("#fracTopR").text("5");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("3");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is A!");
            clearWaves();
            changingWaves(6/5,"rgb(255,100,0)");
            changingDescription2("Above, the major 6th (A, dark orange), repeats its frequency cycle five times for every three times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the major 6th (A, dark orange), repeats its frequency cycle five times for every six times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(9,"M6","m3");
        });
        $("#fiE,#chE").click(function() {
            writeTitle("Major 3th");
            drawCircles();
            changingOpacity("#fiE","#chE", "rgb(255,0,100)", "rgb(255,0,100)");
            changingDescription1("You might think the major third is the most harmonious interval. Mathematically, however, the major third is no more harmonious than the major second, major sixth, fifth, or octave, but our ears tend to be more attracted to it than those others. The first interval of 'Amazing Grace' is a major third. To find the reciprocal of the major third, take a peek at the minor sixth. You can arrive at a major third by shifting up or down four notes.");
            $("#fracTopL").text("4");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("5");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(221,65,221,393);
            $("#fracTopR").text("5");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("4");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is E!");
            clearWaves();
            changingWaves(8/5,"rgb(255,0,100)");
            changingDescription2("Above, the major 3rd (E, red), repeats its frequency cycle five times for every four times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the major 3rd (E, red), repeats its frequency cycle five times for every eight times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(4,"M3","m6");
        });
        $("#fiB,#chB").click(function() {
            writeTitle("Major 7th");
            drawCircles();
            changingOpacity("#fiB","#chB", "rgb(219,0,215)", "rgb(219,0,215)");
            changingDescription1("You may think that the major seventh sounds like a very dissonant interval. If it’s played as a flat two-note chord without any context, sure, it doesn’t sound very pleasing. If it’s used as a passing melody note, on the other hand, the major seventh can add flavor. To see an example of the major seventh used as a passing note, look at the right hand of Yiruma’s 'A River Flows in You,' where you’ll see the note ‘A’ often jump up to ‘Ab’. You can find a major seventh by shifting up or down eleven notes.");
            $("#fracTopL").text("8");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("15");
            $("#fracBottomL").css("left","-4px");
            clearHarp();
            drawHarp();
            changingStrings(431,65,431,297);
            $("#fracTopR").text("15");
            $("#fracTopR").css("left","-4px");
            $("#fracBottomR").text("8");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is B!");
            clearWaves();
            changingWaves(16/15,"rgb(219,0,215)");
            changingDescription2("Above, the major 7th (B, violet), repeats its frequency cycle fifteen times for every eight times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the major 7th (B, violet), repeats its frequency cycle fiftenn times for every sixteen times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(11,"M7","m2");
        });
        $("#fiGb,#chGb").click(function() {
            writeTitle("Tritone");
            drawCircles();
            changingOpacity("#fiGb","#chGb", "rgb(138,0,241)", "rgb(138,0,241)");
            changingDescription1("As far as math is concerned, the tritone is the most dissonant interval. Punch in 45/32 (its frequency ratio) into your calculator and see what you get. It’s not the simplest number. This does not mean the tritone is unfavorable to use in all contexts. For example, the tritone plays an essential role in the dominant seventh chord. Play any blues song and you’ll encounter tritones galore. This interval is suitable for holding musical tension. Try playing a tritone on your keyboard and you’ll hear its tight resonance. In order to release the tension, either move both fingers one note outwards or one note inwards. If you’ve noticed a pattern in finding reciprocals, did you already figure out the tritone’s reciprocal? It’s the tritone! Shift any note up or down six notes and you’ll have a tritone.");
            $("#fracTopL").text("32");
            $("#fracTopL").css("left","-4px");
            $("#fracBottomL").text("45");
            $("#fracBottomL").css("left","-4px");
            clearHarp();
            drawHarp();
            changingStrings(281,65,281,364);
            $("#fracTopR").text("45");
            $("#fracTopR").css("left","-2px");
            $("#fracBottomR").text("32");
            $("#fracBottomR").css("left","-4px");
            changingDescription2("This is Gb!");
            clearWaves();
            changingWaves(64/45,"rgb(138,0,241)");
            changingDescription2("Above, the tritone (Gb, purple), repeats its frequency cycle forty-five times for every thirty-two times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the tritone (Gb, purple), repeats its frequency cycle forty-five times for every sixty-four times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(6,"Tri","Tri");
        });
        $("#fiDb,#chDb").click(function() {
            writeTitle("Minor 2th");
            drawCircles();
            changingOpacity("#fiDb","#chDb", "rgb(74,31,255)", "rgb(74,31,255)");
            changingDescription1("The minor second, although rather dissonant, is one of the most intriguing intervals in certain contexts. This small interval can give you the feeling of being swept up into the music that makes some listening experiences so intimate. To see an example of a minor second, look at the first few notes of Beethoven’s 'Für Elise.' You can form a minor second by just counting up or down one note from any other note.");
            $("#fracTopL").text("15");
            $("#fracTopL").css("left","-4px");
            $("#fracBottomL").text("16");
            $("#fracBottomL").css("left","-4px");
            clearHarp();
            drawHarp();
            changingStrings(131,65,131,449);
            $("#fracTopR").text("16");
            $("#fracTopR").css("left","-4px");
            $("#fracBottomR").text("15");
            $("#fracBottomR").css("left","-4px");
            changingDescription2("This is Db!");
            clearWaves();
            changingWaves(30/16,"rgb(74,31,255)");
            changingDescription2("Above, the minor 2nd (Db, dark blue), repeats its frequency cycle sixteen times for every fifteen times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the minor 2nd (Db, dark blue), repeats its frequency cycle sixteen times for every thirty times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(1,"M7","m2");
        });
        $("#fiAb,#chAb").click(function() {
            writeTitle("Minor 6th");
            drawCircles();
            changingOpacity("#fiAb","#chAb", "rgb(26,142,255)", "rgb(26,142,255)");
            changingDescription1("The minor sixth can sometimes be difficult for listeners to distinguish from the major sixth. Like the major sixth, the minor sixth is commonly used in melodies. The chorus of 'We Are Young' by Fun contains a number of ascending minor sixths. The reciprocal of the minor sixth is the major third. To arrive at this interval, take any note and count up or down eight notes.");
            $("#fracTopL").text("5");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("8");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(341,65,341,335);
            $("#fracTopR").text("8");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("5");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is Ab!");
            clearWaves();
            changingWaves(10/8,"rgb(26,142,255)");
            changingDescription2("Above, the minor 6th (Ab, blue), repeats its frequency cycle eight times for every five times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the minor 6th (Ab, blue), repeats its frequency cycle eight times for every ten times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(8,"m6","M3");
        });
        $("#fiEb,#chEb").click(function() {
            writeTitle("Minor 3th");
            drawCircles();
            changingOpacity("#fiEb","#chEb", "rgb(0,199,166)", "rgb(0,199,166)");
            changingDescription1("Think the third and fourth notes of Beethoven’s 'Fifth Symphony.' Those two notes form a minor third. This interval is powerful and, like the major third, it is frequently used in melodies as a central note often reached by passing notes. The minor third’s reciprocal is the major sixth. Shifting up or down three notes will point you to a minor third.");
            $("#fracTopL").text("5");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("6");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(191,65,191,412);
            $("#fracTopR").text("6");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("5");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is Eb!");
            clearWaves();
            changingWaves(10/6,"rgb(0,199,166)");
            changingDescription2("Above, the minor 3rd (Eb, turquoise), repeats its frequency cycle six times for every five times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the minor 3rd (Eb, turquoise), repeats its frequency cycle six times for every ten times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(3,"m3","M6");
        });
        $("#fiBb,#chBb").click(function() {
            writeTitle("Minor 7th");
            drawCircles();
            changingOpacity("#fiBb","#chBb", "rgb(2,219,0)", "rgb(2,219,0)");
            changingDescription1("Like the major second, although this interval might not sound the most harmonious, it has a simple mathematical frequency ratio. Along with the tritone, the minor seventh is a vital facet of the dominant seventh chord. The reciprocal of the minor seventh is the major second. If you want to hear a minor seventh on the piano, take any note and move up or down ten notes.");
            $("#fracTopL").text("5");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("9");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(401,65,401,308);
            $("#fracTopR").text("9");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("5");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is Bb!");
            clearWaves();
            changingWaves(10/9,"rgb(2,219,0)");
            changingDescription2("Above, the minor 7th (Bb, green), repeats its frequency cycle nine times for every five times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the minor 7th (Bb, green), repeats its frequency cycle nine times for every ten times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(10,"m7","M2");
        });
        $("#fiF,#chF").click(function() {
            writeTitle("4th");
            drawCircles();
            changingOpacity("#fiF","#chF", "rgb(170,255,0)", "rgb(170,255,0)");
            changingDescription1("To hear a fourth (often referred to as a perfect fourth), hum to yourself 'Here Comes the Bride.' This interval is as harmonious as the fifth, yet it carries a more suspended sound than the fifth. This can be rectified by dropping the top note down one to form a major third.. You can form a fourth by counting up or down five notes from your starting note.");
            $("#fracTopL").text("4");
            $("#fracTopL").css("left","10px");
            $("#fracBottomL").text("3");
            $("#fracBottomL").css("left","10px");
            clearHarp();
            drawHarp();
            changingStrings(251,65,251,379);
            $("#fracTopR").text("3");
            $("#fracTopR").css("left","10px");
            $("#fracBottomR").text("4");
            $("#fracBottomR").css("left","10px");
            changingDescription2("This is F!");
            clearWaves();
            changingWaves(6/4,"rgb(170,255,0)");
            changingDescription2("Above, the fourth (F, light green), repeats its frequency cycle three times for every four times the bottom note (C, yellow) repeats its cycle.");
            changingDescription3("Above, the fourth (F, light green), repeats its frequency cycle three times for every eight times the top note (C, yellow) repeats its cycle.");
            clearIntervalMarker();
            changingIntervals(5,"4th","5th");
        });
    });
    
    function writeTitle(header) {
        $("#header").text(header);
    }
    
    function drawCircles() {
    var finoteNames = ["#fiA","#fiD","#fiG","#fiC","#fiF","#fiBb","#fiEb","#fiAb","#fiDb","#fiGb","#fiB","#fiE"];
    var ficolors = [
        [255,100,  0,0.2],
        [255,153,  0,0.2],
        [255,198,  0,0.2],
        [255,255, 11,1],
        [170,255,  0,0.2],
        [  2,219,  0,0.2],
        [  0,199,166,0.2],
        [ 26,142,255,0.2],
        [ 74, 31,255,0.2],
        [138,  0,241,0.2],
        [219,  0,215,0.2],
        [255,  0,100,0.2]];
        
    var chnoteNames = ["#chEb","#chD","#chDb","#chC","#chB","#chBb","#chA","#chAb","#chG","#chGb","#chF","#chE"];
    var chcolors = [
        [  0,199,166,0.2],
        [255,153,  0,0.2],
        [ 74, 31,255,0.2],
        [255,255, 11,1],
        [219,  0,215,0.2],
        [  2,219,  0,0.2],
        [255,100,  0,0.2],
        [ 26,142,255,0.2],
        [255,198,  0,0.2],
        [138,  0,241,0.2],
        [170,255,  0,0.2],
        [255,  0,100,0.2]];
        
    
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
            $(selector).css('background-color', 'rgba('+c[0]+','+c[1]+','+c[2]+','+c[3]+')');
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
            $(selector).css('background-color', 'rgba('+c[0]+','+c[1]+','+c[2]+','+c[3]+')');
        }
    }
    
        //CHANGING OPACITY
        function changingOpacity(fiNote,chNote,fiColor, chColor) {
            $(fiNote).css('background-color', fiColor);
            $(chNote).css('background-color', chColor);
        }
        
        //CHANGING DESCRIPTION
        function changingDescription1(text) {
            $("#description1").text(text);
        }
        function changingDescription2(text) {
            $("#description2").text(text);
        }
        function changingDescription3(text) {
            $("#description3").text(text);
        }
        
        
    function drawHarp() {
        //UGLY HARP
        var canvasUH = document.getElementById("canvasUH"),
        context = canvasUH.getContext("2d");
        
                //context.fillStyle = "red";
                //context.fillRect(0,0,562,562);
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
        context.lineTo(101, 483);
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
        
        context.lineWidth = 4;
        context.strokeStyle = "rgb(128,128,128)";
        context.stroke();
        
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
    }
    
    
    function changingStrings(xTAS,yTAS,xBAS,yBAS) { 
        var canvasUH = document.getElementById("canvasUH"),
        context = canvasUH.getContext("2d");
        //active string
        context.beginPath();
        context.moveTo(xTAS, yTAS);
        context.lineTo(xBAS, yBAS);
        context.lineWidth = 4;
        context.strokeStyle = "rgb(60,60,60)";
        context.stroke();
    }  
    function clearHarp() {
        var canvasUH = document.getElementById("canvasUH"),
        context = canvasUH.getContext("2d");
        context.clearRect(0,0,canvasUH.width,canvasUH.height)
    }
    
                
    function clearWaves() {       
        //SOUND WAVES
        var canvasLeft = document.getElementById("canvasLeft"),
        context = canvasLeft.getContext("2d");
        
        context.clearRect(0,0,canvasLeft.width,canvasLeft.height)
        // bottom C
        context.beginPath();
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
        context.strokeStyle = "rgb(255,255,11)";
        context.lineCap = "round";
        context.stroke();
        
        var canvasRight = document.getElementById("canvasRight"),
        context = canvasRight.getContext("2d");
        
        context.clearRect(0,0,canvasRight.width,canvasRight.height)
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
        context.strokeStyle = "rgb(255,255,11)";
        context.lineCap = "round";
        context.stroke();
    }
    function changingWaves(ratio, waveColor) {
        var canvasLeft = document.getElementById("canvasLeft"),
        context = canvasLeft.getContext("2d");
        // note A
        var i = ratio;
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
        context.strokeStyle = waveColor;
        context.lineCap = "round";
        context.shadowColor = "black";
        context.shadowBlur = 10;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.stroke();
    
        var canvasRight = document.getElementById("canvasRight"),
        context = canvasRight.getContext("2d");
        // note A
        var i = ratio;
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
        context.strokeStyle = waveColor;
        context.lineCap = "round";
        context.shadowColor = "black";
        context.shadowBlur = 10;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.stroke();
    }  
    function changingIntervals(X,lText,hText) { 
        //INTERVAL MARKER
        var canvasIM = document.getElementById("canvasIM"),
        context = canvasIM.getContext("2d");
        
        //context.fillStyle = "red";
        //context.fillRect(0,0,1100,200);
        
        //vertical left
        context.beginPath()
        context.moveTo(40,190);
        context.lineTo(40,158);
        //top horizontal
        context.lineTo(735,158);
        //vertical right
        context.lineTo(735,190);
        //vertical middle
        context.moveTo(387,158);
        context.lineTo(387,190);
        
        context.lineWidth = 8;
        context.strokeStyle = "white";
        context.stroke();
        
        //triangle left
        context.beginPath()
        context.moveTo(40,180);
        context.lineTo(30,200);
        context.lineTo(50,200);
        context.closePath();
        context.fillStyle= "white";
        context.fill();
        //triangle right
        context.beginPath()
        context.moveTo(735,180);
        context.lineTo(725,200);
        context.lineTo(745,200);
        context.closePath();
        context.fillStyle= "white";
        context.fill();
        //triangle middle
        context.beginPath()
        context.moveTo(387,180);
        context.lineTo(377,200);
        context.lineTo(397,200);
        context.closePath();
        context.fillStyle= "white";
        context.fill();
        
    
        //Lower Text
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText(lText,(X*29+40 - 40)/2+40-38,120);
        //Lower Line
        context.beginPath()
        context.moveTo(X*29+40,190);
        context.lineTo(X*29+40,158);
        context.lineWidth = 8;
        context.strokeStyle = "white";
        context.stroke();
        //Lower Triangle
        context.beginPath();
        context.moveTo(X*29+40,180);
        context.lineTo(X*29+40-10,200);
        context.lineTo(X*29+40+10,200);
        context.closePath();
        context.fillStyle= "white";
        context.fill();
        
        //OTHER TEXT 1
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText(hText,(387 - (X*29+40))/2+X*29+40-38,120);
        
        //Middle Text
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText(lText,(X*29+40+12*29 - 387)/2+387-38,120);
        //Middle Line
        context.beginPath()
        context.moveTo(X*29+40+12*29,190);
        context.lineTo(X*29+40+12*29,158);
        context.lineWidth = 8;
        context.strokeStyle = "white";
        context.stroke();
        //Middle Triangle
        context.beginPath();
        context.moveTo(X*29+40+12*29,180);
        context.lineTo(X*29+40-10+12*29,200);
        context.lineTo(X*29+40+10+12*29,200);
        context.closePath();
        context.fillStyle= "white";
        context.fill();
        
        //OTHER TEXT 2
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText(hText,(735 - (X*29+40+12*29))/2+X*29+40+12*29-38,120);
        
        //Higher Text
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText(lText,(X*29+40+24*29 - 735)/2+735-38,120);
        //Higher Line
        context.beginPath()
        context.moveTo(X*29+40+24*29,190);
        context.lineTo(X*29+40+24*29,158);
        context.lineTo(380,158);
        context.lineWidth = 8;
        context.strokeStyle = "white";
        context.stroke();
        //Higher Triangle
        context.beginPath();
        context.moveTo(X*29+40+24*29,180);
        context.lineTo(X*29+40-10+24*29,200);
        context.lineTo(X*29+40+10+24*29,200);
        context.closePath();
        context.fillStyle= "white";
        context.fill();
       
    } 
    function writeOctave() {
        var canvasIM = document.getElementById("canvasIM"),
        context = canvasIM.getContext("2d");
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText("Octave",(0*29+40 - 60)/2+150,120);
        context.font="54px HelveticaNeue-UltraLight";
        context.fillStyle="rgb(128,128,128)";
        context.fillText("Octave",(0*29+40+12*29 - 40)/2+300,120);
    }
    function clearIntervalMarker() {
        var canvasIM = document.getElementById("canvasIM"),
        context = canvasIM.getContext("2d");
        context.clearRect(0,0,canvasIM.width,canvasIM.height)
    }
})();

