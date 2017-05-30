(function() {
    var chnoteNames = ["#chEb","#chD","#chDb","#chC","#chB","#chBb","#chA","#chAb","#chG","#chGb","#chF","#chE"];

    for (var i = 0; i < 12; i++) {
        var chcWidth = $('#chReference').width();
        var chcHeight = $('#chReference').height();
        var chxpos = chcWidth/2+Math.cos(i*Math.PI/6)*chcWidth/2- $('.chcircles').width()/2;
        var chypos = chcHeight/2-Math.sin(i*Math.PI/6)*chcHeight/2- $('.chcircles').height()/2;
        var chselector = chnoteNames[i];
        $(chselector).css('left', chxpos+'px');
        $(chselector).css('top', chypos+'px');
        $(chselector).css('background-color', 'rgb(227,193,99)');
    }
})();