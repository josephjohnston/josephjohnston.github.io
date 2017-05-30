(function() {
    circleOfFifths();
    function circleOfFifths() {
    var finoteNames = ["#fiA","#fiD","#fiG","#fiC","#fiF","#fiBb","#fiEb","#fiAb","#fiDb","#fiGb","#fiB","#fiE"];
        for (var i = 0; i < 12; i++) {
            var ficWidth = $('#fiReference').width();
            var ficHeight = $('#fiReference').height();
            var fixpos = ficWidth/2+Math.cos(i*Math.PI/6)*ficWidth/2- $('.ficircles').width()/2;
            var fiypos = ficHeight/2-Math.sin(i*Math.PI/6)*ficHeight/2- $('.ficircles').height()/2;
            var fiselector = finoteNames[i];
            $(fiselector).css('left', fixpos+'px');
            $(fiselector).css('top', fiypos+'px');
            $(fiselector).css('background-color', 'rgb(227,193,99)');
        }
    }
})();