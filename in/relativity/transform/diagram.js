function Diagram(trans1,trans2) {
  var $ = this;
  $.setVariables(trans1,trans2);
  $.makeSliders();
}
Diagram.prototype = {
  setVariables: function(trans1,trans2) {
    var $ = this;
    $.trans1 = trans1;
    $.trans2 = trans2;
    $.atrans = $.trans1; // both should be used the same
  },
  makeSliders: function() {
    var $ = this;
    // light slider
    var lightSliderDiv = document.getElementById('light-slider');
    $.lightSlider = noUiSlider.create(lightSliderDiv,{
      start: [$.atrans.lightInitial],
      range: {
        'min': [$.atrans.lightMin],
        'max': [$.atrans.lightMax]
      },
      connect: 'lower'
    });
    $.lightSlider.on('slide',function() {
      var value = $.lightSlider.get();
      $.trans1.setLightSpeed(value);
      $.trans2.setLightSpeed(value);
    });
    // velocity slider
    var velocitySliderDiv = document.getElementById('velocity-slider');
    $.velocitySlider = noUiSlider.create(velocitySliderDiv,{
      start: [$.atrans.velocityInitial],
      range: {
        'min': [$.atrans.velocityMin],
        'max': [$.atrans.velocityMax]
      },
      connect: 'lower'
    });
    $.velocitySlider.on('slide',function() {
      var value = $.velocitySlider.get();
      $.trans1.setVelocity(value);
      $.trans2.setVelocity(value);
    });
  }
}