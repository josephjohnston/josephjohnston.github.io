window.onload = start;
function start() {
  // basic trans
  var basicCanvas = document.getElementById('basic-trans');
  var basicTrans = new Transformer(basicCanvas,'basic');
  // inverse trans
  var inverseCanvas = document.getElementById('inverse-trans');
  var inverseTrans = new Transformer(inverseCanvas,'inverse');
  // diagram
  var diagram = new Diagram(basicTrans,inverseTrans);
}
globs = {
  colors: [
    '#9b4eca',
    '#939292',
    '#FF9E00'
  ]
}


// $.transform([
//   [1,-v],
//   [0,1]
// ]).transform([
//   [1,0],
//   [0,g*(1-Math.pow(v/cs,2))]
// ]).transform([
//   [,0],
//   [0,1]
// ]).transform([
//   [1,0],
//   [-v/Math.pow(cs,2),1]
// ]);