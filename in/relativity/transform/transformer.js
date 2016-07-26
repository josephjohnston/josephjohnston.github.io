function Transformer(canvas,type) {
  var $ = this;
  $.setVariables(canvas,type);
  $.redraw();
}
Transformer.prototype = {
  setVariables: function(canvas,type) {
    var $ = this;
    $.type = type; // whether basic or inverse matrix
    $.canvas = canvas;
    $.context = $.canvas.getContext('2d');
    $.margin = $.canvas.width*0.1;
    $.d = $.canvas.width/2 - $.margin; // half of drawing dimension
    // colors
    $.uniformColor = $.type==='basic' ? globs.colors[1] : globs.colors[0];
    $.transColor = $.type==='basic' ? globs.colors[0] : globs.colors[1];
    // light
    $.lightMin = 0;
    $.lightMax = Math.PI/2;
    $.lightInitial = Math.atan(2);
    $.light = $.lightInitial;
    $.lightColor = globs.colors[2];
    // velocity
    $.velocityMin = 0;
    $.velocityMax = 1;
    $.velocityInitial = 0.2;
    $.velocity = $.velocityInitial;
  },
  setLightSpeed: function(value) {
    var $ = this;
    $.light = value;
    $.redraw();
  },
  setVelocity: function(value) {
    var $ = this;
    $.velocity = value;
    $.redraw();
  },
  resetCanvas: function() {
    this.context.setTransform(1,0,0,-1,0,this.canvas.width);
  },
  // get lines
  getAxesLines: function() {
    var $ = this;
    var lines = [];
    // axis lines
    // x axis
    var aD = 6; // arrow dimension
    var left = [-$.d,0];
    var right = [$.d-aD,0];
    lines.push([left,right]);
    // y axis
    var bottomPoint = [0,-$.d];
    var topPoint = [0,$.d-aD];
    lines.push([bottomPoint,topPoint]);
    // arrows
    // right arrow
    var aTop = [$.d-aD,aD];
    var aBottom = [$.d-aD,-aD];
    var aRight = [$.d,0];
    lines.push([aTop,aBottom],[aBottom,aRight],[aRight,aTop]);
    // top arrow
    var aLeft = [-aD,$.d-aD];
    var aRight = [aD,$.d-aD];
    var aTop = [0,$.d];
    lines.push([aLeft,aRight],[aRight,aTop],[aTop,aLeft]);

    return lines;
  },
  getGridLines: function() {
    var $ = this;
    var blockNum = 4;
    var d = $.d*2/3;
    var blockD = d/blockNum;
    var lines = [];
    for(var i=0; i<blockNum*2+1; ++i) {
      // horizontal
      var y = blockD*(-blockNum + i);
      var leftPoint = [-d,y];
      var rightPoint = [d,y];
      var line = [leftPoint,rightPoint];
      lines.push(line);
      // vertical
      var x = blockD*(-blockNum + i);
      var bottomPoint = [x,-d];
      var topPoint = [x,d];
      var line = [bottomPoint,topPoint];
      lines.push(line);
    }
    return lines;
  },
  mM: function(point,matrix) {
    var newX = matrix[0][0]*point[0] + matrix[0][1]*point[1];
    var newY = matrix[1][0]*point[0] + matrix[1][1]*point[1];
    console.log(newX,newY,newX/newY);
  },
  transformLines: function(lines,matrix) {
    var $ = this;
    var newLines = [];
    for(var i=0; i<lines.length; ++i) {
      var line = lines[i];
      // point 1
      var point1 = line[0];
      var newPoint1x = matrix[0][0]*point1[0] + matrix[0][1]*point1[1];
      var newPoint1y = matrix[1][0]*point1[0] + matrix[1][1]*point1[1];
      var newPoint1 = [newPoint1x,newPoint1y];
      // point 2
      var point2 = line[1];
      var newPoint2x = matrix[0][0]*point2[0] + matrix[0][1]*point2[1];
      var newPoint2y = matrix[1][0]*point2[0] + matrix[1][1]*point2[1];
      var newPoint2 = [newPoint2x,newPoint2y];
      newLines.push([newPoint1,newPoint2]);
    }
    return newLines;
  },
  drawLines: function(lines,color,width) {
    var $ = this;
    var c = $.context;
    c.strokeStyle = color;
    c.lineWidth = width;
    var newLines = [];
    for(var i=0; i<lines.length; ++i) {
      var line = lines[i];
      var point1 = line[0];
      var point2 = line[1];
      var displ = $.d;
      var point1X = $.margin + point1[0] + displ;
      var point1Y = $.margin + point1[1] + displ;
      var point2X = $.margin + point2[0] + displ;
      var point2Y = $.margin + point2[1] + displ;
      c.beginPath();
      c.moveTo(point1X+0.5,point1Y+0.5);
      c.lineTo(point2X+0.5,point2Y+0.5);
      c.stroke();
    }
  },
  // render everything
  redraw: function() {
    var $ = this;
    var c = $.context;
    c.clearRect(0,0,$.canvas.width,$.canvas.width);
    var axes = $.getAxesLines();
    var grid = $.getGridLines();
    // base
    $.resetCanvas();
    var matrix = [
      [1,0],
      [0,1]
    ]
    var transAxes = $.transformLines(axes,matrix);
    var transGrid = $.transformLines(grid,matrix);
    $.drawLines(transAxes,$.uniformColor,2);
    $.drawLines(transGrid,$.uniformColor);
    // prime
    $.resetCanvas();
    var s = Math.tan($.light);
    var sign = $.type==='basic' ? -1 : +1;
    var v = sign * $.velocity * s;
    var g = 1/Math.sqrt(1 - Math.pow(v/s,2));
    var matrix = [
      [g,-g*(v/Math.pow(s,2))],
      [-g*v,g]
    ]
    var transAxes = $.transformLines(axes,matrix);
    var transGrid = $.transformLines(grid,matrix);
    $.drawLines(transAxes,$.transColor,2);
    $.drawLines(transGrid,$.transColor);
    // light
    $.resetCanvas();
    var angle = $.light;
    var matrix = [
      [Math.cos(angle),-Math.sin(angle)],
      [Math.sin(angle),Math.cos(angle)]
    ]
    var lightLine = [[[-$.d,0],[$.d,0]]];
    var transLightLine = $.transformLines(lightLine,matrix);
    $.drawLines(transLightLine,$.lightColor);
  },
  lM: function(matrix) {
    console.log(matrix.join('\n'));
  }
}