(function() {
    colorFifthsCircle();
    function colorFifthsCircle() {
        var finoteNames = ["#fiA","#fiD","#fiG","#fiC","#fiF","#fiBb","#fiEb","#fiAb","#fiDb","#fiGb","#fiB","#fiE"];
        var colors = [
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
        for (var i = 0; i < 12; i++) {
            var cWidth = $('#fireference').width();
            var cHeight = $('#fireference').height();
            var xpos = cWidth/2+Math.cos(i*Math.PI/6)*cWidth/2- $('.ficircles').width()/2;
            var ypos = cHeight/2-Math.sin(i*Math.PI/6)*cHeight/2- $('.ficircles').height()/2;
            var selector = finoteNames[i];
            $(selector).css('left', xpos+'px');
            $(selector).css('top', ypos+'px');
            var c = colors[i];
            $(selector).css('background-color', 'rgb('+c[0]+','+c[1]+','+c[2]+')');
        }
    }
})();