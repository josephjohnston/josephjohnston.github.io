window.onload = start;
var $;
function start() {
  $ = new Diagram();
  $.init();
}
function Diagram() {}
Diagram.prototype = {
  setVariables: function() {
    $.width = window.innerWidth;
    $.height = window.innerHeight;
    // colors
    $.backColor = '#2a4556';
    $.bottomColor = '#477266';
    $.indicatorColor = '#3f7084';
    $.textBoxColor = '#325968';
    $.boxSideColor = '#3f7084';
    $.fontColor = '#bed4d8';
    $.circleColor = '#73a7bc';
    $.insideShadowColor = '#3f3f3f';
    $.outsideShadowColor = '#6d6d6d';
    // frame
    $.frameWidth =$.width;
    $.frameHeight = $.height*1/4;
    $.upperHeight = $.height-$.frameHeight;
    $.padding = $.frameWidth/8;
    $.innerWidth = $.frameWidth-2*$.padding;
    $.frameLeft = 0;
    $.frameTop = $.upperHeight;
    $.indicatorHeight = $.frameHeight/12;
    // title
    $.fontSize = Math.floor($.upperHeight/28);
    $.fontFamily = 'Roboto';
    $.titleLeft = $.width/2+25// + $.width/12;
    $.titleTop = $.upperHeight*1/4//-$.fontSize*2;
    $.titleWidth = $.width/4//$.width-$.width/12-$.titleLeft;
    $.titleHeight = $.upperHeight*1/2;
    $.titlePadding = $.titleHeight/6;
    // picture
    $.picHeight = $.upperHeight * 1/2;
    $.picCenterX = $.width*0.3;
    $.picCenterY = $.upperHeight/2;
    $.currI = 0;
    // other
    $.maxTime;
    $.points = [];
    $.images = [];
    $.imageRatios = [];
    $.texts = [];
    $.keyed = false
    $.disclaimed = false
    $.loaded = false
  },
  zoomed: function(scale) {
    if($.keyed==true) {
      return
    }
    // indicator
    $.indicator
      .attr('width',$.innerWidth/scale)
      .attr('x',$.padding + $.innerWidth - $.innerWidth/scale);
    // circles
    var I = -1;
    $.circles
      .attr('cx',function(d,i) {
        var x = $.frameWidth - $.padding - scale*($.innerWidth - d);
        if(x<$.padding) {
          I = i
        }
        return x;
      })
    if(I+1!=$.currI && I+1<$.points.length) {
      $.currI = I + 1
      $.circles
        .transition()
        .attr('r',function(d,i) {
          return i==$.currI ? 20 : 6
        })
      $.switch()
    }
  },
  keyLeft: function() {
    if($.currI==0) {
      return
    }
    $.currI--;
    $.key();
  },
  keyRight: function() {
    if($.currI==$.points.length-1) {
      return
    }
    $.currI++;
    $.key();
  },
  key: function() {
    $.keyed = true
    var scale = $.innerWidth/($.innerWidth - $.points[$.currI])
    $.zoom
      .scaleTo(d3.select('html'),scale)
    // indicator
    $.indicator
      .transition()
      .attr('width',$.innerWidth/scale)
      .attr('x',$.padding + $.innerWidth - $.innerWidth/scale)
    // circles
    $.circles
      .transition()
      .attr('cx',function(d,i) {
        var x = $.frameWidth - $.padding - scale*($.innerWidth - d);
        return x;
      })
      .attr('r',function(d,i) {
        return i==$.currI ? 20 : 6
      })
    $.switch()
    $.keyed = false
  },
  switch: function() {
    // text
    $.text.text($.texts[$.currI]);
    // picture
    var width = $.picHeight*$.imageRatios[$.currI]
    var node = $.picFrame.node()
    if(node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
    node.appendChild($.images[$.currI])
    $.picFrame
      .transition().ease(d3.easeLinear)
      .style('left',$.picCenterX-width/2+'px')
      .style('top',$.picCenterY-$.picHeight/2+'px')
    $.picFrame.select('svg')
      .style('position','absolute')
      .attr('height',$.picHeight)
      .attr('width',$.picHeight*$.imageRatios[$.currI])
      .style('box-shadow','0 4px 8px 0 '+$.insideShadowColor+', 0 6px 20px 0 '+$.outsideShadowColor)
  },
  setStage: function() {
    $.diagramBox = d3.select('body').append('div')
      .style('background',$.backColor)
      .style('position','absolute')
      .style('width',$.width+'px')
      .style('height',$.height+'px')
      .style('z-index',-1)
    // zoom
    $.zoom = d3.zoom()
      .scaleExtent([1,$.maxTime])
      .on('zoom',function() {
        $.zoomed(d3.event.transform.k)
      })
    // container
    $.frame = $.diagramBox.append('svg')
      .attr('width',$.frameWidth)
      .attr('height',$.frameHeight)
      .style('background','linear-gradient('+$.backColor+','+$.bottomColor+')')
      .style('position','absolute')
      .style('left',$.frameLeft)
      .style('top',$.frameTop)
    d3.select('html')
      .style('pointer-events','all')
      .call($.zoom)
    // circles
    $.circles = $.frame.selectAll('circle')
      .data($.points)
      .enter().append('circle')
        .attr('r',6)
        .attr('fill',$.circleColor)
        .attr('cy',($.frameHeight-$.indicatorHeight)/2)
        .attr('cx',function(d) {
          return $.padding + d
        })
    // indicator
    $.indicator = $.frame.append('rect')
      .attr('x',$.padding)
      .attr('y',3)
      // .attr('rx',$.indicatorHeight/3)
      .attr('width',$.innerWidth)
      .attr('height',$.indicatorHeight)
      .attr('fill',$.indicatorColor)
    // title
    $.textBox = $.diagramBox.append('div')
      .style('position','absolute')
      .style('background',$.textBoxColor)
      .style('left',$.titleLeft+'px')
      .style('top',$.titleTop+'px')
      .style('width',$.titleWidth+'px')
      .style('height',$.titleHeight-$.titlePadding*2+'px')
      .style('overflow-y','scroll')
      .style('padding',$.titlePadding+'px')
      .style('border-left','10px solid '+$.boxSideColor)
      .style('box-shadow','0 4px 8px 0 '+$.insideShadowColor+', 0 6px 20px 0 '+$.outsideShadowColor)
    $.textBox.on('mousewheel',function() {
        d3.event.cancelBubble = true
      })
    $.text = $.textBox.append('p')
      .style('font-size',$.fontSize+'px')
      .style('font-family',$.fontFamily)
      .style('color',$.fontColor)
    // picture
    $.picFrame = $.diagramBox.append('div')
      .style('position','absolute')
      .style('left',$.width+'px')
      .style('top',$.height+'px')
      .style('width','0px')
      .style('height','0px')
    Mousetrap.bind('left',$.keyLeft)
    Mousetrap.bind('right',$.keyRight)
  },
  makeLoadCover: function() {
    $.loadCover = d3.select('body').append('div')
      .style('position','absolute')
      .style('width',$.width+'px')
      .style('height',$.height+'px')
      .style('background','#477266')
    var box = $.loadCover.append('div')
      .style('position','absolute')
      .style('left',$.width/3+'px')
      .style('top',$.height/3+'px')
      .style('width',$.width/3+'px')
      .style('height','px')
    box.append('p')
      .attr('align','center')
      .text('Loading...')
      .attr('style','font-size:34px;color:#c9dde5;font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;')
    box.append('p')
      .attr('align','center')
      .text('The info in this interactive comes, almost word for word, from BBC\'s 2015 documentary "History of the World in 2 Hours." The music is the theme song of the movie Gladiator.')
      .attr('style','font-size:20px;color:#c9dde5;font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;')
    // box.append('p')
    //   .attr('align','center')
    //   .text('Click anywhere to continue.')
    //   .attr('style','font-size:20px;color:#c9dde5;font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;')
    // $.loadCover.on('click',function() {
    //   $.disclaimed = true;
    //   // $.enter();
    // })
  },
  enter: function() {
    if(/*$.disclaimed==true && */$.loaded==true) {
      // $.audio.play()
      // reset top bar
      document.getElementById('top-bar').innerHTML = 'use mousepad or left and right arrow keys';
      $.setStage()
      $.loadCover
        .transition().ease(d3.easeLinear)
        .style('opacity',0)
        .on('end',function() {
          $.loadCover.remove();
        })
      $.switch();
      $.circles
        .transition()
        .attr('r',function(d,i) {
          return i==$.currI ? 20 : 6
        })
    }
  },
  processData: function(data) {
    // points
    var scaleFactor;
    var years = data.map(function(d) {
      // convert everything to ya units
      var year;
      // if(d.type=='ya') {
        year = d.year*Math.pow(10,d.scale)
      // } else if(d.type=='bc') {
      //   year = 2017+d.year*Math.pow(10,d.scale)
      // } else if(d.type=='ad') {
      //   year = 2017-d.year*Math.pow(10,d.scale)
      // }
      return year;
    })
    $.maxTime = Math.max.apply(Math,years);
    var scaleFactor = $.maxTime/$.innerWidth;
    $.points = years.map(function(d) {
      return $.innerWidth - d/scaleFactor
    })
    // texts
    $.texts = data.map(function(d) {
      return d.text
    })
    // images
    var queue = d3.queue()
    for(var i=0; i<data.length; ++i) {
      var fileName = './events/'+data[i].file+'.svg'
      queue.defer(d3.xml,fileName)
    }
    queue.awaitAll(function(error,files) {
      if(error) throw error;
      files.map(function(file) {
        var width = file.documentElement.width.baseVal.value
        var height = file.documentElement.height.baseVal.value
        $.imageRatios.push(width/height)
        $.images.push(file.documentElement)
      })
      $.loaded = true;
      $.enter();
    })
  },
  init: function() {
    $.setVariables();
    $.audio = new Audio('gladiator.mp3')
    $.audio.loop = true;
    d3.json('./events/data.json',function(error,data) {
      $.makeLoadCover();
      // $.disclaimed = true
      $.processData(data)
    });
  }
}