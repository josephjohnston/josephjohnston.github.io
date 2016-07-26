window.onload = function() {
  var myScroll = new IScroll('.MathJax_SVG_Display',{
    mouseWheel: true,
    scrollX: true,
    scrollY: false,
    scrollbars: 'custom'
  });
  var aScroll = new IScroll('.h',{
    mouseWheel: true,
    scrollX: true,
    scrollY: false,
    scrollbars: true
  });
}
