import mathjs from 'mathjs'
function scaleing(imgWidth, imgHeight, canvasWidth, canvasHeight) {
  if (imgHeight <= canvasHeight && imgWidth <= canvasWidth) {
    return 1
  } else {
    return Math.max(imgHeight / canvasHeight, imgWidth / canvasWidth)
  }
}
function getX(len, start) {
  var result = new Array(len)
  for (let i = 0; i < len; i++) {
    result[i] = i + start
  }
  return result
}

function getDived(f, f0) {
  var theF = mathjs.matrix(f)
  var theF0 = mathjs.matrix(f0)
  var b = mathjs.dotDivide(theF, theF0)
  return b.valueOf()
}

function getNeg(f) {
  var theF = mathjs.matrix(f)
  var negF = mathjs.map(theF, x => -x)
  return negF.valueOf()
}
export {scaleing, getX, getDived, getNeg}
